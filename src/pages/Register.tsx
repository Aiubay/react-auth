import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";


const Register =  () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();
        
     await fetch("http://127.0.0.1:8000/api/register",{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        setRedirect(true)
    }
    if(redirect){
        return <Navigate to="/login"/>
    }

    return (
      <div>
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal label">Register</h1>

          <div className="form-floating">
            <input
              className="form-control"
              id="floatingName"
              placeholder="name"
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label htmlFor="floatingName">Name</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
}

export default Register;