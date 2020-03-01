export function likePostRequest({ post_id, op_id }) {
  return {
    type: '@like/LIKE_POST_REQUEST',
    payload: { post_id, op_id },
  };
}

export function likeCommentRequest({ post_id, op_id, comment_id }) {
  return {
    type: '@like/LIKE_COMMENT_REQUEST',
    payload: { post_id, op_id, comment_id },
  };
}

export function likeSuccess(added, removed) {
  return {
    type: '@like/LIKE_SUCCESS',
    payload: { added, removed },
  };
}

export function likeFailure() {
  return {
    type: '@like/LIKE_FAILURE',
  };
}
