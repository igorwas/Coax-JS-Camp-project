import React, { Component } from 'react';

class FormCreatePost extends Component{
    constructor() {
        super();
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(e){
        e.preventDefault();
        console.log(e.target.description.value)
        console.log(e.target.image.files[0])
        const newPost ={
            userId: localStorage.getItem("userId"),
            image: e.target.image.files[0],
            description: e.target.description.value,
            tags: this.parseTags(e.target.tags.value)
        }
        this.props.createNewPost(newPost)
    }

    parseTags(tagsString){
        const tagsArray = tagsString.split(',');
        return tagsArray.map( tag => {
            return tag.trim()
        })    
    }

    render(){
        return(
            <form 
                className="col-md-6"
                onSubmit={this.onSubmitForm}>
                <input 
                    name="image"
                    type="file" 
                    className="form-control mb-2"
                    accept="image/*"
                    placeholder="Upload image"
                    required
                    />
                <input 
                    name="description"
                    type="text" 
                    className="form-control mb-2"
                    placeholder="Type description"
                    />
                
                <input 
                    name="tags"
                    type="tags" 
                    className="form-control mb-2"
                    placeholder="Type tags splited coma"
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