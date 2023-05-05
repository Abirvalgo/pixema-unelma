import React from "react";
import styles from "./PagesContainer.module.scss";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme/Context";
import { PixemaIcon } from "../../assets/icons";

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
          <div className={styles.sideBar}>
            <div className={styles.siteLogo}>
              <PixemaIcon />
            </div>
            <SideBar />
          </div>
          <div className={styles.main}>
            <div className={styles.tabletHeader}>
              <div className={styles.siteLogoTablet}>
                <PixemaIcon />
              </div>
              <Header />
            </div>
            <Outlet />
          </div>
        </div>
        <div className={styles.empty}></div>
        <div className={styles.footer}>© All Rights Reserved</div>
      </div>
    </div>
  );
};

export default PagesContainer;
// return (
//     <div
//         className={classNames(styles.background, {
//           [styles.backgroundLight]: !theme,
//         })}
//     >
//       <div className={styles.wrapper}>
//         <div className={styles.container}>
//           <Header />
//           <div className={styles.contentWrapper}>
//             <SideBar />
//             <Outlet />
//           </div>
//         </div>
//         <div className={styles.empty}></div>
//         <div className={styles.footer}>© All Rights Reserved</div>
//       </div>
//     </div>
// );
// };
