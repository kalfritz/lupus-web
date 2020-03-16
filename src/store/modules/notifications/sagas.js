import { takeLatest, call, put, all } from 'redux-saga/effects';
import { parseISO, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';
import api from '~/services/api';
import {
  fetchNotificationsSuccess,
  fetchNotificationsFailure,
  markNotifAsReadSuccess,
} from './actions';

export function* fetchNotifications() {
  try {
    const response = yield call(api.get, `notifications`);
    const data = response.data.map(notification => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true, locale: en }
      ),
    }));
    yield put(fetchNotificationsSuccess({ notifications: data }));
  } catch (err) {
    yield put(fetchNotificationsFailure({ error: err }));
  }
}

export function* markAllAsRead() {
  try {
    yield call(api.put, `notifications`);
  } catch (err) {
    //
  }
}

export function* markAsRead({ payload }) {
  const { notif_id } = payload;
  try {
    const response = yield call(api.put, `notifications/${notif_id}`);
    yield put(markNotifAsReadSuccess({ notif_id, read: response.data.read }));
  } catch (err) {
    //
  }
}

export function* deleteNotif({ payload }) {
  const { notif_id } = payload;
  try {
    yield call(api.delete, `notifications/${notif_id}`);
  } catch (err) {
    //
  }
}

export default all([
  takeLatest('@notifications/FETCH_NOTIFICATIONS_REQUEST', fetchNotifications),
  takeLatest('@notifications/MARK_ALL_NOTIF_AS_READ', markAllAsRead),
  takeLatest('@notifications/MARK_NOTIF_AS_READ_REQUEST', markAsRead),
  takeLatest('@notifications/DELETE_NOTIF', deleteNotif),
]);
