import React, { Component } from 'react';
import './login.scss';

class Login extends Component {
   
    render() {

        return <div className="container">
                    <h3 className="login">Login</h3>
                    
                    <div className="loginContainer">
                        <form>
                            <input type="text" id="email" name="email" placeholder="Email Address" required />

                            <input type="password" id="password" name="password" placeholder="Password" required />

                            <input type="submit" value="Login to your account" />
                        </form>
                    </div>
                </div>  
    }
}

export default Login