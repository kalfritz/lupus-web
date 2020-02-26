import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format, formatDistance } from 'date-fns';
import TextareaAutosize from 'react-textarea-autosize';
import { MdPhotoCamera, MdCancel } from 'react-icons/md';

//import pt from 'date-fns/locale/pt';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';

import Post from '~/components/Post';

import { Container, PostList, CreatePostBox, Actions } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function Feed() {
  const ref = useRef();
  let [posts, setPosts] = useState([]);
  const [textareaText, setTextareaText] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadPictureStatus, setUploadPictureStatus] = useState(false);
  const profile = useSelector(state => state.user.profile);

  posts = useMemo(() => {
    return posts.map(post => {
      post.editable = post.user.id === profile.id;
      return post;
    });
  }, [posts, profile.id]);

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const setPostContent = ({ id, content }) => {
    const updatedPosts = posts.map(post => {
      if (post.id === id) {
        post.content = content;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

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

  const handleCancel = () => {
    setFile(null);
    setPreview(null);

    setUploadPictureStatus(false);
  };

  const handleChange = async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);

    setUploadPictureStatus(true);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await api.post('/posts', {
      content: textareaText,
      picture_id: file,
    });

    const newPost = response.data;

    newPost.timeDistance = formatDistance(new Date(), new Date(), {
      addSuffix: true,
      locale: en,
    });
    newPost.time = format(new Date(), "mm'/'dd'/'yy ',' h':'mm a", {
      locale: en,
    });

    setPosts([newPost, ...posts]);
    setTextareaText('');
    setFile(null);
    setPreview(null);
    setUploadPictureStatus(false);
  };

  return (
    <Container>
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

            <form onSubmit={handleSubmit}>
              <TextareaAutosize
                minRows={3}
                maxRows={100}
                onChange={handleTextarea}
                value={textareaText}
                name="content"
                type="text"
                placeholder="Why don't you share something fun?"
              />
              <label htmlFor="picture">
                <MdPhotoCamera size={20} color="#333" />

                <input
                  type="file"
                  id="picture"
                  accept="image/*"
                  data-file={file}
                  onChange={handleChange}
                  ref={ref}
                />
              </label>
              {uploadPictureStatus && (
                <div>
                  <img src={preview} alt="profile" />
                  <Actions>
                    <button onClick={handleCancel}>
                      <MdCancel size={26} color="#fff" />
                    </button>
                  </Actions>
                </div>
              )}

              <button type="submit">Post</button>
            </form>
          </div>
        </CreatePostBox>

        {posts.map(post => (
          <Post
            post={post}
            deletePost={deletePost}
            setPostContent={setPostContent}
            key={post.id}
          />
        ))}
      </PostList>
    </Container>
  );
}
