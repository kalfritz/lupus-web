import React, { useState, forwardRef } from 'react';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import { toast } from 'react-toastify';

import { Container, Form, TextareaAutosizeStyled } from './styles';

import standardProfilePic from '~/assets/ninja.jpg';

const schema = Yup.object().shape({
  comment: Yup.string()
    .min(1)
    .required(''),
});

export default forwardRef(({ post, fixed = false }, ref) => {
  const profile = useSelector(state => state.user.profile);
  const [comment, setComment] = useState('');
  const handleInput = e => {
    setComment(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      console.log(comment);
      const response = await api.post(
        `posts/${post.id}/op/${post.user_id}/comments`,
        {
          content: comment,
        }
      );
      setComment('');
      response.data.err && toast.error(response.data.err);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container ref={ref} fixed={fixed}>
      <img
        src={profile.avatar ? profile.avatar.url : standardProfilePic}
        alt="user"
      />
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
          }
        }}
      >
        <TextareaAutosizeStyled
          minRows={1}
          maxRows={20}
          name="comment"
          value={comment}
          maxLength="50000"
          onChange={handleInput}
          aria-label="comment"
          type="text"
          placeholder="Write a comment"
          spellCheck="false"
        />
        <input type="submit" />
      </Form>
    </Container>
  );
});
