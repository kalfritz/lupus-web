import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose, MdBookmark } from 'react-icons/md';

import more from '~/assets/more.svg';
import comment from '~/assets/comment.svg';
import send from '~/assets/send.svg';

import CommentList from '~/components/CommentList';
import AddComment from '~/components/AddComment';

import api from '~/services/api';

import {
  Container,
  Content,
  UserInfo,
  MoreActions,
  MoreActionsModel,
  Actions,
  Scroll,
} from './styles';

import { closeModal } from '~/store/modules/modal/actions';
import { likePostRequest } from '~/store/modules/like/actions';

export default function Modal() {
  const ref = useRef();
  const addCommentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const handleKeyPress = e => {
    e.keyCode === 27 && dispatch(closeModal());
  };
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const { loading, post, status } = modal;
  const handleLike = () => {
    dispatch(likePostRequest(post.id));
  };
  useEffect(() => {
    ref.current.focus();
  }, []);
  useEffect(() => {
    async function loadComments() {
      console.log(`loading ${post.content}...`);
      setLoadingComments(true);
      const response = await api.get(`posts/${post.id}/comments`);
      setComments(response.data);
      setLoadingComments(false);
    }
    loadComments();
  }, []);
  return (
    <Container tabIndex="0" ref={ref} onKeyDown={handleKeyPress}>
      <button onClick={() => dispatch(closeModal())}>
        <MdClose size={26} color="#ccc" />
      </button>
      <Content tabIndex="0" onKeyDown={handleKeyPress}>
        {post.picture && <img src={post.picture.url} alt="post" />}
        <section>
          <Scroll>
            <header>
              <UserInfo>
                {post.user.avatar && (
                  <img src={post.user.avatar.url} alt="user profile pic" />
                )}
                <div>
                  <span>{post.user.name || post.user.username}</span>
                  <small title={post.time}>{post.timeDistance}</small>
                </div>
              </UserInfo>
              <MoreActions>
                <img
                  src={more}
                  alt="More"
                  title="See more options"
                  onClick={() => setVisible(!visible)}
                />
                <MoreActionsModel visible={visible}>
                  <div>
                    <MdBookmark size={14} color="black"></MdBookmark>
                    <div>
                      <strong>Save post</strong>
                      <span>Add this to your saved itens</span>
                    </div>
                  </div>
                </MoreActionsModel>
              </MoreActions>
            </header>
            <p>{post.content}</p>
            <footer>
              <strong>
                {post.likes.length === 0
                  ? 'be the first to like'
                  : post.likes.length > 1
                  ? `${post.likes.length} likes`
                  : `${post.likes.length} like`}
              </strong>
              <Actions liked={post.liked}>
                {/* <likeSVG /> */}
                <svg
                  onClick={handleLike}
                  width="23px"
                  height="22px"
                  viewBox="0 0 23 22"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="Web"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Home"
                      transform="translate(-449.000000, -713.000000)"
                      stroke="#000000"
                      strokeWidth="1.44"
                    >
                      <g
                        id="Group-3"
                        transform="translate(430.000000, 102.000000)"
                      >
                        <g
                          id="Group-2"
                          transform="translate(0.000000, 20.000000)"
                        >
                          <g
                            id="Like,-comment,-send,-collect"
                            transform="translate(20.000000, 583.000000)"
                          >
                            <path
                              d="M10.4483946,29.0625 L8.93337735,27.6740458 C3.55245415,22.7379084 -5.68434189e-14,19.4805856 -5.68434189e-14,15.4947206 C-5.68434189e-14,12.2373978 2.52328729,9.6875 5.74661701,9.6875 C7.56463766,9.6875 9.30951955,10.5427452 10.4483946,11.8889645 C11.5872696,10.5427452 13.3321515,9.6875 15.1501721,9.6875 C18.3735018,9.6875 20.8967891,12.2373978 20.8967891,15.4947206 C20.8967891,19.4805856 17.344335,22.7379084 11.9634118,27.6740458 L10.4483946,29.0625 Z"
                              id="Like"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <img
                  src={comment}
                  onClick={() => {
                    addCommentRef.current.childNodes[1].childNodes[0].focus();
                    addCommentRef.current.childNodes[1].childNodes[0].scrollIntoView(
                      {
                        behavior: 'smooth',
                        block: 'center',
                      }
                    );
                    return;
                  }}
                  alt="comment"
                />
                <img src={send} alt="send" />
              </Actions>
            </footer>
            {loadingComments ? (
              <h1>carregando.....</h1>
            ) : (
              <CommentList comments={comments} />
            )}
          </Scroll>
          <AddComment ref={addCommentRef} post={post} fixed={true} />
        </section>
      </Content>
    </Container>
  );
}
