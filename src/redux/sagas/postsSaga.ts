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
  getRelatedPosts,
  setRelatedPosts,
  getSearchedPosts,
  setSearchedPosts,
  getFavoritePosts,
  setFavoritePosts,
  addFavoritePosts,
  removeFavoritePosts,
} from "../reducers/postSlice";
import { FavoritePostsPayload, GetAllPostsPayload } from "../reducers/@types";
import {
  AddFavoritePostsResponse,
  AllPostsResponse,
  FavoritePostsResponse,
  SinglePostResponse,
} from "./@types";

function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<SinglePostResponse> = yield call(
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
function* getAllPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
  const {
    perPage,
    page,
    genre,
    release_date,
    released,
    language,
    country,
    order,
    user_score,
    runtime,
  } = action.payload;
  if (page === 1) yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getAllPosts,
    perPage,
    page,
    genre,
    order,
    user_score,
    runtime,
    release_date,
    released,
    language,
    country
  );
  if (ok && data) {
    yield put(
      setAllPosts({
        allPosts: data.pagination.data,
        postsCount: data.pagination.total,
      })
    );
  } else {
    console.warn("Error getting post", problem);
  }
  if (page === 1) yield put(setLoading(false));
}

function* getTrendPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
  const { perPage, page, release_date, released, country } = action.payload;
  if (page === 1) yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
    API.getTrendPosts,
    perPage,
    page,
    release_date,
    released,
    country
  );
  if (ok && data) {
    yield put(
      setTrendPosts({
        trendPosts: data.pagination.data,
        postsCount: data.pagination.total,
      })
    );
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setLoading(false));
}
function* getFavoritePostsWorker(action: PayloadAction<number>) {
  // yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<FavoritePostsResponse> = yield call(
    API.getFavoritePosts,
    action.payload
  );
  if (ok && data) {
    yield put(setFavoritePosts(data.items.data));
  } else {
    console.warn("Error getting post", problem);
  }
  // yield put(setLoading(false));
}
function* addFavoritePostsWorker(action: PayloadAction<FavoritePostsPayload>) {
  const { id, titleId } = action.payload;
  const { ok, data, problem }: ApiResponse<AddFavoritePostsResponse> =
    yield call(API.addFavoritePosts, id, titleId);
  if (ok && data) {
    yield put(setFavoritePosts(data.list.items));
  } else {
    console.warn("Error adding post", problem);
  }
}
function* removeFavoritePostsWorker(
  action: PayloadAction<FavoritePostsPayload>
) {
  const { id, titleId } = action.payload;
  const { ok, data, problem }: ApiResponse<AddFavoritePostsResponse> =
    yield call(API.removeFavoritePosts, id, titleId);
  if (ok && data) {
    yield put(setFavoritePosts(data.list.items));
  } else {
    console.warn("Error adding post", problem);
  }
}

function* getRelatedPostsWorker(action: PayloadAction<any>) {
  yield put(setLoading(true));
  const { ok, data, problem }: ApiResponse<any> = yield call(
    API.getRelatedPosts,
    action.payload
  );
  if (ok && data) {
    yield put(setRelatedPosts(data.titles));
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setLoading(false));
}

function* getSearchedPostsWorker(action: PayloadAction<any>) {
  yield put(setLoading(true));
  const { searchValue } = action.payload;
  const { ok, data, problem }: ApiResponse<any> = yield call(
    API.getSearchedPosts,
    action.payload,
    searchValue
  );
  if (ok && data) {
    yield put(setSearchedPosts(data.results));
  } else {
    console.warn("Error getting post", problem);
  }
  yield put(setLoading(false));
}

export default function* postsSaga() {
  yield all([
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getAllPosts, getAllPostsWorker),
    takeLatest(getTrendPosts, getTrendPostsWorker),
    takeLatest(getRelatedPosts, getRelatedPostsWorker),
    takeLatest(getSearchedPosts, getSearchedPostsWorker),
    takeLatest(getFavoritePosts, getFavoritePostsWorker),
    takeLatest(addFavoritePosts, addFavoritePostsWorker),
    takeLatest(removeFavoritePosts, removeFavoritePostsWorker),
  ]);
}
