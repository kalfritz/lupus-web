import produce from 'immer';

const INITIAL_STATE = {
  status: false,
  post: { id: 1 },
  loading: false,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/OPEN_MODAL_WITH_A_POST': {
        const { post } = action.payload;
        draft.status = true;
        draft.post = post;
        break;
      }

      case '@modal/CLOSE_MODAL': {
        draft.status = false;
        draft.post = {};
        break;
      }
      default:
    }
  });
}
