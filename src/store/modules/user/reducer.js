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
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        draft.friends = [];
        break;
      }
      default:
    }
  });
}
