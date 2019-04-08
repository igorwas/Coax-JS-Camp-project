const initialState = {
    list: {},
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_COMMENTS' : {
            console.log("reducers init fetch");
            console.log(action.payload)
            return Object.assign({}, state, {
                list: action.payload
            })
        }
        case 'CLEAN_COMMENTS' : {
            console.log("reducers clean comments");
            return Object.assign({}, state, {
                list: {}
            })
        }
        case 'ADD_NEW_COMMENT' : {
            console.log("reducers add comment");
            console.log(action.payload)
            alert("Comment is added")
            const newList = Object.assign({}, action.payload, state.list );
            return Object.assign({}, state, {
                list: newList
            })
        }
        // case 'LOAD_MORE' : {
        //     console.log("reducers LOAD MORE");
        //     console.log(action.payload)
        //     console.log(action.payload.objectsList)
        //     return Object.assign({}, state, {
        //         list: Object.assign( state.list, action.payload.objectsList),
        //         offset: action.payload.offset
        //     })
        // }
        // case 'LOAD_SINGLE_POST' : {
        //     console.log("reducers LOAD single");
        //     console.log(action.payload.post)
        //     return Object.assign({}, state, {
        //         selectedPost: action.payload.post
        //     })
        // }
        // case 'DELETE_POST' : {
        //     console.log("reducers delete");
        //     console.log(action.payload.id);
            
        //     const indexOfDeleted = state.list.findIndex((el,index) => {
        //             console.log(el.id)
        //             console.log(action.payload.id)
        //             if(el._id == action.payload.id) {
        //                 return index;
        //             }
        //         })

            
    
        //     // const indexOfDeleted = state.list.findIndex((el,index) => {
        //     //     console.log(el)
        //     //     console.log(action.payload._id)
        //     //     if(el._id == action.payload.deletedPost._id) {
        //     //         return index;
        //     //     }
        //     // })

        //     //state.list._id.indexOf({ _id: action.payload.deletedPost._id });
        //     console.log(indexOfDeleted)
        //     return Object.assign({}, state, {
        //         list: [ ...state.list.slice(0, indexOfDeleted), ...state.list.slice(indexOfDeleted + 1) ]
        //     })
        // }
        default: return state;
    }
}

export default postsReducer;