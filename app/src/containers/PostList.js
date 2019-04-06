import React from 'react';
import { connect } from 'react-redux';
import PostListComponent from '../components/PostList';
import { fetchPosts, deletePost } from '../actionCreators/posts';

const PostList = props => <PostListComponent {...props}/>

const mapStateToProps = state => ({
    postListData: state.posts.list
})

const mapDispatchToProps = dispatch =>({
    getPostsFromServer: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id))
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(PostList)