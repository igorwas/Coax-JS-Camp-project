import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
 
class PostItem extends PureComponent{
    // delete(e){
    //     console.log(e.target.id)
    //     //this.props.deletePost(this.state.value)
    // }

    render(){
        const { itemData } = this.props;
        const id = itemData ? itemData._id : null; 
        const description = itemData ? itemData.description : null;
        const imageUrl = itemData ? itemData.imageUrl : null;
        
        return (     
            <React.Fragment key={id}>
                <Link className='col-sm-6 col-lg-4 mb-2' to={`/posts/${id}`}>
                    <img className='img-fluid'
                        src={imageUrl} 
                        alt={description}/>
                </Link>
            </React.Fragment> 
        )
    }
}

export default PostItem;