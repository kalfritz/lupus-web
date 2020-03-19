import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { parseISO, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';

import socketio from 'socket.io-client';
import SocketContext from '~/context/SocketContext';

import Header from '~/components/Header';
import FriendList from '~/components/FriendList';
import Modal from '~/components/Modal';
import LikesModal from '~/components/LikesBoxModal';
import NotifModal from '~/components/NotifModal';

import { Wrapper, Children, Aside } from './styles';

import {
  closePostModal,
  closeLikesModal,
  openNotificationModal,
  closeNotificationModal,
} from '~/store/modules/modal/actions';

import { addNotification } from '~/store/modules/notifications/actions';

export default function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const notifications = useSelector(state => state.notifications);
  const modal = useSelector(state => state.modal);
  const { post, likes, notification } = modal;

  useEffect(() => {
    const unreadNotif = notifications.data.filter(notif => !notif.read).length;
    document.title = unreadNotif ? `(${unreadNotif}) Luppus` : 'Luppus';
  }, [notifications.data]);

  const socket = useMemo(() => {
    return (
      profile.id &&
      socketio('https:luppusapi.xyz', {
        query: {
          user_id: profile.id,
        },
      })
    );
  }, [profile.id]);

  useEffect(() => {
    let cancelToken;
    socket.on('NOTIFICATION', async ({ params }) => {
      const { notification } = params;
      console.log({ notification });
      clearTimeout(cancelToken);

      notification.timeDistance = formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        { addSuffix: true, locale: en }
      );

      dispatch(addNotification({ notification }));
      dispatch(openNotificationModal({ notification }));
      cancelToken = setTimeout(() => {
        dispatch(closeNotificationModal());
      }, 5000);
    });

    return () => {
      clearTimeout(cancelToken);
      dispatch(closeNotificationModal());
      socket.off('NOTIFICATION');
      socket.emit('SIGN_OUT', {
        query: {
          user_id: profile.id,
        },
      });
    };
  }, [profile.id, socket]);

  useEffect(() => {
    modal.post.status && dispatch(closePostModal());
    modal.likes.status && dispatch(closeLikesModal()); //eslint-disable-next-line
  }, []); //I just want to check it on first render

  return (
    <SocketContext.Provider value={socket}>
      <Wrapper>
        <Header />
        <Children>{children}</Children>
        <Aside>
          <FriendList />
        </Aside>
        {post.status && <Modal />}
        {likes.status && <LikesModal />}
        {notification.status && <NotifModal />}
      </Wrapper>
    </SocketContext.Provider>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
