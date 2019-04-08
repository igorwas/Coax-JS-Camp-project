import React, { Component } from 'react';

import FormCreatePost from '../containers/FormCreatePost';
import PostList from '../containers/PostList';

class UserProfile extends Component {
    componentDidMount(){
        this.props.getUserProfile(this.props.match.params.id);
    } 

    render(){
        console.log(this.props)
        const { 
            selectedUser
        } = this.props;
        console.log(selectedUser._id)
        
        const name = (selectedUser.firstName || selectedUser.lastName) ? <h1>{ selectedUser.firstName } { selectedUser.lastName } </h1> : '';
        const createPost = selectedUser._id == localStorage.getItem('userId') ? <FormCreatePost /> : '';
        const postList = selectedUser._id !== undefined ? <PostList userId={selectedUser._id}/> : '';
        return(
            <React.Fragment>
                <div>
                    {name}
                    <h4>Email: <a href={`mailto:${selectedUser.email}`}>{selectedUser.email}</a></h4>
                </div>
                <hr />
                <div className='row'>
                    {createPost}
                </div>
                <hr />
                { postList }
                
            </React.Fragment>
        )
    }

    componentWillUnmount(){
        this.props.cleanSelectedUser();
    }
}

export default UserProfile;