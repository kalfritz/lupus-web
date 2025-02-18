import React, { useEffect, useMemo, forwardRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdNotifications, MdDelete } from 'react-icons/md';

import {
  fetchNotificationsRequest,
  markAllNotifAsRead,
  markNotifAsReadRequest,
  deleteNotif,
} from '~/store/modules/notifications/actions';

import standardProfilePic from '~/assets/default-pfp.jpeg';

import Content from './Content';
import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
  ProfileLink,
  NotifActions,
} from './styles';

export default forwardRef(({ visible, setVisible, showSearchBar }, ref) => {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications);

  useEffect(() => {
    dispatch(fetchNotificationsRequest());
  }, [dispatch]);

  const hasUnread = useMemo(() => {
    return notifications.data.some(notification => notification.read === false);
  }, [notifications]);

  const unreadNotifsCount = useMemo(() => {
    let unreadNotifs = notifications.data.filter(notif => !notif.read);
    return unreadNotifs.length;
  }, [notifications]);

  const handleMarkAllAsRead = async () => {
    const hasUnreadNotifs = notifications.data.some(notif => !notif.read);
    if (hasUnreadNotifs) {
      dispatch(markAllNotifAsRead());
    }
  };

  const handleMarkAsRead = async notif_id => {
    dispatch(markNotifAsReadRequest({ notif_id }));
  };

  const handleDelete = async notif_id => {
    dispatch(deleteNotif({ notif_id }));
  };

  return (
    <Container ref={ref} showSearchBar={showSearchBar}>
      <Badge
        hasUnread={hasUnread}
        unreadCount={String(unreadNotifsCount)}
        onClick={() => setVisible(!visible)}
        className="notifications"
      >
        <MdNotifications size={24} color="#444" />
      </Badge>
      <NotificationList visible={visible}>
        <header>
          <h2>Notifications</h2>
          <button onClick={handleMarkAllAsRead}>Mark all as read</button>
        </header>
        <Scroll>
          {notifications.data.map(notif => (
            <Notification key={notif._id} unread={!notif.read}>
              <section>
                <ProfileLink notif={notif} to={`/${notif.dispatcher.username}`}>
                  <img
                    src={notif.dispatcher.avatar || standardProfilePic}
                    alt="user"
                  />
                </ProfileLink>
                <Content notif={notif} />
              </section>
              <NotifActions>
                <button
                  onClick={() => {
                    handleMarkAsRead(notif._id);
                  }}
                  title="Mark as read"
                >
                  <div />
                </button>
                <button>
                  <MdDelete
                    onClick={() => {
                      handleDelete(notif._id);
                    }}
                    title="Delete"
                    size={12}
                    color="#f64c75"
                    className="delete"
                  />
                </button>
              </NotifActions>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
});
