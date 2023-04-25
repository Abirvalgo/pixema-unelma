import React, { FC } from "react";
import styles from "./Card.module.scss";
import { CardType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  card: CardType;
};
const Card: FC<CardProps> = ({ card }) => {
  const { name, poster, genre, rating, year, id } = card;
  const navigate = useNavigate();
  const onCardClick = () => {
    navigate(`/titles/${id}`);
  };

  return (
    <>
      <div className={styles.container} onClick={onCardClick}>
        <div className={styles.rating}>{rating}</div>
        <img src={poster} alt={"Movie Poster"} />
        <div className={styles.test}>{name}</div>
        <div className={styles.test}>{year}</div>
      </div>
    </>
  );
};

export default Card;
