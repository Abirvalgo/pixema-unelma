import React from "react";
import Lottie from "lottie-react";
import styles from "./LoaderCircle.module.scss";
import loaderCircle from "../../assets/loadingCircle.json";

const Loader = () => {
  return (
    <div className={styles.center}>
      <Lottie
        style={{ width: 100, height: 100 }}
        animationData={loaderCircle}
        loop={true}
      />
    </div>
  );
};

export default Loader;
