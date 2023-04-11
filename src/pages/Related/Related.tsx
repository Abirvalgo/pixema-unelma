import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedPosts, postSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";

const Trends = () => {
  const relatedPosts = useSelector(postSelectors.getRelatedPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(postSelectors.getIsLoading);

  useEffect(() => {
    dispatch(getRelatedPosts({}));
  }, []);
  return <>{isLoading ? <Loader /> : <CardsList cardsList={relatedPosts} />}</>;
};

export default Trends;
