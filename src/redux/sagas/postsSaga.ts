import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";
import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../api";
import {
  getAllPosts,
  getSinglePost,
  setAllPosts,
  setSinglePost,
} from "../reducers/postSlice";

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem }: ApiResponse<any> = yield call(
    API.getSinglePost,
    action.payload
  );
  if (ok && data) {
    yield put(setSinglePost(data.title));
  } else {
    console.warn("Error getting post", problem);
  }
}

function* getAllPostsWorker(action: PayloadAction<any>) {
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
}
export default function* postsSaga() {
  yield all([takeLatest(getSinglePost, getSinglePostWorker)]);
  yield all([takeLatest(getAllPosts, getAllPostsWorker)]);
}
