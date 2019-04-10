import React, { Component } from 'react';

import FormCreatePost from '../containers/FormCreatePost';
import PostList from '../containers/PostList';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.currentUserId = ""
    }

    componentDidMount(){
        this.props.getUserProfile(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps){        
        const newUserId = newProps.match.params.id;
        if (newUserId !== this.currentUserId) {
            this.props.getUserProfile(newUserId);
            this.currentUserId = newUserId;
            this.props.fetchPostsByUser(newUserId);
        }
    }

    render(){
        const { 
            selectedUser
        } = this.props;
        
        const name = (selectedUser.firstName || selectedUser.lastName) ? <h1>{ selectedUser.firstName } { selectedUser.lastName } </h1> : null;
        const createPost = selectedUser._id == localStorage.getItem('userId') ? <FormCreatePost /> : '';
        const postList = selectedUser._id !== undefined ? <PostList userId={selectedUser._id}/> : '';

        return(
            <React.Fragment>
                <div>
                    {/* {name} */}
                    <h1>{ selectedUser.firstName } { selectedUser.lastName } </h1>

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