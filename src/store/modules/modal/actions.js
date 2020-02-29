export function openModalWithAPost({ post, deletePost, setPostContent }) {
  return {
    type: '@modal/OPEN_MODAL_WITH_A_POST',
    payload: { post, deletePost, setPostContent },
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
