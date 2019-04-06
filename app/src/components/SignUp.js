import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SignUp extends Component{
    constructor() {
        super();
        this.signUp = this.signUp.bind(this);
    }

    signUp(e){
        e.preventDefault();
        this.props.signUpNewUser({ 
            email: e.target.email.value, 
            password: e.target.password.value,
            firstName: e.target.firstName.value, 
            lastName: e.target.lastName.value
        })
    }

    render(){
        console.log(this.props);
        const {
            redirectTo
        } = this.props
        console.log(redirectTo);
        if(redirectTo){
            return <Redirect to={redirectTo}/>;
        }
        return (
            <form 
                id="sign-up" 
                className="col-md-6"
                onSubmit={this.signUp}>
                <input 
                    name="email"
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Email"
                    required
                />
                <input
                    name="password"
                    type="password"
                    className="form-control mb-2"
                    placeholder="Password"
                    required
                />
                <input 
                    name="firstName"
                    type="text" 
                    className="form-control mb-2"
                    placeholder="First name"
                />
                <input 
                    name="lastName"
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Last name"
                />
                
                <button 
                    className="btn btn-primary"
                    type="submit">Sign up
                </button>
            </form>
        )
    }
}

export default SignUp;