import React, { forwardRef } from 'react';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { Container } from './styles';

const schema = Yup.object().shape({
  comment: Yup.string().required(''),
});

export default forwardRef(({ post, fixed = false }, ref) => {
  const profile = useSelector(state => state.user.profile);
  const handleSubmit = async ({ comment }, { resetForm }) => {
    const response = await api.post(`posts/${post.id}/comments`, {
      content: comment,
    });

    response.data.content && resetForm();
    response.data.err && toast.error(response.data.err);
  };
  return (
    <Container ref={ref} fixed={fixed}>
      <img
        src={
          profile.avatar
            ? profile.avatar.url
            : 'https://api.adorable.io/avatars/50/abott@adorable.png'
        }
        alt={profile.name || profile.username}
      />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="comment"
          aria-label="comment"
          type="text"
          placeholder="Write a comment"
        />
        <button type="submit"></button>
      </Form>
    </Container>
  );
});
