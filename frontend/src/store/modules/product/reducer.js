import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  description: '',
  stock: 0,
  validity: '',
  price: 0,
  is_active: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@product/STORE_PRODUCT_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      case '@product/UPDATE_PRODUCT_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      case '@product/DELETE_PRODUCT_SUCCESS': {
        draft.product = action.payload.product;
        break;
      }
      case '@product/PRODUCT_FAILURE': {
        draft.product = null;
        break;
      }
      default:
    }
  });
}
