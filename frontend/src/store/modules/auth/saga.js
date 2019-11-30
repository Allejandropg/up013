import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess,signInRegisterSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.is_active) {
      toast.error('usuário não foi ativado, cheque seu e-mail.');
      yield put(signFailure());
      return;
    }
    if (!user.provider) {
      toast.error('usuário não é prestador');
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}
export function* signInRegister({ payload }) {
  try {
    const { email, password, token } = payload;

    const response = yield call(api.post, 'sessions/token', {
      email,
      password,
      token
    });

    const { user } = response.data;

    if (!user.provider) {
      toast.error('usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInRegisterSuccess(token, user));

    history.push('/profile');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    // console.tron.log(payload);
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro, verifique seus dados.');
    yield put(signFailure());
  }
}

export function* changePass({ payload }) {
  try {
    const {  passwordO, passwordN, passwordNC } = payload;
    if(passwordO===passwordN || passwordN!== passwordNC){
      toast.error('Informações incorretas.');
      yield put(signFailure());
      return
    }
    /*yield call(api.put, 'users', {
      name,
      email,
      password,
      provider: true,
    });*/

    history.push('/');
  } catch (error) {
    toast.error('Informações incorretas.');
    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_REGISTER_REQUEST', signInRegister),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
