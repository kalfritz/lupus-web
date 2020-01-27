import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import like from './like/reducer';
import modal from './modal/reducer';

export default combineReducers({ auth, user, like, modal });
