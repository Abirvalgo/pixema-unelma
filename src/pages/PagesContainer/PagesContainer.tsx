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
/// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/// TODO дохнет токен походу через время (падает ошибка). надо обновлять каждый раз (смотреть)
