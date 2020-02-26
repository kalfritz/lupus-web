import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Form } from '@rocketseat/unform';
import { MdPhotoCamera, MdClose, MdDone } from 'react-icons/md';
import { Container, Actions } from './styles';

import api from '~/services/api';

export default function UpdateProfilePic({ avatar }) {
  const ref = useRef();
  const dispatch = useDispatch();

  const [file, setFile] = useState(avatar && avatar.id);
  const [preview, setPreview] = useState(avatar && avatar.url);

  const [cameraIconStatus, setCameraIconStatus] = useState(false);
  const [actionsStatus, setActionsStatus] = useState(false);

  const handleCancel = () => {
    setFile(avatar.id);
    setPreview(avatar.url);

    setActionsStatus(false);
  };

  const handleChange = async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);

    setActionsStatus(true);
  };
  const handleSubmit = () => {
    dispatch(updateProfileRequest({ avatar_id: file }));

    setActionsStatus(false);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label
          htmlFor="avatar"
          onMouseEnter={() => {
            setCameraIconStatus(true);
          }}
          onMouseLeave={() => {
            setCameraIconStatus(false);
          }}
        >
          <img src={preview} alt="profile" />

          {cameraIconStatus && <MdPhotoCamera size={24} color="#eee" />}

          <input
            type="file"
            id="avatar"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
          {actionsStatus && (
            <Actions
              onMouseEnter={() => {
                setCameraIconStatus(false);
              }}
              onMouseLeave={() => {
                setCameraIconStatus(true);
              }}
            >
              <button onClick={handleCancel}>
                <MdClose size={28} color="#f64c75" />
              </button>
              <button type="submit">
                <MdDone size={28} color="#00aa00" />
              </button>
            </Actions>
          )}
        </label>
      </Form>
    </Container>
  );
}
