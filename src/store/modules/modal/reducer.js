import produce from 'immer';

const INITIAL_STATE = {
  post: {
    status: false,
    data: { id: 1 },
    loading: false,
  },
  likes: {
    status: false,
    data: { id: 1 },
    loading: false,
    event: null,
  },
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/OPEN_MODAL_WITH_A_POST': {
        const { post } = action.payload;
        draft.post.status = true;
        draft.post.data = post;
        break;
      }

      case '@modal/CLOSE_POST_MODAL': {
        draft.post.status = false;
        draft.post.data = {};
        draft.likes.event = null;
        break;
      }
      case '@modal/OPEN_MODAL_WITH_LIKES': {
        const { likes } = action.payload;
        draft.likes.status = true;
        draft.likes.data = likes;
        break;
      }
      case '@modal/CLOSE_LIKES_MODAL': {
        draft.likes.status = false;
        draft.likes.data = {};
        break;
      }
      case '@modal/PASS_EVENTS_TO_LIKES_MODAL': {
        const { event } = action.payload;
        draft.likes.event = event;
      }
      default:
    }
  });
}
