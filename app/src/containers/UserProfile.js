import React from 'react';
import { connect } from 'react-redux';
import UserProfileComponent from '../components/UserProfile';
import { getUserProfile } from '../actionCreators/users';

const UserProfile = props => <UserProfileComponent {...props}/>

const mapStateToProps = ( state, props ) => ({
    selectedUser: state.users.selectedUser
})

const mapDispatchToProps = dispatch =>({
    getUserProfile: id => dispatch(getUserProfile(id))
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)