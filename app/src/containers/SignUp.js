import React from 'react';
import { connect } from 'react-redux';
import SignUpComponent from '../components/SignUp';
import { signUpNewUser } from '../actionCreators/users';

const SignUp = props => <SignUpComponent {...props}/>

const mapStateToProps = state => ({
    redirectTo: state.users.redirectTo
})

const mapDispatchToProps = dispatch =>({
    signUpNewUser: newUser => dispatch(signUpNewUser(newUser))
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(SignUp)