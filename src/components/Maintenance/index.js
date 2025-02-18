import React from 'react';

import { Container } from './styles';

export default function Maintenance({ title, height }) {
  return (
    <Container height={height}>
      <h1>{title} is under maintenance</h1>
      <h4>Thank you for your patience</h4>
    </Container>
  );
}
