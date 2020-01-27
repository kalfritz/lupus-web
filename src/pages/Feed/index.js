import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format, formatDistance } from 'date-fns';

//import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';

import FriendList from '~/components/FriendList';
import Post from '~/components/Post';
import Modal from '~/components/Modal';
import { Container, Trends, PostList } from './styles';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);
  const { loading, post, status } = modal;

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');

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
  }, [profile.id]);

  return (
    <Container>
      <Trends>
        <h1>trends....</h1>
      </Trends>
      <PostList>
        <h1>posts...</h1>
        <header>Poste algo amigo</header>

        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </PostList>
      <FriendList />
      {status && <Modal />}
    </Container>
  );
}
