import produce from 'immer';

const INITIAL_STATE = {
  post: {
    status: false,
    data: { id: 1 },
    loading: false,
  },
  deletePost: null,
  setPostContent: null,
  likes: {
    context: null,
    post_id: null,
    comment_id: null,
    status: false,
    loading: false,
    event: null,
  },
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/OPEN_MODAL_WITH_A_POST': {
        const { post, deletePost, setPostContent } = action.payload;
        draft.post.status = true;
        draft.post.data = post;
        draft.deletePost = deletePost;
        draft.setPostContent = setPostContent;
        break;
      }

      case '@modal/CLOSE_POST_MODAL': {
        draft.post.status = false;
        draft.post.data = {};
        draft.likes.event = null;
        break;
      }
      case '@modal/OPEN_MODAL_WITH_LIKES': {
        const { context, post_id, comment_id } = action.payload;
        draft.likes.status = true;
        draft.likes.context = context;
        draft.likes.post_id = post_id;
        draft.likes.comment_id = comment_id;
        break;
      }
      case '@modal/CLOSE_LIKES_MODAL': {
        draft.likes.status = false;
        draft.likes.context = null;
        draft.likes.post_id = null;
        draft.likes.comment_id = null;
        break;
      }
      case '@modal/PASS_EVENTS_TO_LIKES_MODAL': {
        const { event } = action.payload;
        draft.likes.event = event;
        break;
      }
      default:
    }
  });
}
