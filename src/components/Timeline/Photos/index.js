import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, format, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';

import { MdPhoto } from 'react-icons/md';

import { Container, PhotosGrid, Photo } from './styles';

import {
  openModalWithAPost,
  openModalWithLikes,
  closeLikesModal,
} from '~/store/modules/modal/actions';

import api from '~/services/api';

export default function Photos({ profile, editable }) {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await api.get(`/photos/${profile.id}`, {
        query: {
          limit: 9,
        },
      });

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

  const handleClickImage = post => {
    dispatch(openModalWithAPost({ post }));
  };

  return (
    <Container>
      <header>
        <MdPhoto size={24} color="#333" />
        <span>Photos</span>
      </header>
      <PhotosGrid>
        {posts.map(post => (
          <Photo
            src={post.picture.url}
            alt="photo"
            key={post.id}
            onClick={() => {
              handleClickImage(post);
            }}
          />
        ))}
      </PhotosGrid>
    </Container>
  );
}
