import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, postSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import styles from "./Home.module.scss";

const Home = () => {
  const allPosts = useSelector(postSelectors.getAllPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(postSelectors.getIsLoading);

  useEffect(() => {
    dispatch(getAllPosts({}));
  }, []);
  //TODO http://localhost:3000/test
  return (
    <>
      {isLoading ? <Loader /> : <CardsList cardsList={allPosts} />}
      {/*<div className={styles.button}>*/}
      {/*  <Button onClick={() => {}} type={ButtonType.Secondary} />*/}
      {/*</div>*/}
    </>
  );
};

export default Home;
