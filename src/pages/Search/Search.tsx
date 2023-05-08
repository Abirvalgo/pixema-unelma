import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchedPosts,
  PostSelectors,
  resetPosts,
} from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
// import styles from "./Search.module.scss";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";
import { useParams } from "react-router-dom";

const Search = () => {
  const searchedPosts = useSelector(PostSelectors.getSearchedPosts);
  const dispatch = useDispatch();
  const params = useParams();
  const { query } = params;
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(PostSelectors.getIsLoading);

  useEffect(() => {
    return () => {
      dispatch(resetPosts({ allPosts: [], trendPosts: [], searchedPosts: [] }));
    };
  }, []);
  useEffect(() => {
    if (query) {
      dispatch(getSearchedPosts(query));
    }
  }, [query]);
  return (
    <>
      {isLoggedIn ? (
        isLoading ? (
          <Loader />
        ) : (
          <CardsList cardsList={searchedPosts} />
        )
      ) : (
        <div>
          <EmptyState description="Sign In required to browse this website" />
        </div>
      )}
    </>
  );
};

export default Search;
