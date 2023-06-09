import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  PostSelectors,
  resetPosts,
} from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
// import styles from "./Home.module.scss";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderCircle from "../../components/LoaderCircle";

const Home = () => {
  const allPosts = useSelector(PostSelectors.getAllPosts);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(PostSelectors.getIsLoading);
  const postsCount = useSelector(PostSelectors.getPostsCount);
  const [page, setPage] = useState(1);
  const onNextReached = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    isLoggedIn &&
      dispatch(
        getAllPosts({
          perPage: 10,
          page: page,
          order: `popularity:desc`,
          country: "us",
        })
      );
  }, [isLoggedIn, page]);
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
            <InfiniteScroll
              style={{ overflowY: "hidden" }}
              next={onNextReached}
              hasMore={allPosts.length < postsCount}
              loader={<LoaderCircle />}
              dataLength={allPosts.length}
              scrollThreshold={0.8}
            >
              <CardsList cardsList={allPosts} />
            </InfiniteScroll>
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

export default Home;
