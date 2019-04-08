import React from 'react';
import { connect } from 'react-redux';
//import { deletePost } from '../actionCreators/posts';

import PostItem from '../components/PostListItem';

const PostRow = props => <PostItem {...props}/>

const mapStateToProps = (state, props) => ({
    itemData: state.posts.list[props.postId]
})

const mapDispatchToProps = dispatch => ({
    //deletePost: id => dispatch(deletePost(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostRow)