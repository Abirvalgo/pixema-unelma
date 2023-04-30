import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedPosts,
  getSinglePost,
  PostSelectors,
  setSinglePost,
} from "../../redux/reducers/postSlice";
import SelectedCard from "../../components/SelectedCard";
import styles from "./SelectedMovie.module.scss";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Related from "../Related";
import { AuthSelectors } from "../../redux/reducers/authSlice";

const SelectedMovie = () => {
  const singlePost = useSelector(PostSelectors.getSinglePost);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const isLoading = useSelector(PostSelectors.getIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
      dispatch(getRelatedPosts(id));
    }
  }, [id]);
  useEffect(() => {
    return () => {
      dispatch(setSinglePost(null));
    };
  }, [id]);
  const favoriteListId = useSelector(AuthSelectors.getFavoritesId);
  const favoritePosts = useSelector(PostSelectors.getFavoritePosts);

  return singlePost && id && favoritePosts ? (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <SelectedCard
            singleCard={singlePost}
            titleId={+id}
            id={favoriteListId}
            favoritePosts={favoritePosts}
          />
        )}
        <div className={styles.recommended}>
          <div className={styles.text}>Recommendations</div>
          <Related />
        </div>
      </div>
    </>
  ) : isLoading ? (
    <Loader />
  ) : null;
};
export default SelectedMovie;
