import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import socketio from 'socket.io-client';
import { parseISO, format, formatDistance } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import TextareaAutosize from 'react-textarea-autosize';

//import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';

import FriendList from '~/components/FriendList';
import Post from '~/components/Post';
import Modal from '~/components/Modal';
import LikesModal from '~/components/LikesBoxModal'; //CHANGE CHANGE CHANGE
import { Container, Trends, PostList, CreatePostBox } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Feed() {
  const textRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [textareaText, setTextareaText] = useState('');
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);
  const { post, likes } = modal;

  const socket = useMemo(
    () =>
      socketio('http://localhost:3333', {
        query: {
          user_id: profile.id,
        },
      }),
    [profile.id]
  );

  const handleTextarea = e => {
    setTextareaText(e.target.value);
  };

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
        <CreatePostBox>
          <header>
            <h2>Create a Post!</h2>
          </header>
          <div>
            <img
              src={profile.avatar ? profile.avatar.url : standardProfilePic}
              alt="user"
            />

            <Form onSubmit={() => {}}>
              <TextareaAutosize
                minRows={3}
                maxRows={100}
                onChange={handleTextarea}
                value={textareaText}
                name="content"
                type="text"
                placeholder="Why don't you share something fun?"
              />
              <button type="submit">Post</button>
            </Form>
          </div>
        </CreatePostBox>

        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </PostList>

      {post.status && <Modal />}
      {likes.status && <LikesModal />}
    </Container>
  );
}
