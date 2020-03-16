import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '~/store/modules/auth/actions';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

//import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  username: Yup.string()
    .lowercase()
    .max(12)
    .trim('O username não pode conter espaços')
    .required('O username é obrigatório'),
  email: Yup.string()
    .email('Insira um e-email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Signup() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const handleSubmit = data => {
    const { username, email, password } = data;

    dispatch(signUpRequest(username, email, password));
  };
  return (
    <>
      {/* <img src={logo} alt="GoBarber" /> */}

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          placeholder="Seu username"
          spellCheck="false"
        />
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          spellCheck="false"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
