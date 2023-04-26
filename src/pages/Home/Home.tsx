import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import styles from "./Home.module.scss";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";
import InfiniteScroll from "react-infinite-scroll-component";

//TODO если не залогинен, то ставить disabled  поля в Settings
const Home = () => {
  const allPosts = useSelector(PostSelectors.getAllPosts);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(PostSelectors.getIsLoading);

  useEffect(() => {
    isLoggedIn && dispatch(getAllPosts({}));
  }, [isLoggedIn]);
  return (
    <>
      {isLoggedIn ? (
        isLoading ? (
          <Loader />
        ) : (
          //TODO react infinite scroll component разобрать че как (урок 53 или ютуб)
          <InfiniteScroll
            next={() => {}}
            hasMore={allPosts < 40}
            loader={<Loader />}
            dataLength={allPosts.length}
          >
            <CardsList cardsList={allPosts} />
          </InfiniteScroll>
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
