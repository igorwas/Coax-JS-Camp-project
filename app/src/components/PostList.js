import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PostItem from '../containers/PostListItem';

class PostList extends Component{
    constructor() {
        super();
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        this.props.getPostsFromServer(this.props.userId);
    }

    loadMore(){
        console.log(this.props.offset)
        this.props.loadMore(this.props.offset+12)
    }

    render(){
        console.log(this.props)
        const {
            userId,
            postListData
        } = this.props
        console.log(userId);
        const loadMoreBtn = Object.keys(postListData).length >= 12 && postListData !==undefined ? 
           <div className ="col-12"><button className="btn btn-primary mb-5" onClick={this.loadMore}>Load More </button></div> : '' 
        
        return(
            <div className="row">
                {
                    Object.keys(postListData).map(id => (
                    //         <PostItem 
                    //             key = { id }
                    //             postId = { id }
                    //         />
                    // )
                        
                            <React.Fragment key={id}>
                                <Link className='col-sm-6 col-lg-4 mb-2' to={`/posts/${id}`}>
                                    <img className='img-fluid'
                                        src={postListData[id].imageUrl} 
                                        alt={postListData[id].description}/>
                                </Link>
                                {/* <button id={postListData[id]._id}
                                    onClick={this.delete}>delete
                                </button> */}
                            </React.Fragment>
                        
                    ))
                    }
                    {loadMoreBtn}
            </div>
        )

    }

}

export default PostList;