import { arrayToObject } from '../helpers/arrayToObject';

const BASE_COMMENTS_API_URL = 'http://localhost:3030/api/posts/';

const getComments = payload => ({
    type: 'GET_COMMENTS',
    payload
})

const deleteComments = payload => ({
    type: 'CLEAN_COMMENTS',
    payload
})

const createComment = payload => ({
    type: 'ADD_NEW_COMMENT',
    payload
})

const changeNotification = payload => ({
    type: 'CHANGE_NOTIFICATION',
    payload
})

const fetchComments = (id) => {
    return dispatch => {
        fetch(BASE_COMMENTS_API_URL+id+'/comments')
            .then(response => response.json())
            .then(json => {
                const objectsList = arrayToObject(json.comments, '_id') ;
                dispatch(getComments(objectsList));
            })
            .catch(error => console.log(error));   
    }       
}

const cleanComments = () => {
    return dispatch => {
        dispatch(deleteComments());
    }       
}

const createNewComment = (comment) =>{
    return dispatch =>{
        fetch(BASE_COMMENTS_API_URL+comment.postId+'/comment', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(json => {
                const array = [json.comment];
                const objectsList = arrayToObject(array, '_id');
                dispatch(changeNotification({ type: 'success', message: 'Comment is added'}));
                dispatch(createComment(objectsList))
            }).catch(err => console.log(err));
    }
}

export {
    fetchComments,
    cleanComments,
    createNewComment
}