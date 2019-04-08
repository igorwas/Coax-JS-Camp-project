import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentList from '../containers/CommentList';
import FormCreateComment from '../containers/FormCreateComment';

class PostSinglePage extends Component {
    constructor() {
        super();
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount(){
        this.props.loadSinglePost(this.props.match.params.id);
    }

    loadUser(id){
        console.log(id)
        this.props.getUserProfile(id);
    }

    render(){
        const {
            post,
            author
        } = this.props

        const tags = post.tags ? post.tags : [] ;
        console.log(author);
        if(author == undefined || author._id !== post.userId ) this.loadUser(post.userId);
        console.log(author)
        const authorLink = author ? <Link to={`/profile/${author._id}`}><h5>Author: {author.firstName} {author.lastName}</h5></Link> : '' ;    
        const createdAt = new Date(+post.createdAt).toLocaleString("ua-UA");
        console.log(post._id)
        const comments = post._id ? <CommentList postId = { post._id }/> : '';
        const createComment = localStorage.getItem("userId") ? <div className='row'><div className='col-12'><hr className='hr-bolded'/><h4>Add comment:</h4><hr /></div><FormCreateComment /></div> :'';
        
        return(
            <React.Fragment>
                <div className='row mb-4'>
                    <div className='col-lg-6'> 
                        <img 
                            className='img-fluid' 
                            src={post.imageUrl}
                            alt={post.description}
                            />
                    </div>
                    <div className='col-lg-6'>
                        <h4>{post.description}</h4>
                        <p>Created: {createdAt}</p>
                        {
                            tags.map( tag => {
                                if(tag){
                                    return (<span key={tag}>#{tag} </span>)
                                }
                            })
                        }
                        {authorLink}
                    </div>
                </div>
                { createComment }
                { comments }
            </React.Fragment>
        )
    }

    componentWillUnmount(){
        this.props.cleanSelectedPost();
    }
}

export default PostSinglePage;