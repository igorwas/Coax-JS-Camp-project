const initialState = {
    type: '',
    message: '',
    time: ''
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_NOTIFICATION' : {
            console.log("reducers notification");
            console.log(action.payload)
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