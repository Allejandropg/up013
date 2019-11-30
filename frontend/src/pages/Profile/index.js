import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { passChangeInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  passwordO: Yup.string().required('A senha é obrigatória'),
  passwordN: Yup.string().required('A senha é obrigatória'),
  passwordNC: Yup.string().required('A senha é obrigatória'),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  console.tron.log(profile)
  function handleSubmit({ passwordO,passwordN,passwordNC }) {
      dispatch(passChangeInRequest({ passwordO,passwordN,passwordNC }));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="passwordO"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input
          name="passwordN"
          type="password"
          placeholder="Sua nova senha"
        />
        <Input
          name="passwordNC"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Alterar</button>
      </Form>
    </>
  );
}
