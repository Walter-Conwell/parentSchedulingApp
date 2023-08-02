import React from "react";
import "bootstrap/dist/css/bootstrap.css";


// // login function
const Login = () => {
    const [loginStatus, setLoginStatus] = React.useState('Log in')
    const onSubmit = (e) => {
        e.preventDefault()
        setLoginStatus('Logging in...')
        const { email, password } = e.target.elements
        let loginCredentials = {
            email: email.value,
            password: password.value,
        }
        console.log(loginCredentials);
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
