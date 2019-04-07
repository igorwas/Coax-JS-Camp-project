import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

        const authorLink = author ? <Link to={`/profile/${author._id}`}><h5>{author.firstName} {author.lastName}</h5></Link> : '' ;
        return(
            <React.Fragment>
                <div className='row'>
                    <div className='col-lg-6'> 
                        <img 
                            className='img-fluid' 
                            src={post.imageUrl}
                            alt={post.description}
                            />
                    </div>
                    <div className='col-lg-6'>
                        <h4>{post.description}</h4>
                        {
                            tags.map( tag => (
                                <span key={tag}>#{tag} </span>
                            ))
                        }
                        {authorLink}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PostSinglePage;