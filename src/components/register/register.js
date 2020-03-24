import React, { Component } from 'react';
import { validate } from 'indicative/validator';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
//import axios from 'axios' ;
  
import './register.scss';
class Register extends Component {

    constructor(props){
        super(props)

        this.state = {
            fullname: '',
            email: '',
            password: '',
            password_confirmation: '',
            errorMessage: ''            
        }

        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);

        const data = this.state;

        const rules = {
            fullname: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed'
        };

        const messages = {
            required: (field) => `${field} is required`,
            'email.email': 'Please Enter valid email address',
            'password.min': 'Password is too short',
            'password.confirmed': 'Password doesnt match'
        }

        validate( data, rules, messages )
            .then(() => {
                console.log('success');
            })
            .catch(errors => {
               // console.log(errors);
                const formattedErrors = {}
                errors.forEach( error => formattedErrors[error.field] = error.message)
                console.log(formattedErrors.field);
                this.setState({errorMessage: formattedErrors});
                
            })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return <Router><div className="containerRegister">
                    <h3 className="login">Register</h3>
    
                    <div className="loginContainer">
                        <form onClick={this.submitHandler}>
                            <input type="text" id="fullname" onChange={this.handleInputChange} name="fullname" placeholder="Full Name" required />
                                { this.state.errorMessage.fullname &&
                                    <h3 className="error"> { this.state.errorMessage.fullname } </h3> }

                            <input type="text" id="email" name="email" onChange={this.handleInputChange} placeholder="Email Address" required />
                                { this.state.errorMessage.email &&
                                    <h3 className="error"> { this.state.errorMessage.email } </h3> }

                            <input type="password" id="password" name="password" onChange={this.handleInputChange} placeholder="Password" required />
                                { this.state.errorMessage.password &&
                                    <h3 className="error"> { this.state.errorMessage.password } </h3> }
                            
                            <input type="password" id="password_confirmation" onChange={this.handleInputChange} name="password_confirmation" placeholder="Confirm Password" required />

                            <input type="submit" value="Create an account" />
                        </form>
                        
                            <p>Already have an account? <span><Link to={"/login"}>Login</Link></span></p>
                                 
                        <div className="others">
                            <button type="button" className="google">Sign Up with Google</button>
                            <button type="button" className="facebook">Sign Up with Facebook</button>
                        </div>
                    </div>
                </div>
                
                </Router>
    }
}

export default Register