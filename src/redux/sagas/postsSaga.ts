import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../api";
import {
  getAllPosts,
  getSinglePost,
  getTrendPosts,
  setAllPosts,
  setLoading,
  setSinglePost,
  setTrendPosts,
} from "../reducers/postSlice";

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<any> = yield call(
    API.getSinglePost,
    action.payload
  );
  if (ok && data) {
    yield put(setSinglePost(data.title));
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setLoading(false));
}

function* getAllPostsWorker(action: PayloadAction<any>) {
  yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<any> = yield call(
    API.getAllPosts,
    action.payload
  );
  if (ok && data) {
    yield put(setAllPosts(data.pagination.data));
    console.log(setAllPosts(data.pagination.data));
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setLoading(false));
}

function* getTrendPostsWorker(action: PayloadAction<any>) {
  yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<any> = yield call(
    API.getTrendPosts,
    action.payload
  );
  if (ok && data) {
    yield put(setTrendPosts(data.pagination.data));
    console.log(setTrendPosts(data.pagination.data));
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setLoading(false));
}
export default function* postsSaga() {
  yield all([takeLatest(getSinglePost, getSinglePostWorker)]);
  yield all([takeLatest(getAllPosts, getAllPostsWorker)]);
  yield all([takeLatest(getTrendPosts, getTrendPostsWorker)]);
}
