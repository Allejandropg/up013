import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import {
  storeServiceSuccess,
  updateServiceSuccess,
  deleteServiceSuccess,
  serviceFailure,
} from './actions';

export function* storeService({ payload }) {
  try {
    const { type, price } = payload.data;
    const response = yield call(api.post, 'services', {
      type,
      price,
      is_active: true,
    });
    // console.tron.log('responseSagaUser', payload.data, response);

    toast.success('Seviço cadastrado com sucesso');

    yield put(storeServiceSuccess(response.data));

    history.push(`/services/${response.data.id}`);
  } catch (err) {
    toast.error(`Erro ao cadastra seviços: ${err}`);
    yield put(serviceFailure());
  }
}

export function* updateService({ payload }) {
  try {
    const { id, type, price } = payload.data;
    const response = yield call(api.put, `services/${id}`, {
      type,
      price,
      is_active: true,
    });
    // console.tron.log('responseSagaUser', payload.data, response);
    // console.log('responseSagaUser', profile,response);

    toast.success('Seviço atualizado com sucesso');

    yield put(updateServiceSuccess(response.data));
  } catch (err) {
    toast.error(`Erro ao atualizar seviço: ${err}`);
    yield put(serviceFailure());
  }
}

export function* deleteService({ payload }) {
  try {
    const { id } = payload.data;
    const response = yield call(api.delete, `services/${id}`);
    // console.log('responseSagaUser', profile,response);

    toast.success('Perfil deletado com sucesso');

    yield put(deleteServiceSuccess(response.data));

    history.push('/services/');
  } catch (err) {
    toast.error(`Erro ao deletar seviço: ${err}`);
    yield put(serviceFailure());
  }
}

export default all([
  takeLatest('@service/STORE_SERVICE_REQUEST', storeService),
  takeLatest('@service/UPDATE_SERVICE_REQUEST', updateService),
  takeLatest('@service/DELETE_SERVICE_REQUEST', deleteService),
]);
