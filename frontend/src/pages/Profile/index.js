import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileResquest } from '~/store/modules/user/actions';
import PassInput from './PassInput';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  // const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmite(data) {
    dispatch(updateProfileResquest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmite}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de email" />

        <hr />
        <p>
          Sua senha deve ter no mínio 6 caracteres e conter pelo menos um
          caractér especial, um número, uma letra maiscula e uma minuscula para
          ser considerada forte.
        </p>
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <PassInput
          value={password}
          handleChanges={e => {
            // console.log(e.target.value);
            return setPassword(e.target.value);
          }}
          placeholder="Sua nova senha"
          name="password"
        />
        <PassInput
          value={confirmPassword}
          handleChanges={e => {
            // console.log(e.target.value);
            return setConfirmPassword(e.target.value);
          }}
          placeholder="Confirm sua senha"
          name="confirmPassword"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do UP013
      </button>
    </Container>
  );
}
