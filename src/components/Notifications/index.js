import React, { useState, useEffect, useMemo, forwardRef } from 'react';
import { MdNotifications, MdDelete } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
//import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';

import standardProfilePic from '~/assets/ninja.jpg';

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

export default forwardRef(({ visible, setVisible }, ref) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: en }
        ),
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  const hasUnread = useMemo(() => {
    return notifications.some(notification => notification.read === false);
  }, [notifications]);

  const unreadNotifsCount = useMemo(() => {
    let unreadNotifs = notifications.filter(notif => !notif.read);
    return unreadNotifs.length;
  }, [notifications]);

  const handleMarkAsRead = async id => {
    const response = await api.put(`notifications/${id}`);
    const { read } = response.data;
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read } : notification
      )
    );
  };

  const handleDelete = async id => {
    let b;
    try {
      b = await api.delete(`notifications/${id}`);
    } catch (err) {
      console.log(err);
    }
    const q = notifications.filter(notification => notification._id !== id);

    console.log('b:', b);
    console.log('q');
    console.log(q);
    setNotifications(q);
  };

  return (
    <Container ref={ref}>
      <Badge
        hasUnread={hasUnread}
        unreadCount={String(unreadNotifsCount)}
        onClick={() => setVisible(!visible)}
      >
        <MdNotifications size={24} color="#7159c1" />
      </Badge>
      <NotificationList visible={visible}>
        <h2>Notifications</h2>
        <Scroll>
          {notifications.map(notif => (
            <Notification key={notif._id} unread={!notif.read}>
              <section>
                <ProfileLink
                  notif={notif}
                  to={`/users/${notif.dispatcher.username}`}
                >
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
                <MdDelete
                  onClick={() => {
                    handleDelete(notif._id);
                  }}
                  title="Delete"
                  size={12}
                  color="#f64c75"
                />
              </NotifActions>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
});
