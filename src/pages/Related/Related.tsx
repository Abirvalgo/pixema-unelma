import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";

const Trends = () => {
  const relatedPosts = useSelector(PostSelectors.getRelatedPosts);
  const isLoading = useSelector(PostSelectors.getIsLoading);

  return relatedPosts.length > 0 ? (
    isLoading ? (
      <Loader />
    ) : (
      <CardsList cardsList={relatedPosts} />
    )
  ) : null;
};

export default Trends;
