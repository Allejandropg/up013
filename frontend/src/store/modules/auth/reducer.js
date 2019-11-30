import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        draft.is_active = action.payload.user.is_active;
        break;
      }
      case '@auth/SIGN_IN_REGISTER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_REGISTER_SUCCESS': {
        draft.loading = false;
        draft.token = action.payload.token;
        draft.signed = false;
        draft.is_active = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
