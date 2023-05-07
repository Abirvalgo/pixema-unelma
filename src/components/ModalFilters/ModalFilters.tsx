import React, { FC } from "react";
import styles from "./ModalFilters.module.scss";
import Select from "react-select";
import Button from "../Button";
import { CloseIcon } from "../../assets/icons";
import { ButtonType } from "../../utils/@globalTypes";
import Input from "../Input";
import { customSelectStyles } from "../../utils/constants";

type ModalFiltersProps = {
  isVisible: boolean;
  genreValue: string | string[];
  langValue: any;
  onGenreChange: (data: any) => void;
  onLangChange: (data: any) => void;
  options: any;
  langOptions: any;
  onCloseClick: () => void;
  onRatingClick: () => void;
  onYearClick: () => void;
  yearFromValue: string;
  yearToValue: string;
  onYearFromChange: (value: string) => void;
  onYearToChange: (value: string) => void;
  runtimeFromValue: string;
  runtimeToValue: string;
  onRuntimeFromChange: (value: string) => void;
  onRuntimeToChange: (value: string) => void;
  scoreFromValue: string;
  scoreToValue: string;
  onScoreFromChange: (value: string) => void;
  onScoreToChange: (value: string) => void;
  onClearFilterClick: () => void;
  onShowResultsClick: () => void;
  isHighlighted: boolean;
};

export const ModalFilters: FC<ModalFiltersProps> = ({
  isVisible,
  genreValue,
  langValue,
  onGenreChange,
  onLangChange,
  options,
  langOptions,
  onCloseClick,
  onRatingClick,
  onYearClick,
  yearFromValue,
  yearToValue,
  onYearFromChange,
  onYearToChange,
  runtimeFromValue,
  runtimeToValue,
  onRuntimeFromChange,
  onRuntimeToChange,
  scoreFromValue,
  scoreToValue,
  onScoreFromChange,
  onScoreToChange,
  onClearFilterClick,
  onShowResultsClick,
  isHighlighted,
}) => {
  return isVisible ? (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
          <div className={styles.text}>Filters</div>
          <div onClick={onCloseClick} className={styles.closeBtn}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <p>Sort by</p>
          <div className={styles.buttonsWrapper}>
            <Button
              onClick={onRatingClick}
              type={ButtonType.Secondary}
              title="Rating"
              isHighlighted={isHighlighted}
            />
            <Button
              onClick={onYearClick}
              type={ButtonType.Secondary}
              title="Year"
              isHighlighted={!isHighlighted}
            />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <p>Genre</p>
          <div>
            <Select
              styles={customSelectStyles}
              isMulti
              value={genreValue}
              onChange={onGenreChange}
              options={options}
            />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <p>Language</p>
          <div>
            <Select
              styles={customSelectStyles}
              value={langValue}
              onChange={onLangChange}
              options={langOptions}
            />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <p>Years</p>
          <div className={styles.inputWrapper}>
            <Input
              type={"text"}
              value={yearFromValue}
              placeholder={"From"}
              onChange={onYearFromChange}
            />
            <Input
              type={"text"}
              value={yearToValue}
              placeholder={"To"}
              onChange={onYearToChange}
            />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <p>Runtime, minutes</p>
          <div className={styles.inputWrapper}>
            <Input
              type={"text"}
              value={runtimeFromValue}
              placeholder={"From"}
              onChange={onRuntimeFromChange}
            />
            <Input
              type={"text"}
              value={runtimeToValue}
              placeholder={"To"}
              onChange={onRuntimeToChange}
            />
          </div>
        </div>
        <div className={styles.sortWrapper}>
          <p>Score</p>
          <div className={styles.inputWrapper}>
            <Input
              type={"text"}
              value={scoreFromValue}
              placeholder={"From"}
              onChange={onScoreFromChange}
            />
            <Input
              type={"text"}
              value={scoreToValue}
              placeholder={"To"}
              onChange={onScoreToChange}
            />
          </div>
        </div>
        <div className={styles.bottomBtnWrapper}>
          <Button
            onClick={onClearFilterClick}
            type={ButtonType.Secondary}
            title="Clear filter"
          />
          <Button
            onClick={onShowResultsClick}
            type={ButtonType.Primary}
            title="Show results"
          />
        </div>
      </div>
    </div>
  ) : null;
};
export default ModalFilters;

// onChange={([selected]) => selected}
// onChange={(e) => setSelectedOption(e)}
