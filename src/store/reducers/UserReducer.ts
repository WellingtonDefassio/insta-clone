import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes";
import { ActionType } from "../../types/Types";

const initialState = {
  name: "Temp name",
  email: null
};

export default function reducer(state = initialState, action: ActionType) {
  //TODO colocar o estado da pagina profile x login nesse fluxo!
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        email: action.payload.email
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
