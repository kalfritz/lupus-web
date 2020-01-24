import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import like from './like/reducer';

export default combineReducers({ auth, user, like });
