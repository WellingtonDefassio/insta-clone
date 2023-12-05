import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";


export function login(user: any) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  };
}

export function logout() {
  return {
    type: USER_LOGGED_OUT
  };
}
