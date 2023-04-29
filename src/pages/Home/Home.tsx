import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import styles from "./Home.module.scss";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderCircle from "../../components/LoaderCircle";

//TODO если не залогинен, то ставить disabled  поля в Settings
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
  //TODO сделать callAuth saga (и там тупо на ошибку 401 делать логаут и перенаправление на логин)
  //TODO react select
  //TODO  <BackToTopButton/>
  //TODO удаление постов из redux (после перехода в settings они не скидываются)
  useEffect(() => {
    isLoggedIn && dispatch(getAllPosts({ perPage: 10, page: page }));
  }, [isLoggedIn, page]);

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
        <div className={styles.emptyState}>
          <EmptyState description="Sign In required to browse this website" />
        </div>
      )}
    </>
  );
};

export default Home;

//TODO isLoading попробовать на didmount повесить
