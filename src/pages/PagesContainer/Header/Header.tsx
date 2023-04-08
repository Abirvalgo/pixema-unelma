import React, { useState } from "react";
import styles from "./Header.module.scss";
import {
  FavoritesIcon,
  HomeIcon,
  PixemaIcon,
  SettingsIcon,
  TrendsIcon,
  UserIcon,
} from "../../../assets/icons";
import Input from "../../../components/Input";

const Header = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.siteLogo}>
          <PixemaIcon />
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.svgFill}>
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
      <div className={styles.header}>
        <Input
          type={`text`}
          value={search}
          placeholder={"Search"}
          onChange={onChangeSearch}
        />
        <div className={styles.userIcon}>
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
