import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";


export function loginAction(user: any) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  };
}

export function logoutAction() {
  return {
    type: USER_LOGGED_OUT
  };
}
