import React from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";

const PagesContainer = () => {
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        userinfo&& <Header />
        <SideBar />
        <Outlet />
      </div>
      <div className={styles.empty}></div>
      <div className={styles.footer}>© All Rights Reserved</div>
    </div>
  );
};

export default PagesContainer;
/// TODO разобраться со скачущим при загрузке footer и шириной Outlet (почему не влазит 1490px)

/// TODO userinfo удаляется после перезагрузки (я получаю после логина только). надо делать отдельно reducer,saga
///под это??? ПРОВЕРКА ИДЕТ ПО token и потом вместо id просто пишу {me} user-profile/id
