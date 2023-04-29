import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoritePosts,
  PostSelectors,
} from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import { AuthSelectors } from "../../redux/reducers/authSlice";

const Favorites = () => {
  const favoriteListId = useSelector(AuthSelectors.getFavoritesId);
  const favoritePosts = useSelector(PostSelectors.getFavoritePosts);
  const dispatch = useDispatch();
  const isLoading = useSelector(PostSelectors.getIsLoading);

  useEffect(() => {
    if (favoriteListId) {
      dispatch(getFavoritePosts(favoriteListId));
    }
  }, [favoriteListId]);

  return (
    <>{isLoading ? <Loader /> : <CardsList cardsList={favoritePosts} />}</>
  );
};

export default Favorites;
