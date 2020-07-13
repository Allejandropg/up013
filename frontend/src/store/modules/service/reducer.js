import produce from 'immer';

const INITIAL_STATE = {
  type: null,
  price: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@service/STORE_SERVICE_SUCCESS': {
        draft.service = action.payload.service;
        break;
      }
      case '@service/UPDATE_SERVICE_SUCCESS': {
        draft.service = action.payload.service;
        break;
      }
      case '@service/DELETE_SERVICE_SUCCESS': {
        draft.service = action.payload.service;
        break;
      }
      case '@service/SERVICE_FAILURE': {
        draft.service = null;
        break;
      }
      default:
    }
  });
}
