import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedPosts, PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";

const Trends = () => {
  const relatedPosts = useSelector(PostSelectors.getRelatedPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(PostSelectors.getIsLoading);
  //
  // useEffect(() => {
  //   dispatch(getRelatedPosts({}));
  // }, []); тут не нужно (хз) только в selected movie
  return <>{isLoading ? <Loader /> : <CardsList cardsList={relatedPosts} />}</>;
};

export default Trends;
