import React, { useState, useEffect } from 'react';

import { parseISO, format, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';

import Intro from './Intro';
import Friends from './Friends';
import Photos from './Photos';

import Post from '~/components/Post';
import { Container, PostList } from './styles';

import api from '~/services/api';

export default function Timeline({ editable, profile }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(`/timeline/${profile.id}`);

      const data = response.data.map(post => ({
        ...post,
        timeDistance: formatDistance(parseISO(post.createdAt), new Date(), {
          addSuffix: true,
          locale: en,
        }),
        time: format(parseISO(post.createdAt), "mm'/'dd'/'yy ',' h':'mm a", {
          locale: en,
        }),
        liked: post.likes.some(like => like.id === profile.id),
      }));
      setPosts(data);
    }
    loadPosts();
  }, [profile]);
  return (
    <Container>
      <aside>
        <Intro editable={editable} profile={profile} />
        <Photos editable={editable} profile={profile} />
        <Friends editable={editable} profile={profile} />
      </aside>
      <PostList>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </PostList>
    </Container>
  );
}
