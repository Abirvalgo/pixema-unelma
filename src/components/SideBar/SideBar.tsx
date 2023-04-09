import React from "react";
import styles from "./SideBar.module.scss";
import {
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate(`/`);
  };
  return (
    <div className={styles.leftContainer}>
      <div className={styles.iconsWrapper}>
        <div className={styles.svgFill} onClick={onHomeClick}>
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className={styles.svgFill}>
          <TrendsIcon />
          <p>Trends</p>
        </div>
        <div className={styles.svgFill}>
          <FavoritesIcon />
          <p>Favorites</p>
        </div>
        <div className={styles.svgFill}>
          <SettingsIcon />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
