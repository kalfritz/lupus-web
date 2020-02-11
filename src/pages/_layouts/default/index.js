import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import socketio from 'socket.io-client';
import SocketContext from '~/context/SocketContext';

import Header from '~/components/Header';
import FriendList from '~/components/FriendList';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  const profile = useSelector(state => state.user.profile);
  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          user_id: profile.id,
        },
      }),
    [profile.id]
  );
  return (
    <SocketContext.Provider value={socket}>
      <Wrapper>
        <Header />
        {children}
        <FriendList />
      </Wrapper>
    </SocketContext.Provider>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
