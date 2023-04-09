import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, postSelectors } from "../../redux/reducers/postSlice";
import SelectedCard from "../../components/SelectedCard";
import styles from "./SelectedMovie.module.scss";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const SelectedMovie = () => {
  const singlePost = useSelector(postSelectors.getSinglePost);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const isLoading = useSelector(postSelectors.getIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, []);

  return (
    <>{isLoading ? <Loader /> : <SelectedCard singleCard={singlePost} />}</>
  );
};

export default SelectedMovie;
