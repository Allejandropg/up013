import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateProfileResquest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import BackgroundInternal from '~/components/BackgroundInternal';
import DateInput from '~/components/DateInput';
import {
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubTitle,
  SubmitButton,
  LogoutLink,
  LogoutLinkText,
} from './styles';

export default function Profile() {
  const [date, setDate] = useState(new Date());
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileResquest({
        email,
        name,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleAusencia() {
    dispatch(
      updateProfileResquest({
        email,
        name,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <BackgroundInternal>
      <Container>
        <Title>MEU PERFIL</Title>
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
          />
          <Separator />
          <SubTitle>Ausência:</SubTitle>
          <DateInput date={date} onChange={setDate} />
          <SubmitButton onPress={handleSubmit}>MARCAR AUSÊNCIA</SubmitButton>
          <Separator />
          <SubTitle>Trocar senha:</SubTitle>
          <FormInput
            icon="lock-outline"
            placeholder="Sua senha atual"
            value={oldPassword}
            onChangeText={setOldPassword}
            secureTextEntry
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Nova senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirmar senha nova"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton onPress={handleSubmit}>ATUALIZAR SENHA</SubmitButton>
          <LogoutLink onPress={handleSignOut}>
            <LogoutLinkText>Sair do UP013_BARBER</LogoutLinkText>
          </LogoutLink>
        </Form>
      </Container>
    </BackgroundInternal>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
