import React, { useState } from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme/Context";
import { BackToTop, PixemaIcon } from "../../assets/icons";

const PagesContainer = () => {
  const { theme } = useThemeContext();
  const [showToTop, setShowToTop] = useState(false);
  const onScroll = () => {
    const position = window.scrollY;
    if (position > 400) {
      setShowToTop(true);
    } else {
      setShowToTop(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={classNames(styles.background, {
        [styles.backgroundLight]: !theme,
      })}
    >
      <div className={styles.wrapper} onScroll={onScroll}>
        <div className={styles.container}>
          <div className={styles.sideBar}>
            <div className={styles.pixema}>
              {theme ? <PixemaIcon /> : <PixemaIcon fill="#242426" />}
            </div>
            <SideBar />
          </div>
          <div className={styles.main}>
            <div className={styles.tabletHeader}>
              <div className={styles.siteLogoTablet}>
                {theme ? <PixemaIcon /> : <PixemaIcon fill="#242426" />}
              </div>
              <Header />
            </div>
            <Outlet />
          </div>
        </div>
        <div className={styles.empty}></div>
        {showToTop && (
          <div className={styles.backToTop} onClick={onClick}>
            <BackToTop />
          </div>
        )}
        <div className={styles.footer}>© All Rights Reserved</div>
      </div>
    </div>
  );
};

export default PagesContainer;
