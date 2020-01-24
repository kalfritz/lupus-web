import produce from 'immer';

const INITIAL_STATE = {
  added: null,
  removed: null,
  loading: false,
};

export default function like(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@like/LIKE_POST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@like/LIKE_COMMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@like/LIKE_SUCCESS': {
        const { added, removed } = action.payload;
        draft.added = added;
        draft.removed = removed;
        draft.loading = false;
        break;
      }
      case '@like/LIKE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
