import React, { Component } from 'react';

class FormCreatePost extends Component{
    constructor() {
        super();
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(e){
        e.preventDefault();
        const newComment = {
            userId: localStorage.getItem("userId"),
            comment: e.target.comment.value, 
            postId:  this.props.postId
        }
        this.props.createNewComment(newComment)
    }

    render(){
        return(
            <form 
                className="col-md-6"
                onSubmit={this.onSubmitForm}>
                <input 
                    name="comment"
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Type comment"
                    required
                    />
                <button 
                    className="btn btn-primary"
                    type="submit">Save
                </button> 
            </form>
        )
    }
}

export default FormCreatePost;