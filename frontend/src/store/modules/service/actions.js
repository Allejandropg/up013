export function storeServiceResquest(data) {
  return {
    type: '@service/STORE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function storeServiceSuccess(service) {
  return {
    type: '@service/STORE_SERVICE_SUCCESS',
    payload: { service },
  };
}

export function updateServiceResquest(data) {
  return {
    type: '@service/UPDATE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function updateServiceSuccess(service) {
  return {
    type: '@service/UPDATE_SERVICE_SUCCESS',
    payload: { service },
  };
}

export function deleteServiceResquest(data) {
  return {
    type: '@service/DELETE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function deleteServiceSuccess(service) {
  return {
    type: '@service/DELETE_SERVICE_SUCCESS',
    payload: { service },
  };
}

export function serviceFailure() {
  return {
    type: '@service/SERVICE_FAILURE',
  };
}
