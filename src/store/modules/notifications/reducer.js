import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@notifications/ADD_NOTIFICATION': {
        const { notification } = action.payload;
        draft.data.unshift(notification);
        break;
      }
      case '@notifications/FETCH_NOTIFICATIONS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@notifications/FETCH_NOTIFICATIONS_SUCCESS': {
        const { notifications } = action.payload;
        draft.loading = false;
        draft.data = notifications;
        break;
      }
      case '@notifications/FETCH_NOTIFICATIONS_FAILURE': {
        const { error } = action.payload;
        draft.loading = false;
        draft.error = error;
        break;
      }
      case '@notifications/MARK_ALL_NOTIF_AS_READ': {
        draft.data = draft.data.map(notification => {
          return { ...notification, read: true };
        });
        break;
      }
      case '@notifications/MARK_NOTIF_AS_READ_SUCCESS': {
        const { notif_id, read } = action.payload;
        draft.data = draft.data.map(notification =>
          notification._id === notif_id
            ? { ...notification, read }
            : notification
        );
        break;
      }
      case '@notifications/DELETE_NOTIF': {
        const { notif_id } = action.payload;
        draft.data = draft.data.filter(
          notification => notification._id !== notif_id
        );

        break;
      }

      default:
    }
  });
}
