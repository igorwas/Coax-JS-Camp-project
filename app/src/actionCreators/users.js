const BASE_USERS_API_URL = 'http://localhost:3030/api/users/';

const signUp = payload => ({
    type: 'SIGN_UP_NEW_USER',
    payload
})
const signIn = payload => ({
    type: 'SIGN_IN',
    payload
})

const signOut = payload => ({
    type: 'SIGN_OUT',
    payload
})

const getSingleUser = payload => ({
    type: 'GET_USER_PROFILE',
    payload
})

const cleanSelected = payload => ({
    type: 'CLEAN_SELECTED_USER',
    payload
})

const changeNotification = payload => ({
    type: 'CHANGE_NOTIFICATION',
    payload
})

const signUpNewUser = (user) =>{
    return dispatch =>{
        console.log(JSON.stringify(user));
        fetch(BASE_USERS_API_URL, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if(json.status == "user-error"){
                    dispatch(changeNotification({ type: 'warning', message: json.message}));
                } else {
                    dispatch(signUp(json));
                }
            }).catch(err => err);
    }
}

const signInUser = (user) =>{
    return dispatch =>{
        console.log(JSON.stringify(user));
        fetch(BASE_USERS_API_URL+'authentificate', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(json => {
                if(json.status == "user-error"){
                    dispatch(changeNotification({ type: 'warning', message: json.message}));
                } else {
                    dispatch(signIn(json));
                }
            }).catch(err => err);
    }
}

const signOutUser = () =>{
    return dispatch => {
        dispatch(signOut());
    }
}

const getUserProfile = (id) =>{
    console.log(id)
    return dispatch =>{
        fetch(BASE_USERS_API_URL+id)
            .then(res => res.json())
            .then(json => {
                dispatch(getSingleUser(json));
            }).catch(err => err);
    }
}

const cleanSelectedUser = () => {
    return dispatch => {
        dispatch(cleanSelected());
    }       
}

export {
    signUpNewUser,
    signInUser,
    getUserProfile,
    signOutUser,
    cleanSelectedUser
}