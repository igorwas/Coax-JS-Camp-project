import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
 
class PostItem extends PureComponent{
    // delete(e){
    //     console.log(e.target.id)
    //     //this.props.deletePost(this.state.value)
    // }

    render(){
        console.log(this.props)
        const { itemData } = this.props;
        return (
            <li >
                <Link to={`/posts/${itemData._id}`}>
                    {itemData.description}
                </Link>
                <button id={_id}
                    onClick={/*this.delete*/}>delete
                </button>
            </li>
        )
    }
}

export default PostItem;