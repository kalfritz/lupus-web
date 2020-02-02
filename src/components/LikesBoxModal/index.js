import React, { useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content, Scroll } from './styles';
import Like from './Like';

import { MdClose } from 'react-icons/md';

import { closeLikesModal } from '~/store/modules/modal/actions';

export default function LikeBox() {
  const dispatch = useDispatch();
  const contentRef = useRef();
  const profile = useSelector(state => state.user.profile);
  const modal = useSelector(state => state.modal);
  let { data: likes, status, loading, event } = modal.likes;

  const handleLikesKeyDown = e => {
    e.keyCode === 27 && dispatch(closeLikesModal());
  };

  likes = useMemo(() => {
    const userFetchingIndex = likes.findIndex(like => like.id === profile.id);
    if (userFetchingIndex === -1) {
      return likes.map(like => {
        like.friendship = 'add';
        return like;
      });
    } else {
      const like = likes.find(like => like.id === profile.id); //like made by the user fetching
      const newLikes = likes
        .filter((like, index) => index !== userFetchingIndex)
        .map(like => {
          like.friendship = 'add';
          return like;
        });
      return [{ ...like, friendship: false }, ...newLikes];
    }
  }, [likes]);
  const handleClickOutsideModal = e => {
    console.log('click like');
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      dispatch(closeLikesModal());
    }
  };
  useEffect(() => {
    if (modal.post.status) {
      document.removeEventListener('click', event.click, false);
      document.removeEventListener('keydown', event.keyDown, false);
    }

    document.addEventListener('click', handleClickOutsideModal, false);
    document.addEventListener('keydown', handleLikesKeyDown, false);

    return () => {
      document.removeEventListener('click', handleClickOutsideModal, false);
      document.removeEventListener('keydown', handleLikesKeyDown, false);

      if (modal.post.status) {
        document.addEventListener('click', event.click, false);
        document.addEventListener('keydown', event.keyDown, false);
      }
    };
  }, []);
  return (
    <Container>
      <button onClick={() => dispatch(closeLikesModal())}>
        <MdClose size={26} color="#ccc" />
      </button>
      <Content ref={contentRef}>
        <Scroll>
          {likes.map(like => (
            <Like like={like} key={like.id} />
          ))}
        </Scroll>
      </Content>
    </Container>
  );
}
