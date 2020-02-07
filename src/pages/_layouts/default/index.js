import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import FriendList from '~/components/FriendList';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <FriendList />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
