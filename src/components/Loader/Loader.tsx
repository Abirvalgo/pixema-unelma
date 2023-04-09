import React from "react";
import Lottie from "lottie-react";
import styles from "./Loader.module.scss";
import loader from "../../assets/loader.json";

const Loader = () => {
  return (
    <div className={styles.center}>
      <Lottie
        style={{ width: 400, height: 400 }}
        animationData={loader}
        loop={true}
      />
    </div>
  );
};

export default Loader;
