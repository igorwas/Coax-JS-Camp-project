const initialState = {
    type: '',
    message: '',
    time: '' //just for rerendering component when message will the same
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_NOTIFICATION' : {
            return Object.assign({}, state, {
                type: action.payload.type,
                message: action.payload.message,
                time: new Date()
            })
        }
        default: return state;
    }
}

export default notificationReducer;