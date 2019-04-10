const initialState = {
    list: {},
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_COMMENTS' : {
            return Object.assign({}, state, {
                list: action.payload
            })
        }
        case 'CLEAN_COMMENTS' : {
            return Object.assign({}, state, {
                list: {}
            })
        }
        case 'ADD_NEW_COMMENT' : {
            const newList = Object.assign({}, action.payload, state.list );
            return Object.assign({}, state, {
                list: newList
            })
        }
        default: return state;
    }
}

export default postsReducer;