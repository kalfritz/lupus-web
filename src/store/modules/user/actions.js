export function updateCoverRequest(data) {
  return {
    type: '@user/UPDATE_COVER_REQUEST',
    payload: { data },
  };
}
export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function storeMyFriendListRequest() {
  return {
    type: '@user/STORE_MY_FRIEND_LIST_REQUEST',
  };
}

export function storeMyFriendListSuccess(friends) {
  return {
    type: '@user/STORE_MY_FRIEND_LIST_SUCCESS',
    payload: { friends },
  };
}

export function friendSignedIn({ friend_id }) {
  return {
    type: '@user/FRIEND_SIGNED_IN',
    payload: { friend_id },
  };
}

export function friendSignedOut({ friend_id }) {
  return {
    type: '@user/FRIEND_SIGNED_OUT',
    payload: { friend_id },
  };
}
