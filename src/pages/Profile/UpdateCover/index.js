import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateCoverRequest } from '~/store/modules/user/actions';
import { Form } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';
import { Container, Actions } from './styles';

import api from '~/services/api';

export default function UpdateCover({ cover }) {
  const ref = useRef();
  const dispatch = useDispatch();

  const [file, setFile] = useState(cover && cover.id);
  const [preview, setPreview] = useState(cover && cover.url);

  const [cameraIconStatus, setCameraIconStatus] = useState(false);
  const [actionsStatus, setActionsStatus] = useState(false);

  const handleCancel = () => {
    setFile(cover.id);
    setPreview(cover.url);

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
    dispatch(updateCoverRequest({ cover_id: file }));

    setActionsStatus(false);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label
          htmlFor="cover"
          onMouseEnter={() => {
            setCameraIconStatus(true);
          }}
          onMouseLeave={() => {
            setCameraIconStatus(false);
          }}
        >
          <img src={preview} alt=""></img>

          {cameraIconStatus && <MdPhotoCamera size={24} color="#eee" />}

          <input
            type="file"
            id="cover"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
            spellCheck="false"
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
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Save Changes</button>
            </Actions>
          )}
        </label>
      </Form>
    </Container>
  );
}
