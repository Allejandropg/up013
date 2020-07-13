import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import {
  storeUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  userFailure,
} from './actions';

export function* storeUser({ payload }) {
  try {
    const { name, email, phone, birthday, provider } = payload.data;
    console.tron.log('responseSagaUser', payload.data);
    const response = yield call(api.post, 'usuarios', {
      name,
      email,
      phone,
      birthday,
      provider,
      is_active: true,
    });

    toast.success('Seviço cadastrado com sucesso');

    yield put(storeUserSuccess(response.data));

    history.push(`/users/${response.data.id}`);
  } catch (err) {
    toast.error(`Erro ao cadastra seviços: ${err}`);
    yield put(userFailure());
  }
}

export function* updateUser({ payload }) {
  try {
    const { id, name, email, phone, birthday, provider } = payload.data;
    const response = yield call(api.put, `usuarios/${id}`, {
      name,
      email,
      phone,
      birthday,
      provider,
      is_active: true,
    });
    console.tron.log('responseSagaUser', payload.data, response);
    // console.log('responseSagaUser', profile, response);

    toast.success('Seviço atualizado com sucesso');

    yield put(updateUserSuccess(response.data));
  } catch (err) {
    toast.error(`Erro ao atualizar seviço: ${err}`);
    yield put(userFailure());
  }
}

export function* deleteUser({ payload }) {
  try {
    const { id } = payload.data;
    const response = yield call(api.delete, `usuarios/${id}`);
    // console.log('responseSagaUser', profile,response);

    toast.success('Perfil deletado com sucesso');

    yield put(deleteUserSuccess(response.data));

    history.push('/users/');
  } catch (err) {
    toast.error(`Erro ao deletar seviço: ${err}`);
    yield put(userFailure());
  }
}

export default all([
  takeLatest('@user/STORE_USER_REQUEST', storeUser),
  takeLatest('@user/UPDATE_USER_REQUEST', updateUser),
  takeLatest('@user/DELETE_USER_REQUEST', deleteUser),
]);
