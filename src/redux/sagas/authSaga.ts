import { PayloadAction } from "@reduxjs/toolkit";
import API from "../api";
import { SignInUserPayload, SignUpUserPayload } from "../reducers/@types";
import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getUserInfo,
  logoutUser,
  setLoggedIn,
  setUserInfo,
  signInUser,
  signUpUser,
} from "../reducers/authSlice";
import { GetUserInfo, SignInUserResponse, SignUpUserResponse } from "./@types";
import { ACCESS_TOKEN } from "../../utils/constants";

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {
  const { data, callback } = action.payload;
  const { ok, problem }: ApiResponse<SignUpUserResponse> = yield call(
    API.signUpUser,
    data
  );
  if (ok) {
    callback();
  } else {
    console.warn("Error sign up user", problem);
  }
}

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  const { data, callback } = action.payload;
  const {
    ok,
    problem,
    data: responseData,
  }: ApiResponse<SignInUserResponse> = yield call(API.signInUser, data);
  if (ok && responseData) {
    localStorage.setItem(ACCESS_TOKEN, responseData?.user.access_token);
    yield put(setLoggedIn(true));
    callback();
  } else {
    console.warn("Error activate user", problem);
  }
}

function* getUserInfoWorker() {
  const { ok, problem, data }: ApiResponse<GetUserInfo> = yield call(
    API.getUserInfo
  );
  if (ok && data) {
    yield put(setUserInfo(data));
  } else {
    console.warn("Error getting user info ", problem);
  }
}
function* logoutUserWorker() {
  localStorage.removeItem(ACCESS_TOKEN);
  yield put(setLoggedIn(false));
}
export default function* authSaga() {
  yield all([
    takeLatest(signUpUser, signUpUserWorker),
    takeLatest(signInUser, signInUserWorker),
    takeLatest(logoutUser, logoutUserWorker),
    takeLatest(getUserInfo, getUserInfoWorker),
  ]);
}
