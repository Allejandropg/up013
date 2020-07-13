import produce from 'immer';

const INITIAL_STATE = {
  type: null,
  price: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/STORE_USER_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@user/UPDATE_USER_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@user/DELETE_USER_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@user/USER_FAILURE': {
        draft.user = null;
        break;
      }
      default:
    }
  });
}
