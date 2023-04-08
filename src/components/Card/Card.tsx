import React, { FC } from "react";
import styles from "./Card.module.scss";
import { CardType } from "../../utils/@globalTypes";

export type CardProps = {
  card: CardType;
};
const Card: FC<CardProps> = ({ card }) => {
  const { id, name, description } = card;
  return (
    <>
      <div className={styles.test}>{id}</div>
      <div className={styles.test}>{name}</div>
      <div className={styles.test}>{description}</div>
    </>
  );
};

export default Card;
