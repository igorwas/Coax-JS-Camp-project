import React from 'react';
import { connect } from 'react-redux';
import { loadSinglePost, cleanSelectedPost } from '../actionCreators/posts';
import { getUserProfile } from '../actionCreators/users';

import PostSingleComponent from '../components/PostSingle';

const PostSingle = props => <PostSingleComponent {...props}/>

const mapStateToProps = state => ({
    post: state.posts.selectedPost,
    author: state.users.selectedUser
})

const mapDispatchToProps = dispatch => ({
    loadSinglePost: id => dispatch(loadSinglePost(id)),
    getUserProfile: id => dispatch(getUserProfile(id)),
    cleanSelectedPost: () => dispatch(cleanSelectedPost())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostSingle)