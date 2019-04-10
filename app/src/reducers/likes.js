const initialState = {
    amountOfLikes: 0,
    isLiked: false
}

const likesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_AMOUNT_OF_LIKES' : {
            return Object.assign({}, state, {
                amountOfLikes: action.payload
            })
        }
        case 'GET_ISLIKED' : {
            return Object.assign({}, state, {
                isLiked: action.payload
            })
        }
        case 'CHANGE_ISLIKED' : {
            const amount = action.payload ? state.amountOfLikes+1 : state.amountOfLikes-1;
            return Object.assign({}, state, {
                isLiked: action.payload,
                amountOfLikes: amount
            })
        }
        default: return state;
    }
}

export default likesReducer;