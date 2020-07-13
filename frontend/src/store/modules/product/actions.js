export function storeProductResquest(data) {
  return {
    type: '@product/STORE_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function storeProductSuccess(product) {
  return {
    type: '@product/STORE_PRODUCT_SUCCESS',
    payload: { product },
  };
}

export function updateProductResquest(data) {
  return {
    type: '@product/UPDATE_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function updateProductSuccess(product) {
  return {
    type: '@product/UPDATE_PRODUCT_SUCCESS',
    payload: { product },
  };
}

export function deleteProductResquest(data) {
  return {
    type: '@product/DELETE_PRODUCT_REQUEST',
    payload: { data },
  };
}

export function deleteProductSuccess(product) {
  return {
    type: '@product/DELETE_PRODUCT_SUCCESS',
    payload: { product },
  };
}

export function productFailure() {
  return {
    type: '@product/PRODUCT_FAILURE',
  };
}
