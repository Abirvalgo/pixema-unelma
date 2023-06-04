import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrendPosts,
  PostSelectors,
  resetPosts,
} from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderCircle from "../../components/LoaderCircle";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";

const Trends = () => {
  const trendPosts = useSelector(PostSelectors.getTrendPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(PostSelectors.getIsLoading);
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const postsCount = useSelector(PostSelectors.getPostsCount);
  const [page, setPage] = useState(1);
  const onNextReached = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    isLoggedIn &&
      dispatch(
        getTrendPosts({ perPage: 10, page: page, order: `popularity:desc` })
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
              hasMore={trendPosts.length < postsCount}
              loader={<LoaderCircle />}
              dataLength={trendPosts.length}
              scrollThreshold={0.8}
            >
              <CardsList cardsList={trendPosts} />
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

export default Trends;
