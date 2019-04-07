import React from 'react';
import { connect } from 'react-redux';
import PostListComponent from '../components/PostList';
import { fetchPostsByUser, deletePost ,loadMorePosts } from '../actionCreators/posts';

const PostList = props => <PostListComponent {...props}/>

const mapStateToProps = ( state,props ) => ({
    postListData: state.posts.list,
    offset: state.posts.offset,
    userId: props.userId
})

const mapDispatchToProps = dispatch =>({
    getPostsFromServer: id => dispatch(fetchPostsByUser(id)),
    //deletePost: id => dispatch(deletePost(id))
    loadMore: offset => dispatch(loadMorePosts(offset)) 
})

export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(PostList)