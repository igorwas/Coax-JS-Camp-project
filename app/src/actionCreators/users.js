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

const signUpNewUser = (user) =>{
    return dispatch =>{
        console.log(JSON.stringify(user));
        fetch('http://localhost:3030/api/users/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(json => {
                dispatch(signUp(json));
            }).catch(err => err);
    }
}

const signInUser = (user) =>{
    return dispatch =>{
        console.log(JSON.stringify(user));
        fetch('http://localhost:3030/api/users/authentificate', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(json => {
                dispatch(signIn(json));
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
        fetch(`http://localhost:3030/api/users/${id}`)
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