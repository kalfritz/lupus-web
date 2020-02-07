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
      <PostList>
        <h1>q</h1>
      </PostList>
    </Container>
  );
}
