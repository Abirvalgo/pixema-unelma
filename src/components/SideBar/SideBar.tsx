import React from "react";
import styles from "./SideBar.module.scss";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";

const SideBar = () => {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate(`/`);
  };
  const onTrendsClick = () => {
    navigate(`/trends`);
  };
  const onFavoritesClick = () => {
    navigate(`/favorites`);
  };
  const onSettingsClick = () => {
    navigate(`/settings`);
  };
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  return (
    <div className={styles.leftContainer}>
      <div className={styles.iconsWrapper}>
        <div className={styles.svgFill} onClick={onHomeClick}>
          <HomeIcon />
          <p>Home</p>
        </div>
        {isLoggedIn && (
          <>
            <div className={styles.svgFill} onClick={onTrendsClick}>
              <TrendsIcon />
              <p>Trends</p>
            </div>
            <div className={styles.svgFill} onClick={onFavoritesClick}>
              <FavoritesIcon />
              <p>Favorites</p>
            </div>
            <div className={styles.svgFill} onClick={onSettingsClick}>
              <SettingsIcon />
              <p>Settings</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
