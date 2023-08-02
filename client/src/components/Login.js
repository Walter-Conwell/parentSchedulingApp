import logoImage from "../assets/kidzdirect-low-resolution-color-logo.png";
import { useMutation } from "@apollo/client";
import { LOGIN_PROFILE } from "../utils/mutations";
import auth from "../utils/auth";
import React, { useState } from "react";


// // login function
const Login = () => {
    const [ login, { error, data } ] = useMutation(LOGIN_PROFILE);
    if ( error ) {
        console.log(JSON.stringify(error));
    }

    const [loginStatus, setLoginStatus] = React.useState('Log in')
    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements
        let loginCredentials = {
            email: email.value,
            password: password.value,
        }
        console.log(loginCredentials);
        try {
            const { data } = await login({
              variables: loginCredentials
            });
      
            auth.login(data.login.token);
      
            console.log(data);
          } catch (error) {
            console.log(JSON.stringify(error));
          }
    }
    return (<form onSubmit={onSubmit}>
            <div className="row mb-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="email"></input>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="password"></input>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">{loginStatus}</button>
        </form>);
        

}; 
export default Login;
