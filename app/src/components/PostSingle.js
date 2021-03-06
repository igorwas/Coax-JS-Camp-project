import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentList from '../containers/CommentList';
import FormCreateComment from '../containers/FormCreateComment';
import Likes from '../containers/Likes';

class PostSinglePage extends Component {
    constructor() {
        super();
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount(){
        this.props.loadSinglePost(this.props.match.params.id);
    }

    loadUser(id){
        this.props.getUserProfile(id);
    }

    render(){
        const {
            post,
            author
        } = this.props

        const tags = post.tags ? post.tags : [] ;
        if(author == undefined || author._id !== post.userId ) this.loadUser(post.userId);
        const authorLink = author ? <Link to={`/profile/${author._id}`}><h5>Author: {author.firstName} {author.lastName}</h5></Link> : null ;    
        const createdAt = new Date(+post.createdAt).toLocaleString("ua-UA");
        const likes = post._id ? <Likes postId={post._id} /> : null;
        const createComment = localStorage.getItem("userId") ? 
            <div className='row'><div className='col-12'><hr className='hr-bolded'/><h4>Add comment:</h4><hr /></div><FormCreateComment /></div> : null;
        const comments = post._id ? <CommentList postId = { post._id }/> : '';
        
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
                        {likes}
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