import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import styles from "./Input.module.scss";
import { FilterIcon } from "../../assets/icons";
import classNames from "classnames";

type InputType = {
  title?: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  errorText?: string;
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
  filters,
}) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.container}>
        <input
          // className={styles.input}
          className={classNames(styles.input, {
            [styles.inputDisabled]: disabled,
          })}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChangeInput}
          onKeyDown={onKeyDown}
        />
        {filters && (
          <div className={styles.filter}>
            <FilterIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
