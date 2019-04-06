import React, { Component } from 'react';

class FormCreatePost extends Component{
    constructor() {
        super();
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    onSubmitForm(e){
        e.preventDefault();
        console.log(e.target)

        let imageBase64 = '';
        // this.getBase64(e.target.files[0], (result) => {
        //     imageBase64 = result;
        // });
        // this.props.createNewPost({
        //     userId: localStorage.getItem("userId"),
        //     imageUrl: e.target.image.value,
        //     description: "fuck"}
        // )
        //this.props.addPost(this.state.value)
    }
    onFileChange(e){
        console.log('onfile change')
        console.log(e.target.file);

    }
    render(){
        //const { value } = this.props;
        return(
            <form 
                className="col-md-6"
                onSubmit={this.onSubmitForm}>
                <input 
                    name="description"
                    type="text" 
                    className="form-control mb-2"
                    />
                <input 
                    name="image"
                    type="file" 
                    className="form-control mb-2"
                    onChange={this.onFileChange}
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