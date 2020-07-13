import { all } from 'redux-saga/effects';

import auth from './auth/saga';
import user from './user/saga';
import users from './users/saga';
import product from './product/saga';
import service from './service/saga';

export default function* rootSaga() {
  return yield all([auth, user, users, product, service]);
}
