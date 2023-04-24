import React, { FC } from "react";
import styles from "./CardsList.module.scss";
import { CardType } from "../../utils/@globalTypes";
import Card from "../Card";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";

export type CardListType = CardType[];
type CardsListProps = {
  cardsList: CardListType;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  return isLoggedIn && cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item, index) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  ) : (
    <div className={styles.error}>Unexpected Error</div>
  );
};

export default CardsList;
