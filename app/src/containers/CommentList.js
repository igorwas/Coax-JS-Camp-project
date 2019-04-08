import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, cleanComments } from '../actionCreators/comments';

import CommentListComponent from '../components/CommentList';

const CommentList = props => <CommentListComponent {...props}/>

const mapStateToProps = state => ({
    comments: state.comments.list
})

const mapDispatchToProps = dispatch => ({
    fetchComments: id => dispatch(fetchComments(id)),
    cleanComments: () => dispatch(cleanComments())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList)