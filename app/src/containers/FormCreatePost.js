import React from 'react';
import { connect } from 'react-redux';
import { createNewPost } from '../actionCreators/posts'

import FormCreatePostComponent from '../components/FormCreatePost'

const FormCreatePost = props => <FormCreatePostComponent {...props} />;

const mapDispatchToProps = dispatch => ({
    createNewPost: (postData) => dispatch(createNewPost(postData))
})

export default connect(
    null,
    mapDispatchToProps
)(FormCreatePost)