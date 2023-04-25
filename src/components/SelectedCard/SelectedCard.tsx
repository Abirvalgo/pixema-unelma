import React, { FC } from "react";
import styles from "./SelectedCard.module.scss";
import { ButtonType, SingleCardType } from "../../utils/@globalTypes";
import Button from "../Button";
import { DateTime } from "luxon";

export type SelectedMovieProps = {
  singleCard: SingleCardType;
};
const SelectedCard: FC<SelectedMovieProps> = ({ singleCard }) => {
  const {
    poster,
    name,
    description,
    year,
    release_date,
    revenue,
    country,
    rating,
    runtime,
    id,
  } = singleCard;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.posterContainer}>
          <img src={poster} alt={"Movie Poster"} />
          <div className={styles.buttonWrapper}>
            <Button onClick={() => {}} type={ButtonType.Bookmark} />
            <Button onClick={() => {}} type={ButtonType.Share} />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.name}>{name}</div>
          <div className={styles.ratingWrapper}>
            <div className={styles.rating}>{rating}</div>
            <div className={styles.runtime}>{runtime} min</div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.smallInfoContainer}>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Year</div>
              <div className={styles.content}>{year}</div>
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Released</div>
              {release_date && (
                <div className={styles.content}>
                  {DateTime.fromISO(release_date)
                    .setLocale("en")
                    .toFormat("dd MMMM yyyy")}
                </div>
              )}
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>BoxOffice</div>
              <div className={styles.content}>
                {revenue
                  ? `${
                      revenue
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                        .split(".")[0]
                    }`
                  : `Unavailable`}
              </div>
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Country</div>
              <div className={styles.content}>
                {country ? country : `Unavailable`}
              </div>
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Production</div>
              <div className={styles.content}>{`Test`}</div>
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Actors</div>
              <div className={styles.content}>{`Test`}</div>
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Director</div>
              <div className={styles.content}>{`Test`}</div>
            </div>
            <div className={styles.smallInfoWrapper}>
              <div className={styles.title}>Writers</div>
              <div className={styles.content}>{`Test`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectedCard;
