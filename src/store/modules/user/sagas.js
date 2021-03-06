import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
  storeMyFriendListSuccess,
} from '~/store/modules/user/actions';

export function* updateCover({ payload }) {
  try {
    const { cover_id } = payload.data;

    const response = yield call(api.put, 'users', { cover_id });

    yield put(updateProfileSuccess(response.data));
  } catch {
    yield put(updateProfileFailure());
  }
}

export function* updateProfile({ payload }) {
  try {
    const {
      name,
      username,
      email,
      bio,
      location,
      avatar_id,
      ...rest
    } = payload.data;

    const profile = Object.assign(
      { name, username, email, bio, location, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success(`Profile updated successfully`);
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error updating profile, check your data!');
    yield put(updateProfileFailure());
  }
}

export function* storeMyFriendList() {
  const response = yield call(api.get, 'friendlist');
  yield put(storeMyFriendListSuccess(response.data));
}

export default all([
  takeLatest('@user/UPDATE_COVER_REQUEST', updateCover),
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/STORE_MY_FRIEND_LIST_REQUEST', storeMyFriendList),
]);
