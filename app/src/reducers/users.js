const initialState = {
    //users: {},
    selectedUser: {},
    currentUserId: '',
    redirectTo: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGN_UP_NEW_USER' : {
            localStorage.userId = action.payload.id;
            return Object.assign({}, state, {
                selectedUser: action.payload, 
                currentUserId: action.payload.id,
                redirectTo: `/profile/${action.payload.id}`
            })
        }
        case 'SIGN_IN' : {
            localStorage.userId = action.payload.id;
            return Object.assign({}, state, {
                selectedUser: action.payload,
                currentUserId: action.payload.id, 
                redirectTo: `/profile/${action.payload.id}`
            })  
        }

        case 'SIGN_OUT' : {
            localStorage.clear();
            return Object.assign({}, state, {
                currentUserId: '',
                redirectTo: ''
            })
        }
        case 'GET_USER_PROFILE' : {
            return Object.assign({}, state, {
                selectedUser: action.payload.user
            })
            
        }
        case 'CLEAN_SELECTED_USER' : {
            return Object.assign({}, state, {
                selectedUser: {}
            })
        }
        default: return state;
    }
}

export default userReducer;