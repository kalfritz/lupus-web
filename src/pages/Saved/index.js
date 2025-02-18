import React from 'react';

import { Container } from './styles';
import Maintenance from '~/components/Maintenance';

export default function Saved() {
  return (
    <Container>
      <Maintenance height="50vh" title="Saved Items" />
    </Container>
  );
}
