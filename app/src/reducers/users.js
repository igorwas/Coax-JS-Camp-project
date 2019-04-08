import React from "react";
import { Redirect } from "react-router-dom";

const initialState = {
    users: {},
    selectedUser: {},
    currentUserId: '',
    redirectTo: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGN_UP_NEW_USER' : {
            console.log("user reducer");
            if(action.payload.status == "notification"){
                alert(action.payload.message)
            } else {
                localStorage.userId = action.payload.id;
                return Object.assign({}, state, {
                    selectedUser: action.payload, 
                    currentUserId: action.payload.id,
                    redirectTo: `/profile/${action.payload.id}`
                })
            }
        }
        case 'SIGN_IN' : {
            console.log("user reducer sign in");
            if(action.payload.status == "notification"){
                alert(action.payload.message)
            } else {
                localStorage.userId = action.payload.id;
                return Object.assign({}, state, {
                    selectedUser: action.payload,
                    currentUserId: action.payload.id, 
                    redirectTo: `/profile/${action.payload.id}`
                })
            }
        }

        case 'SIGN_OUT' : {
            console.log( "sign OUT");
            localStorage.clear();
            return Object.assign({}, state, {
                currentUserId: '',
                redirectTo: ''
            })
        }
        case 'GET_USER_PROFILE' : {
            console.log("user reducer get profile");
            console.log(action.payload)
            return Object.assign({}, state, {
                selectedUser: action.payload.user
            })
            
        }
        case 'CLEAN_SELECTED_USER' : {
            console.log("reducers clean selected user");
            return Object.assign({}, state, {
                selectedUser: {}
            })
        }
        default: return state;
    }
}

export default userReducer;