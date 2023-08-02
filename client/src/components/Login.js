import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logoImage from "../assets/kidzdirect-low-resolution-color-logo.png";
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";
import auth from "../utils/auth";

// // login function
const Login = () => {
  const [loginStatus, setLoginStatus] = React.useState("Log in");
  const onSubmit = (e) => {
    e.preventDefault();
    setLoginStatus("Logging in...");
    const { email, password } = e.target.elements;
    let loginCredentials = {
      email: email.value,
      password: password.value,
    };
    console.log(loginCredentials);
  };
  return (
    <div>
      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        <img src={logoImage} className="img-fluid" alt="Sample image" />
      </div>
      <form onSubmit={onSubmit}>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3"></input>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
            ></input>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          {loginStatus}
        </button>
      </form>
      ;
    </div>
  );
};
export default Login;
