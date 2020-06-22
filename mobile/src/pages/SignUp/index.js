import React, { useRef, useState } from 'react';
// import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signUpRequest } from '~/store/modules/auth/actions';

import BackgroundExternal from '~/components/BackgroundExternal';

// import logo from '~/assets/logo.png';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const birthdayRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
    navigation.navigate('SignIn');
  }

  return (
    <BackgroundExternal>
      <Container>
        <Title>Cadastro</Title>
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Nome Completo"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <FormInput
            icon="mail-outline"
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => birthdayRef.current.focus()}
          />
          <FormInput
            icon="date-range"
            placeholder="E-mail"
            value={birthday}
            onChangeText={setBirthday}
            keyboardType="date"
            autoCorrect={false}
            autoCapitalize="none"
            ref={birthdayRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Crie uma senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            CRIAR CONTA
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já possuo cadastro</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundExternal>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
