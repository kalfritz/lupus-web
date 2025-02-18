import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import backgroundImage from '~/assets/background.jpg';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  useEffect(() => {
    document.title = 'SociHub - Connect with your friends!';
  }, []);
  return (
    <Wrapper backgroundImage={backgroundImage}>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
