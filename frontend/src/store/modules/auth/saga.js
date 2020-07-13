import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signInRegisterSuccess, signFailure } from './actions';

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

    if (!user.provider && !user.master) {
      toast.error('usuário não é autorizado');
      yield put(signFailure());
      return;
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    toast.error(`Falha na autenticação, verifique seus dados.${error}`);
    yield put(signFailure());
  }
}

export function* signInRegister({ payload }) {
  try {
    let { email, password, token } = payload;

    const response = yield call(api.post, 'sessions/token', {
      email,
      password,
      token,
    });
    const { user } = response.data;
    token = response.data.token;

    if (!user.provider) {
      toast.error('usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInRegisterSuccess(token, user));

    try {
      const profile = {
        name: user.name,
        email,
        is_active: true,
      };
      yield call(api.put, 'users', profile);
    } catch (err) {
      toast.error('Falha na autenticação, tente novamente mais tarde.');
    }
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

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export function* sendNewPass({ payload }) {
  try {
    const { email } = payload;
    console.tron.log('sendNewPass', payload);
    yield call(api.post, '/users/forgotpassword/', {
      email,
    });

    history.push('/');
  } catch (error) {
    toast.error(`Falha no envio, tente novamente mais tarde: ${error}`);
    yield put(signFailure());
  }
}

export function* signInForgotRequest({ payload }) {
  try {
    let { email, password, token } = payload;
    console.tron.log('forgotSaga', payload);
    const response = yield call(api.put, '/sessions/updateForgot/', {
      email,
      password,
      token,
    });

    const { user } = response.data;
    token = response.data.token;

    if (!user.provider) {
      toast.error('usuário não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInRegisterSuccess(token, user));

    try {
      const profile = {
        name: user.name,
        email,
        is_active: true,
      };
      yield call(api.put, 'users', profile);
    } catch (err) {}
    history.push('/profile');
  } catch (error) {
    toast.error(`Falha na autenticação, verifique seus dados.${error}`);
    yield put(signFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_IN_REGISTER_REQUEST', signInRegister),
  takeLatest('@auth/SIGN_IN_FORGOT_REQUEST', signInForgotRequest),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SEND_NEW_PASS', sendNewPass),
]);
