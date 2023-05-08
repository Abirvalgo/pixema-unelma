import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, resetPosts } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";
// import styles from "./Filtered.module.scss";

const Filtered = () => {
  const allPosts = useSelector(PostSelectors.getAllPosts);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(PostSelectors.getIsLoading);

  useEffect(() => {
    return () => {
      dispatch(resetPosts({ allPosts: [], trendPosts: [], searchedPosts: [] }));
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        isLoading ? (
          <Loader />
        ) : (
          <>
            {allPosts.length > 0 ? (
              <CardsList cardsList={allPosts} />
            ) : (
              <div>
                <EmptyState description="Use filters to start another search" />
              </div>
            )}
          </>
        )
      ) : (
        <div>
          <EmptyState description="Sign In required to browse this website" />
        </div>
      )}
    </>
  );
};

export default Filtered;
