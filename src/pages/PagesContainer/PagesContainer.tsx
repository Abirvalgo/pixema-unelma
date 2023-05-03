import React from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme/Context";

const PagesContainer = () => {
  const { theme } = useThemeContext();
  return (
    <div
      className={classNames(styles.background, {
        [styles.backgroundLight]: !theme,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />
          <SideBar />

          <Outlet />
        </div>
        <div className={styles.empty}></div>
        <div className={styles.footer}>© All Rights Reserved</div>
      </div>
    </div>
  );
};

export default PagesContainer;
