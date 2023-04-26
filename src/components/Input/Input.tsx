import React, { ChangeEvent, FC } from "react";
import styles from "./Input.module.scss";
import { FilterIcon } from "../../assets/icons";

type InputType = {
  title?: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  errorText?: string;
  filters?: string | string[];
};

const Input: FC<InputType> = ({
  title,
  type,
  value,
  placeholder,
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
          className={styles.input}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChangeInput}
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
