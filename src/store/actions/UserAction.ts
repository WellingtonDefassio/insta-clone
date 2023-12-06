import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";
import { ActionType, LoginType } from "../../types/Types";

export function loginAction(user: LoginType) : ActionType {
  return {
    type: USER_LOGGED_IN,
    payload: user
  };
}

export function logoutAction(): ActionType {
  return {
    type: USER_LOGGED_OUT
  };
}
