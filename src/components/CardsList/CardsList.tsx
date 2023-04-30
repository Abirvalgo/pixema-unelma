import React, { FC } from "react";
import styles from "./CardsList.module.scss";
import { CardListType } from "../../utils/@globalTypes";
import Card from "../Card";
import { useSelector } from "react-redux";
import { PostSelectors } from "../../redux/reducers/postSlice";

type CardsListProps = {
  cardsList: CardListType;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  const favoritePosts = useSelector(PostSelectors.getFavoritePosts);
  return cardsList.length > 0 ? (
    <div className={styles.container}>
      {cardsList.map((item) => {
        return <Card key={item.id} card={item} favoritePosts={favoritePosts} />;
      })}
    </div>
  ) : null;
};

export default CardsList;
