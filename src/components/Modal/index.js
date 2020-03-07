import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose, MdBookmark, MdInfo } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';

import more from '~/assets/more.svg';
import comment from '~/assets/comment.svg';
import send from '~/assets/send.svg';

import CommentList from '~/components/CommentList';
import AddComment from '~/components/AddComment';
import MiniLikesModal from '~/components/MiniLikesModal';

import api from '~/services/api';

import {
  Container,
  Content,
  UserInfo,
  MoreActions,
  MoreActionsModel,
  Actions,
  Scroll,
  LikeBox,
  DeleteSpan,
  ConfirmSpan,
  PostContent,
} from './styles';

import {
  closePostModal,
  openModalWithLikes,
  passEventsToLikesModal,
} from '~/store/modules/modal/actions';
import { likePostRequest } from '~/store/modules/like/actions';

export default function Modal() {
  const dispatch = useDispatch();
  const ref = useRef();
  const addCommentRef = useRef(null);
  const moreOptionsRef = useRef();
  const [visibleMoreOptions, setVisibleMoreOptions] = useState(false);
  const [visibleMiniLikes, setVisibleMiniLikes] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);

  const [confirm, setConfirm] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleKeyDown = useCallback(
    e => {
      e.keyCode === 27 && dispatch(closePostModal());
    },
    [dispatch]
  );
  const modal = useSelector(state => state.modal);
  const { data: post } = modal.post;
  const [editedContent, setEditedContent] = useState(post.content);
  const handleTextarea = async e => {
    setEditedContent(e.target.value);
  };
  const handlePostDelete = async id => {
    await api.delete(`/posts/${id}`);
    modal.deletePost(id);
    dispatch(closePostModal());
  };
  useEffect(() => {
    if (confirm) {
      setTimeout(() => {
        setConfirm(false);
      }, 2000);
    }
  }, [confirm]);
  const handleSubmit = async e => {
    e.preventDefault();
    await api.put(`/posts/${post.id}`, {
      content: editedContent,
    });
    setEditing(false);
    modal.setPostContent({ id: post.id, content: editedContent });
  };
  const handleLike = () => {
    dispatch(likePostRequest({ post_id: post.id, op_id: post.user_id }));
  };
  const handleClickOutside = e => {
    if (moreOptionsRef.current && !moreOptionsRef.current.contains(e.target)) {
      setVisibleMoreOptions(false);
    }
  };

  const handleClickOutsideModal = useCallback(
    e => {
      e.preventDefault();
      if (ref.current && !ref.current.contains(e.target)) {
        if (e.target.tagName === 'BUTTON') return;
        dispatch(closePostModal());
        /*Clicking on Cancel button when editing is closing the modal so I'm avoi
      ding that to happen. I think it is happening because the button is being
      rendered conditionally based on state causing it to not being finded on
      ref.current.contains()
      */
      }
    },
    [dispatch]
  );

  useEffect(() => {
    async function loadComments() {
      setLoadingComments(true);
      const response = await api.get(`posts/${post.id}/comments`);
      setComments(response.data);
      setLoadingComments(false);
    }
    loadComments();

    ref.current.focus();

    document.addEventListener('click', handleClickOutsideModal, false);
    document.addEventListener('keydown', handleKeyDown, false);

    //This command is needed so that when the Likes Modal is opened the event
    //listener of the post modal is removed, and then, after the likes modal
    //is closed, the event listener is activated again

    dispatch(
      passEventsToLikesModal({
        event: {
          click: handleClickOutsideModal,
          keyDown: handleKeyDown,
        },
      })
    );

    return () => {
      document.removeEventListener('click', handleClickOutsideModal, false);
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [post.id, dispatch, handleClickOutsideModal, handleKeyDown]);

  useEffect(() => {
    if (visibleMoreOptions === true) {
      document.addEventListener('click', handleClickOutside, false);

      return () => {
        document.removeEventListener('click', handleClickOutside, false);
      };
    } else {
      document.removeEventListener('click', handleClickOutside, false);
    }
  }, [visibleMoreOptions]);

  return (
    <Container tabIndex="0">
      <button onClick={() => dispatch(closePostModal())}>
        <MdClose size={26} color="#ccc" />
      </button>
      <Content ref={ref} tabIndex="0">
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
                  onClick={() => setVisibleMoreOptions(!visibleMoreOptions)}
                />
                {post.editable ? (
                  <MoreActionsModel
                    editable={post.editable}
                    visible={visibleMoreOptions}
                    ref={moreOptionsRef}
                  >
                    <button>
                      <MdBookmark size={14} color="black" />
                      <span>Save post</span>
                    </button>
                    <button
                      onClick={() => {
                        setEditing(!editing);
                      }}
                    >
                      <span>Edit post</span>
                    </button>
                    <button
                      onClick={() => {
                        if (confirm) {
                          handlePostDelete(post.id);
                        } else {
                          setConfirm(true);
                        }
                      }}
                    >
                      <DeleteSpan confirm={confirm}>Delete</DeleteSpan>
                      <ConfirmSpan confirm={confirm}>
                        <MdInfo size={16} color="#D07502" /> Click to confirm
                      </ConfirmSpan>
                    </button>
                  </MoreActionsModel>
                ) : (
                  <MoreActionsModel
                    editable={post.editable}
                    visible={visibleMoreOptions}
                    ref={moreOptionsRef}
                  >
                    <button>
                      <MdBookmark size={14} color="black" />
                      <div>
                        <strong>Save post</strong>
                        <span>Add this to your saved itens</span>
                      </div>
                    </button>
                  </MoreActionsModel>
                )}
              </MoreActions>
            </header>
            <PostContent>
              {editing ? (
                <form onSubmit={handleSubmit}>
                  <TextareaAutosize
                    minRows={1}
                    maxRows={100}
                    onChange={handleTextarea}
                    value={editedContent}
                    name="content"
                    type="text"
                    spellcheck="false"
                  />
                  <div>
                    <button
                      onClick={() => {
                        setEditing(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button type="submit">Save Changes</button>
                  </div>
                </form>
              ) : (
                <p>{post.content}</p>
              )}
              {post.picture && <img src={post.picture.url} alt="post" />}
            </PostContent>
            <footer>
              <LikeBox>
                <strong
                  onMouseEnter={() => {
                    setVisibleMiniLikes(true);
                  }}
                  onMouseLeave={() => {
                    setVisibleMiniLikes(false);
                  }}
                  onClick={() => {
                    dispatch(
                      openModalWithLikes({
                        context: 'post',
                        post_id: post.id,
                        comment_id: null,
                      })
                    );
                  }}
                >
                  {post.likes.length === 0
                    ? ''
                    : post.likes.length > 1
                    ? `${post.likes.length} likes`
                    : `${post.likes.length} like`}
                </strong>
                <MiniLikesModal visible={visibleMiniLikes} likes={post.likes} />
              </LikeBox>
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
              <CommentList comments={comments} isRenderedInModal={true} />
            )}
          </Scroll>
          <AddComment ref={addCommentRef} post={post} fixed={true} />
        </section>
      </Content>
    </Container>
  );
}
