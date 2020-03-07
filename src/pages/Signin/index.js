import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
//import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6)
    .required('A senha é obrigatória'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const handleSumit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };
  return (
    <>
      {/* <img src={logo} alt="GoBarber" /> */}

      <Form schema={schema} onSubmit={handleSumit}>
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          spellcheck="false"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
