import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SignOut extends Component{
    
    render(){
        console.log(this.props)
        this.props.out();
        return <Redirect to={'/'}/>;
    }
}

export default SignOut;