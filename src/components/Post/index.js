import React, { useState, useRef, useEffect, useMemo, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdBookmark, MdInfo } from 'react-icons/md';
import TextareaAutosize from 'react-textarea-autosize';

import { likePostRequest } from '~/store/modules/like/actions';

import api from '~/services/api';

import standardProfilePic from '~/assets/ninja.jpg';
import {
  openModalWithAPost,
  openModalWithLikes,
} from '~/store/modules/modal/actions';

import more from '~/assets/more.svg';
import comment from '~/assets/comment.svg';
import send from '~/assets/send.svg';

import UserHover from '~/components/UserHover';
import CommentList from '~/components/CommentList';
import AddComment from '~/components/AddComment';
import MiniLikesModal from '~/components/MiniLikesModal';

import {
  Container,
  UserInfo,
  Content,
  MoreActions,
  MoreActionsModel,
  Actions,
  LikeBox,
  ImgLink,
  NameLinkBox,
  NameLink,
  ConfirmSpan,
  DeleteSpan,
} from './styles';

export default forwardRef(({ post, deletePost, setPostContent }, ref) => {
  const nameLinkBoxRef = useRef();
  const dispatch = useDispatch();
  const moreOptionsRef = useRef();
  const addCommentRef = useRef(null);
  const [editedContent, setEditedContent] = useState(post.content);
  const [confirm, setConfirm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [visibleMoreOptions, setVisibleMoreOptions] = useState(false);
  const [visibleMiniLikes, setVisibleMiniLikes] = useState(false);
  const [visibleUserHover, setVisibleUserHover] = useState(false);

  const handlePostDelete = async id => {
    await api.delete(`/posts/${id}`);
    deletePost(id);
  };

  useEffect(() => {
    if (confirm) {
      setTimeout(() => {
        setConfirm(false);
      }, 2000);
    }
  }, [confirm]);

  const handleLike = () => {
    dispatch(likePostRequest({ post_id: post.id, op_id: post.user_id }));
  };
  const handleClickImage = () => {
    dispatch(openModalWithAPost({ post, deletePost, setPostContent }));
  };

  const handleTextarea = async e => {
    setEditedContent(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();

    await api.put(`/posts/${post.id}`, {
      content: editedContent,
    });

    setEditing(false);
    setPostContent({ id: post.id, content: editedContent });
  };

  const handleClickOutside = e => {
    if (moreOptionsRef.current && !moreOptionsRef.current.contains(e.target)) {
      //if click outside closes moreOptions
      setVisibleMoreOptions(false);
    }
  };

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

  const rect = useMemo(() => {
    if (visibleUserHover) {
      return nameLinkBoxRef.current.getBoundingClientRect();
    } else {
      return null;
    }
  }, [visibleUserHover]);

  return (
    <Container ref={ref}>
      <header>
        <UserInfo>
          {post.user.avatar && (
            <ImgLink to={`/${post.user.username}`}>
              <img
                src={
                  post.user.avatar ? post.user.avatar.url : standardProfilePic
                }
                alt={post.user.name || post.user.username}
              />
            </ImgLink>
          )}
          <div>
            <NameLinkBox
              ref={nameLinkBoxRef}
              onMouseEnter={() => {
                setVisibleUserHover(true);
              }}
              onMouseLeave={() => {
                setVisibleUserHover(false);
              }}
            >
              {visibleUserHover && <UserHover user={post.user} rect={rect} />}
              <NameLink to={`/${post.user.username}`}>
                <span>{post.user.name || post.user.username}</span>
              </NameLink>
            </NameLinkBox>
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

      <Content>
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
        {post.picture && (
          <img src={post.picture.url} alt="post" onClick={handleClickImage} />
        )}
      </Content>

      <footer>
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
                <g id="Group-3" transform="translate(430.000000, 102.000000)">
                  <g id="Group-2" transform="translate(0.000000, 20.000000)">
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
              addCommentRef.current.childNodes[1].childNodes[0].scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
              return;
            }}
            alt="comment"
          />
          <img src={send} alt="send" />
        </Actions>
        <LikeBox>
          {post.likes.length !== 0 && (
            <span
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
              {post.likes.length > 1
                ? `${post.likes.length} likes`
                : `${post.likes.length} like`}
            </span>
          )}
          <MiniLikesModal visible={visibleMiniLikes} likes={post.likes} />
        </LikeBox>
      </footer>

      <CommentList comments={post.comments} />
      <AddComment ref={addCommentRef} post={post} />
    </Container>
  );
});
