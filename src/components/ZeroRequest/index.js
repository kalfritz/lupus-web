import React from 'react';

import sadFace from '~/assets/sad.png';

import { Container } from './styles';

export default function ZeroRequest() {
  return (
    <Container>
      <p>You don't have any friend requests</p>
      <img src={sadFace} alt="sad face" />
    </Container>
  );
}
