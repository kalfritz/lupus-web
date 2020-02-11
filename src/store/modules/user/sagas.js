import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  updateProfileSuccess,
  updateProfileFailure,
  storeMyFriendListSuccess,
} from '~/store/modules/user/actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success(`Perfil atualizado com sucesso`);
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export function* storeMyFriendList() {
  try {
    console.log('qa');
    const response = yield call(api.get, 'friendlist');
    console.log('q');
    console.log(response.data);
    yield put(storeMyFriendListSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/STORE_MY_FRIEND_LIST_REQUEST', storeMyFriendList),
]);
