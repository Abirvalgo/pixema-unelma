import React, { FC } from "react";
import styles from "./SelectedCard.module.scss";
import {
  ButtonType,
  CardListType,
  CardType,
  Credit,
  SingleCardType,
} from "../../utils/@globalTypes";
import Button from "../Button";
import { DateTime } from "luxon";
import classNames from "classnames";
import { TrendsIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import {
  addFavoritePosts,
  removeFavoritePosts,
} from "../../redux/reducers/postSlice";

export type SelectedMovieProps = {
  singleCard: SingleCardType;
  titleId: number;
  id: number | null;
  favoritePosts: CardListType | [];
};
const SelectedCard: FC<SelectedMovieProps> = ({
  singleCard,
  titleId,
  id,
  favoritePosts,
}) => {
  const {
    poster,
    name,
    description,
    year,
    release_date,
    revenue,
    rating,
    runtime,
    genres,
    credits,
  } = singleCard;
  const dispatch = useDispatch();

  const allGenres = genres?.map((genre) => (
    <p key={genre.id}>
      {genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}
    </p>
  ));

  const getNamesByDepartment = (
    credits: Credit[] | undefined,
    department: string
  ) => {
    return credits
      ?.map((item) => {
        if (item.pivot.department === department) {
          return item.name;
        }
      })
      .filter((item) => item != undefined)
      .join(", ");
  };
  const writers = getNamesByDepartment(credits, "writing");
  const directors = getNamesByDepartment(credits, "directing");
  const cast = getNamesByDepartment(credits, "cast");

  //нашел решение. без него не хотело рабоать (вечно писало, что filter не function
  const checkFavorite = () => {
    if (favoritePosts && typeof favoritePosts.find === "function") {
      return favoritePosts.filter((item: CardType) => item.id === titleId);
    }
    return [];
  };
  const isFavorite = checkFavorite();

  const onClickBookmark = () => {
    const isFavorite = checkFavorite();
    if (isFavorite.length > 0) {
      dispatch(removeFavoritePosts({ id, titleId }));
    } else if (isFavorite.length === 0) {
      dispatch(addFavoritePosts({ id, titleId }));
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.posterContainer}>
          <img src={poster} alt={"Movie Poster"} />
          <div className={styles.buttonWrapper}>
            <Button
              onClick={onClickBookmark}
              type={ButtonType.Bookmark}
              isHighlighted={!!isFavorite.length}
            />
            <Button onClick={() => {}} type={ButtonType.Share} />
          </div>
        </div>
        <div className={styles.infoContainer}>
          {allGenres && <div className={styles.genres}>{allGenres}</div>}
          {name && <div className={styles.name}>{name}</div>}
          <div className={styles.ratingWrapper}>
            {rating && (
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
            )}
            {runtime && <div className={styles.runtime}>{runtime} min</div>}
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.smallInfoContainer}>
            {year && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Year</div>
                <div className={styles.content}>{year}</div>
              </div>
            )}
            {release_date && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Released</div>
                <div className={styles.content}>
                  {DateTime.fromISO(release_date)
                    .setLocale("en")
                    .toFormat("dd MMMM yyyy")}
                </div>
              </div>
            )}
            {revenue && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>BoxOffice</div>
                <div className={styles.content}>
                  {
                    revenue
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      .split(".")[0]
                  }
                </div>
              </div>
            )}
            {cast && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Actors</div>
                <div className={styles.content}>{cast}</div>
              </div>
            )}
            {directors && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Director</div>
                <div className={styles.content}>{directors}</div>
              </div>
            )}
            {writers && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Writers</div>
                <div className={styles.content}>{writers}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCard;
