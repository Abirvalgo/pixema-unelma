import React from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const PagesContainer = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <div className={styles.footer}>© All Rights Reserved</div>
    </div>
  );
};

export default PagesContainer;
