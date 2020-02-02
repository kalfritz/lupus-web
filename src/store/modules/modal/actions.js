export function openModalWithAPost({ post }) {
  return {
    type: '@modal/OPEN_MODAL_WITH_A_POST',
    payload: { post },
  };
}

export function closePostModal() {
  return {
    type: '@modal/CLOSE_POST_MODAL',
  };
}

export function openModalWithLikes({ likes }) {
  console.log(likes);
  return {
    type: '@modal/OPEN_MODAL_WITH_LIKES',
    payload: { likes },
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
