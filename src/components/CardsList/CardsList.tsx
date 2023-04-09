import React, { FC } from "react";
import styles from "./CardsList.module.scss";
import { CardType } from "../../utils/@globalTypes";
import Card from "../Card";

export type CardListType = CardType[];
type CardsListProps = {
  cardsList: CardListType;
};
const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  ) : (
    <div>Error</div>
  );
};

export default CardsList;