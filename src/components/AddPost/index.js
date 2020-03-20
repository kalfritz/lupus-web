import React, { useState, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { MdPhotoCamera, MdCancel } from 'react-icons/md';
import { format, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';
import { Container, Actions } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

export default function AddPost({ profile, setPosts }) {
  const [textareaText, setTextareaText] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadPictureStatus, setUploadPictureStatus] = useState(false);
  const ref = useRef();
  const handleTextarea = e => {
    setTextareaText(e.target.value);
  };
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
    newPost.editable = true;

    setPosts(prevPosts => [newPost, ...prevPosts]);
    setTextareaText('');
    setFile(null);
    setPreview(null);
    setUploadPictureStatus(false);
  };
  return (
    <Container>
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
            maxLength="100000"
            value={textareaText}
            name="content"
            type="text"
            placeholder="Why don't you share something fun?"
            spellCheck="false"
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
    </Container>
  );
}
