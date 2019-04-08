const initialState = {
    list: {},
    selectedPost: {},
    offset: 0
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_POST_LIST' : {
            console.log("reducers init fetch");
            console.log(action.payload)
            return Object.assign({}, state, {
                list: action.payload
            })
        }
        case 'ADD_NEW_POST' : {
            console.log("reducers add post");
            console.log(action.payload)
            alert("Post is added")
            const newList = Object.assign({}, action.payload, state.list );
            console.log(newList)
            return Object.assign({}, state, {
                list: newList
            })
        }
        case 'LOAD_MORE' : {
            console.log("reducers LOAD MORE");
            console.log(action.payload);
            console.log(action.payload.objectsList);

            const newList = Object.assign({}, state.list, action.payload.objectsList);
            console.log(newList)
            return Object.assign({}, state, {
                list: newList,
                offset: action.payload.offset
            })
        }
        case 'LOAD_SINGLE_POST' : {
            console.log("reducers LOAD single");
            console.log(action.payload.post)
            return Object.assign({}, state, {
                selectedPost: action.payload.post
            })
        }

        case 'CLEAN_SELECTED_POST' : {
            console.log("reducers clean selected post");
            return Object.assign({}, state, {
                selectedPost: {}
            })
        }
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