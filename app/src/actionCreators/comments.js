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

// const addNewPost = payload =>({
//     type: 'ADD_NEW_POST',
//     payload
// })

// const loadSingle = payload =>({
//     type: 'LOAD_SINGLE_POST',
//     payload
// })

const fetchComments = (id) => {
    return dispatch => {
        fetch(BASE_COMMENTS_API_URL+id+'/comments')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const objectsList = arrayToObject(json.comments, '_id') ;
                console.log('comments from server');
                console.log(objectsList);
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
        console.log(comment);
        console.log(JSON.stringify(comment));
        fetch(BASE_COMMENTS_API_URL+comment.postId+'/comment', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const array = [json.comment]
                const objectsList = arrayToObject(array, '_id');
                console.log(objectsList)
                dispatch(createComment(objectsList))
            }).catch(err => console.log(err));
    }
}

export {
    fetchComments,
    cleanComments,
    createNewComment
}