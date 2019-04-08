const BASE_LIKES_API_URL = 'http://localhost:3030/api/posts/';

const getAmount = payload => ({
    type: 'GET_AMOUNT_OF_LIKES',
    payload
})

const getIsLiked = payload => ({
    type: 'GET_ISLIKED',
    payload
})

const changeIsLiked = payload => ({
    type: 'CHANGE_ISLIKED',
    payload
})


const getAmountOfLikes = (postId) =>{
    return dispatch =>{
        console.log(postId);
        fetch(BASE_LIKES_API_URL+postId+'/likes')
            .then(res => res.json())
            .then(json => {
                dispatch(getAmount(json.amountOfLikes));
            }).catch(err => err);
    }
}

const getIsLikedPost = (postId) =>{
    return dispatch =>{
        console.log(postId);
        fetch(BASE_LIKES_API_URL+postId+'/is-liked?userId='+localStorage.getItem('userId'))
            .then(res => res.json())
            .then(json => {
                console.log(json.isLiked)
                dispatch(getIsLiked(json.isLiked));
            }).catch(err => err);
    }
}

const likePost = (postId) =>{
    return dispatch =>{
        console.log(JSON.stringify({ userId: localStorage.getItem('userId') }));
        fetch(BASE_LIKES_API_URL+postId+'/likes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: localStorage.getItem('userId') })
            })
            .then(res => res.json())
            .then(json => {
                console.log(json.isLiked)
                dispatch(changeIsLiked(json.isLiked));
            }).catch(err => err);
    }
}

const unlikePost = (postId) =>{
    return dispatch =>{
        console.log(JSON.stringify({ userId: localStorage.getItem('userId') }));
        fetch(BASE_LIKES_API_URL+postId+'/likes',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: localStorage.getItem('userId') })
            })
            .then(res => res.json())
            .then(json => {
                console.log(json.isLiked)
                dispatch(changeIsLiked(json.isLiked));
            }).catch(err => err);
    }
}

export {
    getAmountOfLikes,
    getIsLikedPost,
    likePost,
    unlikePost
}
