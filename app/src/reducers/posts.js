const initialState = {
    list: {},
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_POST_LIST' : {
            console.log("reducers");
            console.log(action.payload)
            return Object.assign({}, state, {
                list: action.payload
            })
        }
        case 'ADD_NEW_POST' : {
            console.log("reducers add post");
            console.log(action.payload)
            console.log(state.list)
            return Object.assign({}, state, {
                list: Object.assign( state.list, action.payload )
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