import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";

const reducers = combineReducers({
  user: userReducer
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig
