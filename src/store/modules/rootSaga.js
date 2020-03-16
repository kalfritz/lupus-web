import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import like from './like/sagas';
import modal from './modal/sagas';
import notifications from './notifications/sagas';

export default function* rootSaga() {
  return yield all([auth, user, like, modal, notifications]);
}
