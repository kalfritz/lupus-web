import produce from 'immer';

const INITIAL_STATE = {
  post: {
    status: false,
    data: { id: 1 },
    loading: true,
    error: null,
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
  notification: {
    status: false,
    data: {},
  },
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/OPEN_MODAL_WITH_A_POST': {
        const { post, deletePost, setPostContent } = action.payload;
        draft.post.loading = true;
        draft.post.status = true;
        draft.post.data = post;
        draft.deletePost = deletePost;
        draft.setPostContent = setPostContent;
        break;
      }
      case '@modal/FETCH_COMMENTS_SUCCESS': {
        const { comments } = action.payload;
        draft.post.loading = false;
        draft.post.data.comments = comments;
        break;
      }
      case '@modal/FETCH_COMMENTS_FAILURE': {
        const { error } = action.payload;
        draft.post.loading = false;
        draft.post.error = error;
        break;
      }
      case '@modal/LIKE_MODAL_POST': {
        const { person, addedLike, profile_id } = action.payload;
        if (addedLike) {
          draft.post.data.likes.push(person);

          if (person.id === profile_id) draft.post.data.liked = true;
        } else {
          draft.post.data.likes = draft.post.data.likes.filter(
            liker => liker.id !== person.id
          );
          if (person.id === profile_id) draft.post.data.liked = false;
        }
        break;
      }
      case '@modal/COMMENT_MODAL_POST': {
        const { person, comment } = action.payload;
        draft.post.data.comments.push(comment);
        break;
      }
      case '@modal/LIKE_MODAL_COMMENT': {
        const { person, comment_id, addedLike, profile_id } = action.payload;
        draft.post.data.comments.forEach((comment, index) => {
          if (comment.id === comment_id) {
            if (addedLike) {
              draft.post.data.comments[index].likes.push(person);
              if (person.id === profile_id)
                draft.post.data.comments[index].liked = true;
            } else {
              draft.post.data.comments[index].likes = comment.likes.filter(
                liker => liker.id !== person.id
              );
              if (person.id === profile_id)
                draft.post.data.comments[index].liked = false;
            }
          }
        });
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
      case '@modal/CLOSE_POST_MODAL': {
        draft.post.status = false;
        draft.post.data = {};
        draft.likes.event = null;
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
      case '@modal/OPEN_NOTIFICATION_MODAL': {
        const { notification } = action.payload;
        draft.notification.status = true;
        draft.notification.data = notification;
        break;
      }
      case '@modal/CLOSE_NOTIFICATION_MODAL': {
        draft.notification.status = false;
        draft.notification.data = {};
        break;
      }
      default:
    }
  });
}
