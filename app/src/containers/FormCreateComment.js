import React from 'react';
import { connect } from 'react-redux';
import { createNewComment } from '../actionCreators/comments'

import FormCreateCommentComponent from '../components/FormCreateComment'

const FormCreateComment = props => <FormCreateCommentComponent {...props} />;

const mapStateToProps = (state, props) => ({
    postId: state.posts.selectedPost._id
})

const mapDispatchToProps = dispatch => ({
    createNewComment: (comment) => dispatch(createNewComment(comment))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormCreateComment)