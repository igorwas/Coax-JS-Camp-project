import { combineReducers } from 'redux';

import posts from './posts';
import users from './users';
import comments from './comments';
import likes from './likes';

const rootReducer = combineReducers({
    posts,
    users,
    comments,
    likes
})

export default rootReducer;