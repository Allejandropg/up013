import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signInRequest } from '~/store/modules/auth/actions';

import BackgroundExternal from '~/components/BackgroundExternal';

import {
  Container,
  Title,
  Form,
  FormInput,
  ForgotLink,
  ForgotLinkText,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passWordRef = useRef();
  const [email, setEmail] = useState('yuriiruyov@gmail.com');
  const [password, setPassword] = useState('123456');
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <BackgroundExternal>
      <Container>
        <Title>Login</Title>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passWordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passWordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <ForgotLink onPress={() => navigation.navigate('Forgot')}>
            <ForgotLinkText>Esqueci a senha</ForgotLinkText>
          </ForgotLink>
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Não tem cadastro?</SignLinkText>
          <SignLinkText>Crie sua conta</SignLinkText>
        </SignLink>
      </Container>
    </BackgroundExternal>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
