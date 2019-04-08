import React from 'react';
import { connect } from 'react-redux';
import { getAmountOfLikes, getIsLikedPost, likePost, unlikePost } from '../actionCreators/likes'

import LikesComponent from '../components/Likes';

const Likes = props => <LikesComponent {...props}/>

const mapStateToProps = state => ({
    amountOfLikes: state.likes.amountOfLikes,
    isLiked: state.likes.isLiked
})

const mapDispatchToProps = dispatch => ({
    getAmountOfLikes: postId => dispatch(getAmountOfLikes(postId)),
    getIsLiked: postId => dispatch(getIsLikedPost(postId)),
    likePost: postId => dispatch(likePost(postId)),
    unlikePost: postId => dispatch(unlikePost(postId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Likes)