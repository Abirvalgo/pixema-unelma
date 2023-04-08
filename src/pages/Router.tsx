import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

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
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Home />}></Route>
        <Route path={RoutesList.Test} element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
