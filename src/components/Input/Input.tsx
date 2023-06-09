import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import styles from "./Input.module.scss";
import { FilterIcon } from "../../assets/icons";
import classNames from "classnames";

type InputType = {
  title?: string;
  type: string;
  value: string | number | undefined;
  placeholder: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errorText?: string;
  onBlur?: () => void;
  filters?: string | string[];
};

const Input: FC<InputType> = ({
  title,
  type,
  value,
  placeholder,
  onKeyDown,
  onChange,
  disabled,
  errorText,
  onBlur,
  filters,
}) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.container}>
        <input
          // className={styles.input}
          className={classNames(styles.input, {
            [styles.inputDisabled]: disabled,
            [styles.error]: errorText,
          })}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
        {filters && (
          <div className={styles.filter}>
            <FilterIcon />
          </div>
        )}
      </div>
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </>
  );
};

export default Input;
