import React from "react";
import { useSelector } from "react-redux";
import { PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import Loader from "../../components/Loader";
import EmptyState from "../../components/EmptyState";
import { AuthSelectors } from "../../redux/reducers/authSlice";
// import styles from "./Favorites.module.scss";

const Favorites = () => {
  const favoritePosts = useSelector(PostSelectors.getFavoritePosts);
  const isLoading = useSelector(PostSelectors.getIsLoading);
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  return favoritePosts.length > 0 ? (
    <>
      {isLoggedIn ? (
        isLoading ? (
          <Loader />
        ) : (
          <CardsList cardsList={favoritePosts} />
        )
      ) : (
        <div>
          <EmptyState description="Sign In required to browse this website" />
        </div>
      )}
    </>
  ) : (
    <div>
      <EmptyState description="Sign In required to browse this website" />
    </div>
  );
};

export default Favorites;
