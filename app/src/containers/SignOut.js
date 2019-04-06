import React from 'react';
import { connect } from 'react-redux';
import { signOutUser } from '../actionCreators/users'

import SignOutConponent from '../components/SignOut'

const SignOut = props => <SignOutConponent {...props} />;

const mapDispatchToProps = dispatch => ({
    out: () => dispatch(signOutUser())
})

export default connect(
    null,
    mapDispatchToProps
)(SignOut)