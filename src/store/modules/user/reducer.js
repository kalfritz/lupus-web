import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  friends: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        const { user } = action.payload;
        draft.profile = user;
        break;
      }
      case '@user/UPDATE_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        const { profile } = action.payload;
        draft.profile = profile;
        draft.loading = false;
        break;
      }
      case '@user/UPDATE_PROFILE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@user/STORE_MY_FRIEND_LIST_REQUEST': {
        break;
      }
      case '@user/STORE_MY_FRIEND_LIST_SUCCESS': {
        const { friends } = action.payload;
        draft.friends = friends;
        break;
      }
      case '@user/FRIEND_SIGNED_IN': {
        const { friend_id } = action.payload;

        draft.friends = draft.friends.map(friend => {
          if (friend.id === friend_id) {
            friend.online = true;
          }
          return friend;
        });
        break;
      }
      case '@user/FRIEND_SIGNED_OUT': {
        const { friend_id } = action.payload;

        draft.friends = draft.friends.map(friend => {
          if (friend.id === friend_id) {
            friend.online = false;
          }
          return friend;
        });
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.friends = [];
        break;
      }
      default:
    }
  });
}
