import React, { Component } from 'react';


class Likes extends Component{
    constructor() {
        super();
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    componentDidMount(){
        this.props.getAmountOfLikes(this.props.postId);
        this.props.getIsLiked(this.props.postId);
    }

    like(){
        if(localStorage.userId){
            this.props.likePost(this.props.postId)
        }
    }

    unlike(){
        if(localStorage.userId){
            this.props.unlikePost(this.props.postId)
        }
    }
    
    render(){
        const { 
            amountOfLikes,
            isLiked,
            postId
        } = this.props
        
        const heart = isLiked ? 
            <img className='heart' src='/heart.png' alt='liked' onClick={this.unlike}/> : 
            <img className='heart' src='/heart-transparent.png' alt='like it' onClick={this.like}/>
        return(
            <p>
                {heart }
                {amountOfLikes}
            </p>
        )
    }

}

export default Likes;