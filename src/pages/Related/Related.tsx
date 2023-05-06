import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PostSelectors } from "../../redux/reducers/postSlice";
import CardsList from "../../components/CardsList";
import styles from "./Related.module.scss";
import classNames from "classnames";
import { RelatedArrowLeft, RelatedArrowRight } from "../../assets/icons";
import { useThemeContext } from "../../context/Theme/Context";

const Trends = () => {
  const { theme } = useThemeContext();
  const relatedPosts = useSelector(PostSelectors.getRelatedPosts);
  const isLoading = useSelector(PostSelectors.getIsLoading);
  const [active, setActive] = useState(1);

  return relatedPosts.length > 0 ? (
    <>
      <div className={styles.wrapper}>
        <div className={styles.arrows}>
          <div
            className={classNames(styles.previous, {
              [styles.next]: active === 2,
              [styles.themeLight]: !theme && active === 2,
            })}
            onClick={() => {
              setActive(1);
            }}
          >
            <RelatedArrowLeft />
          </div>
          <div
            className={classNames(styles.previous, {
              [styles.next]: active === 1,
              [styles.themeLight]: !theme && active === 1,
            })}
            onClick={() => {
              setActive(2);
            }}
          >
            <RelatedArrowRight />
          </div>
        </div>
        <div>
          <div
            className={classNames(styles.relatedHidden, {
              [styles.relatedVisible]: active === 1,
            })}
          >
            <CardsList cardsList={relatedPosts.slice(0, 5)} />
          </div>
          <div
            className={classNames(styles.relatedHidden, {
              [styles.relatedVisible]: active === 2,
            })}
          >
            <CardsList cardsList={relatedPosts.slice(5, 10)} />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Trends;
// isLoading ? (
//     <Loader />
// ) : (
//     <CardsList cardsList={relatedPosts} />
// )
// )
// : null;
