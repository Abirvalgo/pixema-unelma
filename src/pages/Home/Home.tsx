import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, postSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";

const Home = () => {
  const allPosts = useSelector(postSelectors.getAllPosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(postSelectors.getIsLoading);

  useEffect(() => {
    dispatch(getAllPosts({}));
  }, []);
  //TODO http://localhost:3000/test
  return <>{isLoading ? <Loader /> : <CardsList cardsList={allPosts} />}</>;
};

export default Home;
// {allPosts && <div>{allPosts[0].name}</div>}
