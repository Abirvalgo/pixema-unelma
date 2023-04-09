import React from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

const PagesContainer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <SideBar />
        <Outlet />
        {/*<Button onClick={() => {}} type={ButtonType.Primary} title="Кнопка" />*/}
      </div>
      <div className={styles.footer}>© All Rights Reserved</div>
      // TODO разобраться со скачущим при загрузке footer и шириной Outlet
      (почему не влазит 1490px)
    </div>
  );
};

export default PagesContainer;
