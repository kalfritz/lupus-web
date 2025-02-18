import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import standardProfilePic from '~/assets/default-pfp.jpeg';

import { Container, Content, Time, NotifLink } from './styles';

export default function NotifModal() {
  const notificationModal = useSelector(state => state.modal.notification);
  const notif = notificationModal.data;
  const route = useMemo(() => {
    if (notif.context === 'like_post') {
      return `/posts/${notif.content.post_id}`;
    }
    if (notif.context === 'like_comment') {
      return `/posts/${notif.content.post_id}/comments/${notif.content.comment_id}`;
    }
    if (notif.context === 'comment_post') {
      return `/posts/${notif.content.post_id}/comments/${notif.content.comment_id}`;
    }
    if (notif.context === 'friendship') {
      return `/users/${notif.dispatcher.id}`;
    }
  }, [notif]);

  const limitedText = useMemo(() => {
    const { content } = notif;
    if (content) {
      return content.text.length >= 30
        ? content.text.substr(0, 29).concat('...')
        : content.text;
    }
  }, [notif]);

  return (
    <Container>
      <Content>
        <img src={notif.dispatcher.avatar || standardProfilePic} alt="user" />
        {notif.context === 'comment_post' && (
          <NotifLink to={route}>
            <p>
              <span>{notif.dispatcher.name || notif.dispatcher.username}</span>{' '}
              commented on your post "{limitedText}"
            </p>
            <Time>{notif.timeDistance}</Time>
          </NotifLink>
        )}
        {notif.context === 'like_post' && (
          <NotifLink to={route}>
            <p>
              <span>{notif.dispatcher.name || notif.dispatcher.username} </span>{' '}
              liked your post "{limitedText}"
            </p>
            <Time>{notif.timeDistance}</Time>
          </NotifLink>
        )}
        {notif.context === 'like_comment' && (
          <NotifLink to={route}>
            <p>
              <span>{notif.dispatcher.name || notif.dispatcher.username}</span>{' '}
              liked your comment "{limitedText}"
            </p>
            <Time>{notif.timeDistance}</Time>
          </NotifLink>
        )}
        {notif.context === 'friendship' && (
          <NotifLink to={route}>
            <p>
              <span>You</span>and
              <span>
                {notif.dispatcher.name || notif.dispatcher.username}
              </span>{' '}
              are friends now!
            </p>
            <Time>{notif.timeDistance}</Time>
          </NotifLink>
        )}
      </Content>
    </Container>
  );
}
