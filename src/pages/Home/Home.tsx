import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, postSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import styles from "./Home.module.scss";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import EmptyState from "../../components/EmptyState";

const Home = () => {
  const allPosts = useSelector(postSelectors.getAllPosts);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isLoading = useSelector(postSelectors.getIsLoading);
  const userInfo = useSelector(AuthSelectors.getUserInfo);

  useEffect(() => {
    isLoggedIn && dispatch(getAllPosts({}));
  }, [isLoggedIn]);
  return (
    <>
      {isLoggedIn ? (
        isLoading ? (
          <Loader />
        ) : (
          <CardsList cardsList={allPosts} />
        )
      ) : (
        <div className={styles.emptyState}>
          <EmptyState description="Sign In required to browse this website" />
        </div>
      )}

      {/*<div className={styles.button}>*/}
      {/*  <Button onClick={() => {}} type={ButtonType.Secondary} />*/}
      {/*</div>*/}
    </>
  );
};

export default Home;
