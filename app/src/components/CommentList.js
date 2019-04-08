import React, { Component } from 'react';

import CommentListItem from '../containers/CommentListItem';

class CommentList extends Component{
    componentDidMount(){
        console.log(this.props)
        this.props.fetchComments(this.props.postId);
    }

    render(){
        console.log(this.props)
        const {
            comments
        } = this.props;
        console.log(comments)
        const noComments = comments == {} || comments == undefined || Object.keys(comments) == 0 ? <h5>There is no comments yet.</h5> : '';
        return(
            <div className="row">
                <div className='col-12'>
                <hr className='hr-bolded'/>
                <h4>Comments:</h4>
                <hr />
                {  
                    Object.keys(comments).map(id => {
                        return (
                            <CommentListItem 
                                key = { id }
                                commentId = { id } />
                        )
                    })
                }
                { noComments }
                </div>
            </div>
        )

    }

    componentWillUnmount(){
        console.log('component will unmount')
        this.props.cleanComments();
    }

}

export default CommentList;