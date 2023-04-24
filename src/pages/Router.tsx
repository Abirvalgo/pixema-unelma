import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import PagesContainer from "./PagesContainer";
import SelectedMovie from "./SelectedMovie";
import SignIn from "./FormContainer/SignIn";
import SignUp from "./FormContainer/SignUp";
import ResetPassword from "./FormContainer/ResetPassword";
import Trends from "./Trends";
import Favorites from "./Favorites";
import Settings from "./Settings";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, getUserInfo } from "../redux/reducers/authSlice";

export enum RoutesList {
  Home = "/",
  Trends = "/trends",
  Favorites = "/favorites",
  Settings = "/settings",
  Search = "/search",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Confirm = "/activate/",
  Success = "/sign-up/success",
  ResetPassword = "/reset-password",
  NewPassword = "/new-password",
  Default = "*",
  Test = "/test",
  SelectedMovie = "/titles/:id",
  Account = "/",
}

const Router = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
    }
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />}></Route>
          <Route path={RoutesList.Trends} element={<Trends />}></Route>
          <Route path={RoutesList.Favorites} element={<Favorites />}></Route>
          <Route path={RoutesList.Settings} element={<Settings />}></Route>
          <Route path={RoutesList.Test} element={<Test />}></Route>
          <Route
            path={RoutesList.SelectedMovie}
            element={<SelectedMovie />}
          ></Route>
        </Route>
        <Route path={RoutesList.SignIn} element={<SignIn />}></Route>
        <Route path={RoutesList.SignUp} element={<SignUp />}></Route>
        <Route
          path={RoutesList.ResetPassword}
          element={<ResetPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
