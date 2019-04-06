import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PostItem from '../containers/PostListItem';

class PostList extends Component{
    componentDidMount(){
        this.props.getPostsFromServer();
    }

    render(){
        console.log(this.props)
        const {
            postListData
        } = this.props
        console.log(postListData)
        return(
            <div>
                <ul>
                    {
                        Object.keys(postListData).map(id => {
                            console.log(id)
                            return(
                                // <PostItem 
                                //     key = { id }
                                //     id = { id }
                                // />
                                <li key={id}>
                                    <Link to={`/posts/${id}`}>
                                        { //() => { return (<img src="${postListData[id].imageUrl}" alt="${postListData[id].description}"/>) }
                                             postListData[id].imageUrl
                                        }

                                    </Link>
                                    {/* <button id={postListData[id]._id}
                                        onClick={this.delete}>delete
                                    </button> */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )

    }

}

export default PostList;