import React from "react";
import "./App.css";

const Login = () => {
  return (
    <form>
      <div className="form-group m-4">
        <label htmlFor="inputEmail">Email address</label>
        <input type="email" className="form-control" id="inputEmail"></input>
      </div>
      <div className="form-group m-4">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
        ></input>
      </div>
      <button type="submit" className="btn btn-primary m-4">
        Submit
      </button>
    </form>
  );
};

export default Login;
