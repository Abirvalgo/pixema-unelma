import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getSearchedPosts,
  PostSelectors,
} from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import styles from "./Search.module.scss";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";

//TODO если не залогинен, то ставить disabled  поля в Settings
const Search = () => {
  const searchedPosts = useSelector(PostSelectors.getSearchedPosts);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(PostSelectors.getIsLoading);

  // useEffect(() => {
  //   isLoggedIn && dispatch(getSearchedPosts({}));
  // }, [isLoggedIn]);
  return (
    <>
      {isLoggedIn ? (
        isLoading ? (
          <Loader />
        ) : (
          <CardsList cardsList={searchedPosts} />
        )
      ) : (
        <div className={styles.emptyState}>
          <EmptyState description="Sign In required to browse this website" />
        </div>
      )}
    </>
  );
};

export default Search;
