import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

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
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
