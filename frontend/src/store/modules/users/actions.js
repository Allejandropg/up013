export function storeUserResquest(data) {
  return {
    type: '@user/STORE_USER_REQUEST',
    payload: { data },
  };
}

export function storeUserSuccess(user) {
  return {
    type: '@user/STORE_USER_SUCCESS',
    payload: { user },
  };
}

export function updateUserResquest(data) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: { data },
  };
}

export function updateUserSuccess(user) {
  return {
    type: '@user/UPDATE_USER_SUCCESS',
    payload: { user },
  };
}

export function deleteUserResquest(data) {
  return {
    type: '@user/DELETE_USER_REQUEST',
    payload: { data },
  };
}

export function deleteUserSuccess(user) {
  return {
    type: '@user/DELETE_USER_SUCCESS',
    payload: { user },
  };
}

export function userFailure() {
  return {
    type: '@user/USER_FAILURE',
  };
}
