import React, {
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Content, Scroll } from './styles';
import Like from './Like';

import { MdClose } from 'react-icons/md';

import { closeLikesModal } from '~/store/modules/modal/actions';

import api from '~/services/api';

export default function LikeBox() {
  const dispatch = useDispatch();
  const contentRef = useRef();
  const profile = useSelector(state => state.user.profile);
  const friends = useSelector(state => state.user.friends);
  const modal = useSelector(state => state.modal);
  const [likes, setLikes] = useState([]);
  let { event, context, post_id, comment_id } = modal.likes;

  const setStatus = ({ status, user_id }) => {
    const updatedLikers = likes.map(liker => {
      return liker.id === user_id ? { ...liker, status } : liker;
    });
    setLikes(updatedLikers);
  };

  useEffect(() => {
    const loadPostLikes = async () => {
      const response = await api.get(`/posts/${post_id}/likes`);
      setLikes(response.data);
    };
    const loadCommentLikes = async () => {
      const response = await api.get(
        `/posts/${post_id}/comments/${comment_id}/likes`
      );
      setLikes(response.data);
    };
    context === 'post' && loadPostLikes();
    context === 'comment' && loadCommentLikes();
  }, [post_id, comment_id]);

  const handleLikesKeyDown = useCallback(
    e => {
      e.keyCode === 27 && dispatch(closeLikesModal());
    },
    [dispatch]
  );

  const friendsIds = useMemo(() => {
    return friends.map(friend => friend.id);
  }, [friends]);

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
            <Like like={like} key={like.id} setStatus={setStatus} />
          ))}
        </Scroll>
      </Content>
    </Container>
  );
}
