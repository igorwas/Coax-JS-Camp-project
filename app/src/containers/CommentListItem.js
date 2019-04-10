import React from 'react';
import { connect } from 'react-redux';

import CommentListItemComponent from '../components/CommentListItem';

const CommentListItem = props => <CommentListItemComponent {...props}/>

const mapStateToProps = (state, props) => ({
    commentItem: state.comments.list[props.commentId]
})

export default connect(
    mapStateToProps
)(CommentListItem)