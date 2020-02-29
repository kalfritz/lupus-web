import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import socketio from 'socket.io-client';
import SocketContext from '~/context/SocketContext';

import Header from '~/components/Header';
import FriendList from '~/components/FriendList';
import Modal from '~/components/Modal';
import LikesModal from '~/components/LikesBoxModal';

import { Wrapper, Children, Aside } from './styles';

import { closePostModal, closeLikesModal } from '~/store/modules/modal/actions';

export default function DefaultLayout({ children }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);
  const { post, likes } = modal;

  const socket = useMemo(() => {
    return (
      profile.id &&
      socketio('http://localhost:3333', {
        query: {
          user_id: profile.id,
        },
      })
    );
  }, [profile.id]);

  useEffect(() => {
    return () => {
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
      </Wrapper>
    </SocketContext.Provider>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
