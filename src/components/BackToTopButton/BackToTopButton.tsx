import React, { useState } from "react";
import styles from "./BackToTopButton.module.scss";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 100) {
      setVisible(false);
    } else {
      setVisible(false);
    }
  };
  // useEffect(() => {
  //     window.addEventListener("scroll",()=>{
  //         if (window.scrollY > 500){
  //             setVisible(true)
  //         } else {setVisible(false)}
  //     })
  // }, [isLoggedIn, page]);
  return <div className={styles.btn} onScroll={onScroll}></div>;
};

export default BackToTopButton;
