import React from 'react';
import { connect } from 'react-redux';
import { loadSinglePost } from '../actionCreators/posts';
import { getUserProfile } from '../actionCreators/users';

import PostSingleConponent from '../components/PostSingle';

const PostSingle = props => <PostSingleConponent {...props}/>

const mapStateToProps = state => ({
    post: state.posts.selectedPost,
    author: state.users.selectedUser
})

const mapDispatchToProps = dispatch => ({
    loadSinglePost: id => dispatch(loadSinglePost(id)),
    getUserProfile: id => dispatch(getUserProfile(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostSingle)