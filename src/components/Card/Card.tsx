import React, { FC } from "react";
import styles from "./Card.module.scss";
import { CardType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { TrendsIcon } from "../../assets/icons";

export type CardProps = {
  card: CardType;
};
const Card: FC<CardProps> = ({ card }) => {
  const { name, poster, rating, year, id } = card;
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/titles/${id}`);
  };

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
        <img src={poster} alt={"Movie Poster"} />
        <div className={styles.cardText}>{name}</div>
        <div className={styles.cardText}>{year}</div>
      </div>
    </>
  );
};

export default Card;
