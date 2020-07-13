import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  signInRequest,
  signInRegisterRequest,
  signInForgotRequest,
} from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const { token } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    const pathName = window.location.pathname.split('/');
    if (pathName[1] === 'forgot') {
      console.log(email, password, token);
      dispatch(signInForgotRequest(email, password, token));
    } else if (!token) {
      dispatch(signInRequest(email, password));
    } else {
      dispatch(signInRegisterRequest(email, password, token));
    }
  }

  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value="master@up13.com"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
          value="123456"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
        <Link to="/forgot-password">
          <small>Esqueci minha senha</small>
        </Link>
      </Form>
    </>
  );
}
