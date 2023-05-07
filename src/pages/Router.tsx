import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PagesContainer from "./PagesContainer";
import SelectedMovie from "./SelectedMovie";
import SignIn from "./FormContainer/SignIn";
import SignUp from "./FormContainer/SignUp";
// import ResetPassword from "./FormContainer/ResetPassword";
import Trends from "./Trends";
import Favorites from "./Favorites";
import Settings from "./Settings";
import { useDispatch, useSelector } from "react-redux";
import {
  AuthSelectors,
  getFavoritesId,
  getUserInfo,
} from "../redux/reducers/authSlice";
import Search from "./Search";
import { getFavoritePosts } from "../redux/reducers/postSlice";
import Filtered from "./Filtered";
import EmptyState from "../components/EmptyState";

export enum RoutesList {
  Home = "/",
  Trends = "/trends",
  Favorites = "/favorites",
  Filters = "/filters",
  Settings = "/settings",
  Search = "/search/:query",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  // ResetPassword = "/reset-password",
  Default = "*",
  SelectedMovie = "/titles/:id",
}

const Router = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const favoriteListId = useSelector(AuthSelectors.getFavoritesId);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserInfo());
      dispatch(getFavoritesId());
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (isLoggedIn && favoriteListId) {
      dispatch(getFavoritePosts(favoriteListId));
    }
  }, [favoriteListId, isLoggedIn]);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />}></Route>
          <Route path={RoutesList.Trends} element={<Trends />}></Route>
          <Route path={RoutesList.Favorites} element={<Favorites />}></Route>
          <Route path={RoutesList.Filters} element={<Filtered />}></Route>
          <Route path={RoutesList.Settings} element={<Settings />}></Route>
          <Route path={RoutesList.Search} element={<Search />}></Route>
          <Route
            path={RoutesList.SelectedMovie}
            element={<SelectedMovie />}
          ></Route>
          <Route
            path={RoutesList.Default}
            element={
              <EmptyState
                description={"THE PAGE YOU WERE LOOKING FOR DOESN'T EXIT"}
              />
            }
          ></Route>
        </Route>
        <Route path={RoutesList.SignIn} element={<SignIn />}></Route>
        <Route path={RoutesList.SignUp} element={<SignUp />}></Route>
        {/*нет функционала в api*/}
        {/*<Route*/}
        {/*  path={RoutesList.ResetPassword}*/}
        {/*  element={<ResetPassword />}*/}
        {/*></Route>*/}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
