import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { decode } from 'jsonwebtoken';
import api from '~/services/api';
import { signInSuccess, signFailure, signOut } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/');
  } catch (err) {
    toast.error('Auth failure, verify your data');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, email, password } = payload;
    const response = yield call(api.post, 'users', {
      username,
      email,
      password,
    });
    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;
    yield put(signInSuccess(token, user));
    history.push('/');
  } catch (err) {
    toast.error('Failure creating account. Try again');
    yield put(signFailure());
  }
}

export function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    if (decode(token).exp < Date.now() / 1000) {
      yield put(signOut());
    } else {
      api.defaults.headers.Authorization = `Baerer ${token}`;
    }
  }
}

export function signOutHistory() {
  history.push('/login');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOutHistory),
]);
