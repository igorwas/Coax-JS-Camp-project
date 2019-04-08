import React from 'react';
import { connect } from 'react-redux';
import UserProfileComponent from '../components/UserProfile';
import { getUserProfile, cleanSelectedUser } from '../actionCreators/users';
import { fetchPostsByUser } from '../actionCreators/posts';

const UserProfile = props => <UserProfileComponent {...props}/>

const mapStateToProps = ( state, props ) => ({
    selectedUser: state.users.selectedUser
})

const mapDispatchToProps = dispatch =>({
    getUserProfile: id => dispatch(getUserProfile(id)),
    cleanSelectedUser: () => dispatch(cleanSelectedUser()),
    fetchPostsByUser: id => dispatch(fetchPostsByUser(id))
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)