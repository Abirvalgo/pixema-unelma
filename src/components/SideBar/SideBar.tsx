import React, { FC } from "react";
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
  const onTrendsClick = () => {
    navigate(`/trends`);
  };
  const onFavoritesClick = () => {
    navigate(`/favorites`);
  };
  const onSettingsClick = () => {
    navigate(`/settings`);
  };
  // const onClick1 = (text: string) => {
  //   navigate(`/${text}`);
  // };
  //TODO сократить (строки 25-26. ругается на что-то при onClick)

  return (
    <div className={styles.leftContainer}>
      <div className={styles.iconsWrapper}>
        <div className={styles.svgFill} onClick={onHomeClick}>
          <HomeIcon />
          <p>Home</p>
        </div>
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
      </div>
    </div>
  );
};

export default SideBar;
