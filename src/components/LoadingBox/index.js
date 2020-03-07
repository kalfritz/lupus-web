import React from 'react';

import {
  Container,
  LoadingPost,
  Header,
  ProfileCircle,
  TwoLinesBox,
  ThreeLinesBox,
} from './styles';

export default function LoadingBox({ context }) {
  return (
    <Container context={context}>
      {[1, 2, 3].map((n, index) => (
        <LoadingPost key={index}>
          <Header>
            <ProfileCircle />
            <TwoLinesBox>
              <div />
              <div />
            </TwoLinesBox>
          </Header>
          <ThreeLinesBox>
            <div />
            <div />
            <div />
          </ThreeLinesBox>
        </LoadingPost>
      ))}
    </Container>
  );
}
