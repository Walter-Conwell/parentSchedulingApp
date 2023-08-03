import logoImage from "../assets/kidzdirect-low-resolution-color-logo.png";
import { useMutation } from "@apollo/client";
import { LOGIN_PROFILE } from "../utils/mutations";
import auth from "../utils/auth";
import React, { useState } from "react";
import "../App.css";

// // login function
const Login = () => {
  const [login, { error, data }] = useMutation(LOGIN_PROFILE);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const [loginStatus, setLoginStatus] = React.useState("Log in");
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    let loginCredentials = {
      email: email.value,
      password: password.value,
    };
    console.log(loginCredentials);
    try {
      const { data } = await login({
        variables: loginCredentials,
      });

      auth.login(data.login.token);

      console.log(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <section className="vh-100">
      <div className="container h-100 dkgreen-bkg">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Log In
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={onSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="name">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="email">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0"></div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn dkgreen-bkg btn-lg"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={logoImage}
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
