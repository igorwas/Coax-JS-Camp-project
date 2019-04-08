const initialState = {
    amountOfLikes: 0,
    isLiked: false
}

const likesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_AMOUNT_OF_LIKES' : {
            console.log("reducer get amount likes");
            console.log(action.payload)
            return Object.assign({}, state, {
                amountOfLikes: action.payload
            })
        }
        case 'GET_ISLIKED' : {
            console.log("reducer get isLiked");
            console.log(action.payload)
            return Object.assign({}, state, {
                isLiked: action.payload
            })
        }
        case 'CHANGE_ISLIKED' : {
            console.log("reducer get isLiked");
            const amount = action.payload ? state.amountOfLikes+1 : state.amountOfLikes-1;
            console.log(amount)
            return Object.assign({}, state, {
                isLiked: action.payload,
                amountOfLikes: amount
            })
        }
        default: return state;
    }
}

export default likesReducer;