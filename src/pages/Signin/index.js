import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import faker from 'faker'

import { signInRequest, signUpRequest } from '~/store/modules/auth/actions';
//import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const handleSumit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };
  const handleGenAccount = () => {
    const genUsername = faker.name.firstName().toLowerCase()
    const genEmail = faker.internet.email()
    const genPassword = faker.internet.password()
    dispatch(signUpRequest(genUsername, genEmail, genPassword));
  };
  return (
    <>
      <header>Luppus</header>
      <Form schema={schema} onSubmit={handleSumit}>
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

        <button type="submit">{loading ? 'Signing in...' : 'Sign In'}</button>
        <Link to="/register">Create free account</Link>

        

      </Form>
      <div>
          <p>Just testing the app?</p>
          <button onClick={handleGenAccount}>
            Generate a new temporary account
          </button>
        </div>

    </>
  );
}
