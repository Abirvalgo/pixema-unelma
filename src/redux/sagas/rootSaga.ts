import { all } from "redux-saga/effects";
import postsSaga from "./postsSaga";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield all([postsSaga(), authSaga()]);
}
