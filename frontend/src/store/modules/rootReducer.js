import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer'; // prefil do master
import users from './users/reducer'; // perfil dos barbeiros/clientes
import product from './product/reducer';
import service from './service/reducer';

export default combineReducers({
  auth,
  user,
  users,
  product,
  service,
});
