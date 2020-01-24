import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Content from './Content';
import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
  ProfileLink,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const hasUnread = useMemo(() => {
    return notifications.some(notification => notification.read === false);
  }, [notifications]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  /* const handleMarkAsRead = async id => {
    await api.put(`notifications/${id}`);
    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  };*/

  return (
    <Container>
      <Badge hasUnread={hasUnread} onClick={() => setVisible(!visible)}>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notif => (
            <Notification key={notif._id} unread={!notif.read}>
              <ProfileLink
                notif={notif}
                to={`/users/${notif.dispatcher.username}`}
              >
                <img
                  src={notif.dispatcher.avatar}
                  alt={notif.dispatcher.name}
                />
              </ProfileLink>
              <Content notif={notif} />
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
