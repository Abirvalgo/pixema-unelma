import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import PagesContainer from "./PagesContainer";
import SelectedMovie from "./SelectedMovie";

export enum RoutesList {
  Home = "/",
  Trends = "/trends",
  Favourites = "/favourites",
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
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />}></Route>
          <Route path={RoutesList.Test} element={<Test />}></Route>
          <Route
            path={RoutesList.SelectedMovie}
            element={<SelectedMovie />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
