import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';

import api from '~/services/api';

import {
  storeProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
  productFailure,
} from './actions';

export function* storeProduct({ payload }) {
  try {
    const { name, description, stock, validity, price } = payload.data;
    const response = yield call(api.post, 'products', {
      name,
      description,
      stock,
      validity,
      price,
      is_active: true,
    });
    console.tron.log('responseSagaUser', payload.data, response);

    toast.success('Produto cadastrado com sucesso');

    yield put(storeProductSuccess(response.data));

    history.push(`/products/${response.data.id}`);
  } catch (err) {
    toast.error(`Erro ao cadastra produtos: ${err}`);
    yield put(productFailure());
  }
}

export function* updateProduct({ payload }) {
  try {
    const { id, name, description, stock, validity, price } = payload.data;
    const response = yield call(api.put, `products/${id}`, {
      name,
      description,
      stock,
      validity,
      price,
      is_active: true,
    });
    console.tron.log('responseSagaUser', payload.data, response);
    // console.log('responseSagaUser', profile,response);

    toast.success('Produto atualizado com sucesso');

    yield put(updateProductSuccess(response.data));
  } catch (err) {
    toast.error(`Erro ao atualizar produto: ${err}`);
    yield put(productFailure());
  }
}

export function* deleteProduct({ payload }) {
  try {
    const { id } = payload.data;
    const response = yield call(api.delete, `products/${id}`);
    // console.log('responseSagaUser', profile,response);

    toast.success('Perfil deletado com sucesso');

    yield put(deleteProductSuccess(response.data));

    history.push('/products/');
  } catch (err) {
    toast.error(`Erro ao deletar produto: ${err}`);
    yield put(productFailure());
  }
}

export default all([
  takeLatest('@product/STORE_PRODUCT_REQUEST', storeProduct),
  takeLatest('@product/UPDATE_PRODUCT_REQUEST', updateProduct),
  takeLatest('@product/DELETE_PRODUCT_REQUEST', deleteProduct),
]);
