export function openModalWithAPost({ post }) {
  return {
    type: '@modal/OPEN_MODAL_WITH_A_POST',
    payload: { post },
  };
}

export function closeModal() {
  return {
    type: '@modal/CLOSE_MODAL',
  };
}
