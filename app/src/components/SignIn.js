import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SingIn extends Component{
    constructor() {
        super();
        this.signIn = this.signIn.bind(this);
    }

    signIn(e){
        e.preventDefault();
        this.props.signInUser({ 
            email: e.target.email.value, 
            password: e.target.password.value,
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
            <div className="row">
                <form 
                    id="sign-in" 
                    className="col-md-6"
                    onSubmit={this.signIn}>
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
                    
                    <button 
                        className="btn btn-primary"
                        type="submit">Sign In
                    </button>
                </form>
            </div>
        )
    }
}

export default SingIn;