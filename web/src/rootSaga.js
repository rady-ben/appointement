import { all, call } from "redux-saga/effects";
import authSaga from "./auth/saga";

export default function* rootSaga({ store }) {
  yield all([call(authSaga, { store })]);
}
