import { combineReducers } from 'redux';

import posts from './posts';
import users from './users';
import comments from './comments';
import likes from './likes';
import notification from './notifications';

const rootReducer = combineReducers({
    posts,
    users,
    comments,
    likes,
    notification
})

export default rootReducer;