import React, { FC } from "react";
import styles from "./CardsList.module.scss";
import { CardListType } from "../../utils/@globalTypes";
import Card from "../Card";

type CardsListProps = {
  cardsList: CardListType;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  ) : (
    <div className={styles.error}>Unexpected Error</div>
  );
};

export default CardsList;
