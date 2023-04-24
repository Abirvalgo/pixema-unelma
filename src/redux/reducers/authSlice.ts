import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { SignInUserPayload, SignUpUserPayload } from "./@types";
import { ACCESS_TOKEN } from "../../utils/constants";
import { GetUserInfo, SignInUserResponse, UserLogin } from "../sagas/@types";

type AuthType = {
  isLoggedIn: boolean;
  userInfo: GetUserInfo | null;
};
const initialState: AuthType = {
  isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN),
  userInfo: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => {},
    signInUser: (_, __: PayloadAction<SignInUserPayload>) => {},
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    // setUserInfo: (state, action: PayloadAction<UserLogin>) => {
    //   state.userInfo = action.payload;
    // },
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
} = authSlice.actions;
export default authSlice.reducer;

export const AuthSelectors = {
  getLoggedIn: (state: RootState) => state.auth.isLoggedIn,
  getUserInfo: (state: RootState) => state.auth.userInfo,
};
