import React from 'react';
import { connect } from 'react-redux';
import SignInComponent from '../components/SignIn';
import { signInUser } from '../actionCreators/users';

const SignIn = props => <SignInComponent {...props}/>

const mapStateToProps = state => ({
    redirectTo: state.users.redirectTo
})

const mapDispatchToProps = dispatch =>({
    signInUser: user => dispatch(signInUser(user))
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(SignIn)