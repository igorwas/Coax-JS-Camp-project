import { arrayToObject } from '../helpers/arrayToObject';

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


const fetchPosts = () => {
    return dispatch => {
        fetch("http://localhost:3030/api/posts/")
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
                fetch('http://localhost:3030/api/posts/', {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(post)
                        })
                        .then(res => res.json())
                        .then(json => {
                            console.log(json)
                            dispatch(addNewPost(json))
                        }).catch(err => console.log(err));
        }).catch(error => {
            console.error(error);
            alert('Upload failed: ' + error);
        });
        // fetch('http://localhost:3030/api/posts/', {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST',
        //     body: JSON.stringify(newPostData)
        //     })
        //     .then(res => res.json())
        //     .then(json => {
        //         console.log(json)
        //         dispatch(addNewPost(json))
        //     }).catch(err => err);
    }
}

const deletePost = (id) =>{
    return dispatch =>{
        fetch(`http://localhost:3030/api/posts/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(deleteSomePost({ id: id }))
            }).catch(err => err);
    }
}

export {
    fetchPosts,
    createNewPost,
    deletePost
}