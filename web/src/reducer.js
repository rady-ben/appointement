import { combineReducers } from "redux";
import auth from "./auth/duck";

const RootReducer = combineReducers({
  auth
});

export default RootReducer;
