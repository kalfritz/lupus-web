export function openModalWithAPost({ post, deletePost, setPostContent }) {
  return {
    type: '@modal/OPEN_MODAL_WITH_A_POST',
    payload: { post, deletePost, setPostContent },
  };
}

export function fetchCommentsSuccess({ comments }) {
  return {
    type: '@modal/FETCH_COMMENTS_SUCCESS',
    payload: { comments },
  };
}

export function fetchCommentsFailure({ error }) {
  return {
    type: '@modal/FETCH_COMMENTS_FAILURE',
    payload: { error },
  };
}

export function likeModalPost({ person, addedLike, profile_id }) {
  return {
    type: '@modal/LIKE_MODAL_POST',
    payload: { person, addedLike, profile_id },
  };
}
export function commentModalPost({ person, comment }) {
  return {
    type: '@modal/COMMENT_MODAL_POST',
    payload: { person, comment },
  };
}
export function likeModalComment({
  person,
  comment_id,
  addedLike,
  profile_id,
}) {
  return {
    type: '@modal/LIKE_MODAL_COMMENT',
    payload: { person, comment_id, addedLike, profile_id },
  };
}
export function closePostModal() {
  return {
    type: '@modal/CLOSE_POST_MODAL',
  };
}

export function openModalWithLikes({ context, post_id, comment_id }) {
  return {
    type: '@modal/OPEN_MODAL_WITH_LIKES',
    payload: { context, post_id, comment_id },
  };
}
export function closeLikesModal() {
  return {
    type: '@modal/CLOSE_LIKES_MODAL',
  };
}

export function passEventsToLikesModal({ event }) {
  return {
    type: '@modal/PASS_EVENTS_TO_LIKES_MODAL',
    payload: { event },
  };
}

export function openNotificationModal({ notification }) {
  return {
    type: '@modal/OPEN_NOTIFICATION_MODAL',
    payload: { notification },
  };
}
export function closeNotificationModal() {
  return {
    type: '@modal/CLOSE_NOTIFICATION_MODAL',
  };
}
