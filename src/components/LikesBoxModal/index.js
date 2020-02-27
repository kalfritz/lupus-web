import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content, Scroll } from './styles';
import Like from './Like';

import { MdClose } from 'react-icons/md';

import { closeLikesModal } from '~/store/modules/modal/actions';

export default function LikeBox() {
  const dispatch = useDispatch();
  const contentRef = useRef();
  const profile = useSelector(state => state.user.profile);
  const friends = useSelector(state => state.user.friends);
  const modal = useSelector(state => state.modal);
  let { data: likes, event } = modal.likes;

  const handleLikesKeyDown = useCallback(
    e => {
      e.keyCode === 27 && dispatch(closeLikesModal());
    },
    [dispatch]
  );

  const friendsIds = useMemo(() => {
    return friends.map(friend => friend.id);
  }, [friends]);

  likes = useMemo(() => {
    const userFetchingIndex = likes.findIndex(like => like.id === profile.id);
    if (userFetchingIndex === -1) {
      //if user fetching did not like
      return likes.map(like => {
        friendsIds.some(id => id === like.id)
          ? (like.friendship = 'friend')
          : (like.friendship = 'add');
        return like;
      });
    } else {
      const like = likes.find(like => like.id === profile.id); //like made by the user fetching
      const newLikes = likes
        .filter((like, index) => index !== userFetchingIndex)
        .map(like => {
          friendsIds.some(id => id === like.id)
            ? (like.friendship = 'friend')
            : (like.friendship = 'add');
          return like;
        });
      return [{ ...like, friendship: false }, ...newLikes];
    }
  }, [likes, friendsIds, profile.id]);
  const handleClickOutsideModal = useCallback(
    e => {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        dispatch(closeLikesModal());
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (modal.post.status) {
      console.log('abri');
      console.log(event.click);
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
  }, [event, modal.post.status, handleClickOutsideModal, handleLikesKeyDown]);
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
