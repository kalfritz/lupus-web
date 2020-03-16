export function addNotification({ notification }) {
  return {
    type: '@notifications/ADD_NOTIFICATION',
    payload: { notification },
  };
}

export function fetchNotificationsRequest() {
  return {
    type: '@notifications/FETCH_NOTIFICATIONS_REQUEST',
  };
}

export function fetchNotificationsSuccess({ notifications }) {
  return {
    type: '@notifications/FETCH_NOTIFICATIONS_SUCCESS',
    payload: { notifications },
  };
}

export function fetchNotificationsFailure({ error }) {
  return {
    type: '@notifications/FETCH_NOTIFICATIONS_FAILURE',
    payload: { error },
  };
}
export function markAllNotifAsRead() {
  return {
    type: '@notifications/MARK_ALL_NOTIF_AS_READ',
  };
}

export function markNotifAsReadRequest({ notif_id }) {
  return {
    type: '@notifications/MARK_NOTIF_AS_READ_REQUEST',
    payload: { notif_id },
  };
}

export function markNotifAsReadSuccess({ notif_id, read }) {
  return {
    type: '@notifications/MARK_NOTIF_AS_READ_SUCCESS',
    payload: { notif_id, read },
  };
}

export function deleteNotif({ notif_id }) {
  return {
    type: '@notifications/DELETE_NOTIF',
    payload: { notif_id },
  };
}
