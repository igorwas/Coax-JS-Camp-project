import React, { PureComponent } from 'react';
 
class CommentListItem extends PureComponent{
    render(){
        const { commentItem } = this.props;
        const createdAt = new Date(+commentItem.createdAt).toLocaleString("ua-UA");
        return (
            <React.Fragment>
                <div>
                    <h5>{commentItem.comment}</h5>
                    <span>{createdAt}</span>
                    <span>by 
                        <a href={`/profile/${commentItem.userId}`}> {commentItem.userId}</a></span> 
                        {/* didn't finished, need download authors */}
                </div>
                <hr />
            </React.Fragment>
        )
    }
}

export default CommentListItem;