import { PayloadAction } from "@reduxjs/toolkit";
import API from "../api";
import { SignInUserPayload, SignUpUserPayload } from "../reducers/@types";
import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getFavoritesId,
  getUserInfo,
  logoutUser,
  setFavoritesId,
  setLoggedIn,
  setUserInfo,
  signInUser,
  signUpUser,
} from "../reducers/authSlice";
import {
  GetFavoritesIdResponse,
  GetUserInfo,
  SignInUserResponse,
  SignUpUserResponse,
} from "./@types";
import { ACCESS_TOKEN } from "../../utils/constants";
import callCheckingAuth from "./callCheckingAuth";

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {
  const { data, callback } = action.payload;
  const {
    ok,
    problem,
    data: responseData,
  }: ApiResponse<SignUpUserResponse> = yield call(API.signUpUser, data);
  if (ok && responseData) {
    //создание листа favorites при создании аккаунта
    localStorage.setItem(
      ACCESS_TOKEN,
      responseData?.boostrapData.user.access_token
    );
    yield call(API.createList);
    localStorage.removeItem(ACCESS_TOKEN);
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
    console.warn("Error activating user", problem);
  }
}

function* getUserInfoWorker() {
  const { ok, problem, data }: ApiResponse<GetUserInfo> =
    yield callCheckingAuth(API.getUserInfo);
  if (ok && data) {
    yield put(setUserInfo(data));
  } else {
    console.warn("Error getting user info ", problem);
  }
}

function* getFavoritesIdWorker() {
  const { ok, problem, data }: ApiResponse<GetFavoritesIdResponse> = yield call(
    API.getFavoritesId
  );
  if (ok && data) {
    yield put(setFavoritesId(data));
  } else {
    console.warn("Error getting favorites list id ", problem);
  }
}

function* logoutUserWorker() {
  localStorage.removeItem(ACCESS_TOKEN);
  yield put(setUserInfo(null));
  yield put(setLoggedIn(false));
}
export default function* authSaga() {
  yield all([
    takeLatest(signUpUser, signUpUserWorker),
    takeLatest(signInUser, signInUserWorker),
    takeLatest(logoutUser, logoutUserWorker),
    takeLatest(getUserInfo, getUserInfoWorker),
    takeLatest(getFavoritesId, getFavoritesIdWorker),
  ]);
}
