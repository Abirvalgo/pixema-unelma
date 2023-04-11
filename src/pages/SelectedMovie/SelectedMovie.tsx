import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedPosts,
  getSinglePost,
  postSelectors,
} from "../../redux/reducers/postSlice";
import SelectedCard from "../../components/SelectedCard";
import styles from "./SelectedMovie.module.scss";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Related from "../Related";

const SelectedMovie = () => {
  const singlePost = useSelector(postSelectors.getSinglePost);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const isLoading = useSelector(postSelectors.getIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
      dispatch(getRelatedPosts(id));
    }
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        {isLoading ? <Loader /> : <SelectedCard singleCard={singlePost} />}
        <div className={styles.recommended}>
          <div className={styles.text}>Recommendations</div>
          <Related />
        </div>
      </div>
    </>
  );
};

export default SelectedMovie;
