import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrendPosts, PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";

const Trends = () => {
  const trendPosts = useSelector(PostSelectors.getTrendPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(PostSelectors.getIsLoading);

  useEffect(() => {
    dispatch(getTrendPosts({}));
  }, []);
  return <>{isLoading ? <Loader /> : <CardsList cardsList={trendPosts} />}</>;
};

export default Trends;
