export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signInRegisterRequest(email, password, token) {
  return {
    type: '@auth/SIGN_IN_REGISTER_REQUEST',
    payload: { email, password, token },
  };
}

export function signInRegisterSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_REGISTER_SUCCESS',
    payload: { token, user },
  };
}

export function signInForgotRequest(email, password, token) {
  return {
    type: '@auth/SIGN_IN_FORGOT_REQUEST',
    payload: { email, password, token },
  };
}

export function signInForgotSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_FORGOT_SUCCESS',
    payload: { token, user },
  };
}

export function passChangeInRequest(passwordO,passwordN,passwordNC) {
  return {
    type: '@auth/PASS_IN_REQUEST',
    payload: { passwordO, passwordN, passwordNC },
  };
}
export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function sendNewPass(email){
  return {
    type:'@auth/SEND_NEW_PASS',
    payload: { email },
  };
}
