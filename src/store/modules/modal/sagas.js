import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { fetchCommentsSuccess, fetchCommentsFailure } from './actions';

export function* fetchCommentsOfAModalPost({ payload }) {
  try {
    const { post } = payload;

    const response = yield call(api.get, `posts/${post.id}/comments`);

    yield put(fetchCommentsSuccess({ comments: response.data }));
  } catch (err) {
    yield put(fetchCommentsFailure({ error: err }));
  }
}

export default all([
  takeLatest('@modal/OPEN_MODAL_WITH_A_POST', fetchCommentsOfAModalPost),
]);
