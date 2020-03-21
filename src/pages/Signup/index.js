import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  username: Yup.string()
    .trim('Username cannot have empty spaces')
    .max(12)
    .required('Username is required'),
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characteres')
    .required('Password is required'),
});

export default function Signup() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const handleSubmit = data => {
    const castData = schema.cast(data);
    let { username, email, password } = castData;
    username = username
      .toLowerCase()
      .split(' ')
      .join('');
    dispatch(signUpRequest(username, email, password));
  };
  return (
    <>
      <header>Luppus</header>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          placeholder="Your username"
          spellCheck="false"
        />
        <Input
          name="email"
          type="email"
          placeholder="Your e-mail"
          spellCheck="false"
        />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
        <Link to="/login">Already have an account?</Link>
      </Form>
    </>
  );
}
