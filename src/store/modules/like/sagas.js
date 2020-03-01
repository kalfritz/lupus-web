import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { likeFailure, likeSuccess } from './actions';

export function* likePost({ payload }) {
  try {
    const { post_id, op_id } = payload;
    console.log({ post_id, op_id });
    const response = yield call(api.post, `posts/${post_id}/op/${op_id}/likes`);
    console.log(response);
    const { added, removed } = response.data;

    yield put(likeSuccess(added, removed));
  } catch (err) {
    //   toast.error('Something wrong happened. Try again later');
    yield put(likeFailure());
  }
}

export function* likeComment({ payload }) {
  try {
    const { post_id, op_id, comment_id } = payload;

    const response = yield call(
      api.post,
      `posts/${post_id}/op/${op_id}/comments/${comment_id}/likes`
    );

    const { added, removed } = response.data;

    yield put(likeSuccess(added, removed));
  } catch (err) {
    //   toast.error('Something wrong happened. Try again later');
    yield put(likeFailure());
  }
}

export default all([
  takeLatest('@like/LIKE_POST_REQUEST', likePost),
  takeLatest('@like/LIKE_COMMENT_REQUEST', likeComment),
]);
