import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, postSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";

const Home = () => {
  const allPosts = useSelector(postSelectors.getAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts({}));
  }, []);
  //TODO http://localhost:3000/test
  return (
    <>
      {allPosts && <div>{allPosts[0].name}</div>}
      <CardsList cardsList={allPosts} />
    </>
  );
};

export default Home;
