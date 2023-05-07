import React, { FC, useEffect } from "react";
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
  resetPosts,
} from "../../redux/reducers/postSlice";
import { useThemeContext } from "../../context/Theme/Context";

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
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const allGenres = genres?.map((genre) => (
    <p key={genre.id + name}>
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
  const onClickShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied to clipboard");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.posterContainer}>
          <img src={poster} alt={"Movie Poster"} />
          <div
            className={classNames(styles.buttonWrapper, {
              [styles.buttonLight]: !theme,
            })}
          >
            <Button
              onClick={onClickBookmark}
              type={ButtonType.Bookmark}
              isHighlighted={!!isFavorite.length}
            />
            <Button onClick={onClickShare} type={ButtonType.Share} />
          </div>
        </div>
        <div className={styles.infoContainer}>
          {allGenres && <div className={styles.genres}>{allGenres}</div>}
          {name && (
            <div
              className={classNames(styles.name, {
                [styles.themeLight]: !theme,
              })}
            >
              {name}
            </div>
          )}
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
          <p
            className={classNames(styles.description, {
              [styles.themeLight]: !theme,
            })}
          >
            {description}
          </p>
          <div className={styles.smallInfoContainer}>
            {year && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Year</div>
                <div
                  className={classNames(styles.content, {
                    [styles.themeLight]: !theme,
                  })}
                >
                  {year}
                </div>
              </div>
            )}
            {release_date && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Released</div>
                <div
                  className={classNames(styles.content, {
                    [styles.themeLight]: !theme,
                  })}
                >
                  {DateTime.fromISO(release_date)
                    .setLocale("en")
                    .toFormat("dd MMMM yyyy")}
                </div>
              </div>
            )}
            {revenue && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>BoxOffice</div>
                <div
                  className={classNames(styles.content, {
                    [styles.themeLight]: !theme,
                  })}
                >
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
                <div
                  className={classNames(styles.content, {
                    [styles.themeLight]: !theme,
                  })}
                >
                  {cast}
                </div>
              </div>
            )}
            {directors && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Director</div>
                <div
                  className={classNames(styles.content, {
                    [styles.themeLight]: !theme,
                  })}
                >
                  {directors}
                </div>
              </div>
            )}
            {writers && (
              <div className={styles.smallInfoWrapper}>
                <div className={styles.title}>Writers</div>
                <div
                  className={classNames(styles.content, {
                    [styles.themeLight]: !theme,
                  })}
                >
                  {writers}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCard;
