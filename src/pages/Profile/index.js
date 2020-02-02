import React, { useEffect } from 'react';

import api from '~/services/api';

import { Container, Trends, PostList, FriendList } from './styles';

export default function Profile() {
  useEffect(() => {
    async function load() {}
    load();
  }, []);
  return (
    <Container>
      <Trends>
        <h1>q</h1>
      </Trends>
      <PostList>
        <h1>q</h1>
      </PostList>
      <FriendList>
        <h1>q</h1>
      </FriendList>
    </Container>
  );
}
