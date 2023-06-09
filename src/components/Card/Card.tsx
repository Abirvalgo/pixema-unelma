import React, { FC } from "react";
import styles from "./Card.module.scss";
import { CardListType, CardType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { BookmarkIcon, TrendsIcon } from "../../assets/icons";
import { useThemeContext } from "../../context/Theme/Context";

export type CardProps = {
  card: CardType;
  favoritePosts: CardListType | [];
};
const Card: FC<CardProps> = ({ card, favoritePosts }) => {
  const { theme } = useThemeContext();
  const { name, poster, rating, year, id } = card;
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/titles/${id}`);
  };
  const checkFavorite = () => {
    if (favoritePosts && typeof favoritePosts.find === "function") {
      return favoritePosts.filter((item: CardType) => item.id === id);
    }
    return [];
  };
  const isFavorite = checkFavorite();

  const imageSize = /original/gi;
  const smallPoster = poster ? poster.replace(imageSize, "w300") : "";

  return (
    <>
      <div className={styles.container} onClick={onCardClick}>
        <div
          className={classNames(styles.rating, {
            [styles.trendsRating]: rating > "7.8",
            [styles.mediocreRating]: rating < "6",
            [styles.badRating]: rating < "5",
            [styles.noneRating]: rating === null,
          })}
        >
          {rating > "7.8" && <TrendsIcon />}
          {rating}
        </div>
        {!!isFavorite.length && (
          <div className={styles.favorite}>
            <BookmarkIcon />
          </div>
        )}
        <img
          src={smallPoster}
          alt={"Movie Poster"}
          style={{ minHeight: "351px" }}
        />
        <div
          className={classNames(styles.cardText, {
            [styles.cardTextLight]: !theme,
          })}
        >
          {name}
        </div>
        <div
          className={classNames(styles.cardText, {
            [styles.cardTextLight]: !theme,
          })}
        >
          {year}
        </div>
      </div>
    </>
  );
};

export default Card;
