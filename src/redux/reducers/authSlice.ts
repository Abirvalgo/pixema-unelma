import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SignInUserPayload, SignUpUserPayload } from "./@types";
import { ACCESS_TOKEN } from "../../utils/constants";
import {
  FavIdDataType,
  GetFavoritesIdResponse,
  GetUserInfo,
} from "../sagas/@types";

type AuthType = {
  isLoggedIn: boolean;
  userInfo: GetUserInfo | null;
  favoritesId: number | null;
};
const initialState: AuthType = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN),
  userInfo: null,
  favoritesId: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => {},
    signInUser: (_, __: PayloadAction<SignInUserPayload>) => {},
    getFavoritesId: (_, __: PayloadAction<undefined>) => {},
    setFavoritesId: (state, action: PayloadAction<GetFavoritesIdResponse>) => {
      state.favoritesId = action.payload.pagination.data.filter(
        (item: FavIdDataType) => item.name === "favorites"
      )[0].id;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    getUserInfo: (_, __: PayloadAction<undefined>) => {},
    setUserInfo: (state, action: PayloadAction<GetUserInfo | null>) => {
      state.userInfo = action.payload;
    },
    logoutUser: (_, __: PayloadAction<undefined>) => {},
  },
});

export const {
  signUpUser,
  signInUser,
  setLoggedIn,
  setUserInfo,
  getUserInfo,
  logoutUser,
  getFavoritesId,
  setFavoritesId,
} = authSlice.actions;
export default authSlice.reducer;

export const AuthSelectors = {
  getLoggedIn: (state: RootState) => state.auth.isLoggedIn,
  getUserInfo: (state: RootState) => state.auth.userInfo,
  getFavoritesId: (state: RootState) => state.auth.favoritesId,
};
