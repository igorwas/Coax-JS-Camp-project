import { arrayToObject } from '../helpers/arrayToObject';

const BASE_POSTS_API_URL = 'http://localhost:3030/api/posts/';

const updatePostList = payload => ({
    type: 'UPDATE_POST_LIST',
    payload
})

const addNewPost = payload =>({
    type: 'ADD_NEW_POST',
    payload
})

const deleteSomePost = payload =>({
    type: 'DELETE_POST',
    payload
})

const loadMore = payload =>({
    type: 'LOAD_MORE',
    payload
})

const loadSingle = payload =>({
    type: 'LOAD_SINGLE_POST',
    payload
})

const cleanSelected = payload =>({
    type: 'CLEAN_SELECTED_POST',
    payload
})

const changeNotification = payload => ({
    type: 'CHANGE_NOTIFICATION',
    payload
})

const fetchPostsByUser = (id) => {
    if(id!==undefined){
        return dispatch => {
            fetch(BASE_POSTS_API_URL+'/byuser/'+id)
                .then(response => response.json())
                .then(json => {
                    const objectsList = arrayToObject(json.posts, "_id");
                    console.log("objec of objects from server");
                    console.log(objectsList);
                    dispatch(updatePostList(objectsList));
                })
                .catch(error => console.log(error));   
        }    
    }
    else{
        return dispatch => {
            fetch(BASE_POSTS_API_URL)
                .then(response => response.json())
                .then(json => {
                    const objectsList = arrayToObject(json.posts, "_id");
                    console.log("objec of objects from server");
                    console.log(objectsList);
                    dispatch(updatePostList(objectsList));
                })
                .catch(error => console.log(error));   
        }    
    }
}

const loadMorePosts = ( offset, userId) => {
    if(userId !== undefined){
        return dispatch => {
            fetch(`${BASE_POSTS_API_URL}byuser/${userId}?offset=${offset}`)
                .then(response => response.json())
                .then(json => {
                    const objectsList = arrayToObject(json.posts, "_id");
                    console.log("objec of objects load more");
                    console.log(objectsList);
                    dispatch(loadMore({ objectsList, offset }));
                })
                .catch(error => console.log(error));   
        }
    } else {
        return dispatch => {
            fetch(`${BASE_POSTS_API_URL}?offset=${offset}`)
                .then(response => response.json())
                .then(json => {
                    const objectsList = arrayToObject(json.posts, "_id");
                    console.log("objec of objects load more 2");
                    console.log(objectsList);
                    dispatch(loadMore({ objectsList, offset }));
                })
                .catch(error => console.log(error));   
        }
    }
}

const loadSinglePost = (id) => {
    return dispatch => {
        console.log("inside action single")
        fetch(BASE_POSTS_API_URL+id)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(loadSingle(json))
            }).catch(error => console.log(error))   
    }
}

const createNewPost = (newPostData) =>{
    return dispatch =>{
        console.log("inside create post")
        console.log(newPostData);
        fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
                'Authorization': "Bearer b5020116034d3925e2cb8c093dc86e6a979564e5",
            },
            body: newPostData.image})
            .then( response => response.json())
            .then(json => {
                console.log(json)
                console.log(newPostData)
                const post = {
                    userId: newPostData.userId,
                    imageUrl: json.data.link,
                    description: newPostData.description,
                    tags: newPostData.tags
                }
                console.log(JSON.stringify(post))
                fetch(BASE_POSTS_API_URL, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(post)
                        })
                        .then(res => res.json())
                        .then(json => {
                            console.log(json)
                            const array = [json.post]
                            const objectsList = arrayToObject(array, "_id");
                            console.log(objectsList)
                            dispatch(changeNotification({ type: 'success', message: 'Post is added'}));
                            dispatch(addNewPost(objectsList))
                        }).catch(err => console.log(err));
        }).catch(error => {
            console.error(error);
        });
    }
}

const cleanSelectedPost = () => {
    return dispatch => {
        dispatch(cleanSelected());
    }       
}

// const deletePost = (id) =>{
//     return dispatch =>{
//         fetch(BASE_POSTS_API_URL+id, {
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             method: 'DELETE'
//             })
//             .then(res => res.json())
//             .then(json => {
//                 console.log(json)
//                 dispatch(deleteSomePost({ id: id }))
//             }).catch(err => err);
//     }
// }

export {
    fetchPostsByUser,
    createNewPost,
    //deletePost,
    loadMorePosts,
    loadSinglePost,
    cleanSelectedPost
}