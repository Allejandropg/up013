import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>Resete sua senha</h1>
        <p>Entre com o e-mail que você usa no GoBarber.</p>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <button type="submit">Continuar</button>
        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}
