/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import faker from 'faker';
import { signUpRequest } from '~/store/modules/auth/actions';
import { Logo } from '../Signin/styles';
import logo from '~/assets/socihub-logo.svg';

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
  const handleGenAccount = () => {
    const genUsername = faker.name.firstName().toLowerCase();
    const genEmail = faker.internet.email();
    const genPassword = faker.internet.password();
    dispatch(signUpRequest(genUsername, genEmail, genPassword));
  };
  const handleSubmit = data => {
    const castData = schema.cast(data);
    const { email, password } = castData;
    const username = castData.username
      .toLowerCase()
      .split(' ')
      .join('');
    dispatch(signUpRequest(username, email, password));
  };
  return (
    <>
      <Logo src={logo} alt="SociHub" />
      <header>SociHub</header>
      <h3>Connect with your friends!</h3>
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
      <div>
        <p>
          <span>⚡</span>Just testing the app?<span>⚡</span>
        </p>
        <button onClick={handleGenAccount} type="button">
          <span>✨</span>Generate a temporary account for me<span>✨</span>
        </button>
      </div>
    </>
  );
}
