import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonType } from "../../utils/@globalTypes";

type ButtonProps = {
  title?: string;
  onClick: () => void;
  type: ButtonType;
  disabled?: boolean;
};
const btnStyles = {
  [ButtonType.Primary]: styles.primaryButton,
  [ButtonType.Secondary]: styles.secondaryButton,
  [ButtonType.Error]: styles.errorButton,
};

const Button: FC<ButtonProps> = ({ title, onClick, disabled, type }) => {
  const buttonClassName = btnStyles[type];
  return (
    <div
      onClick={onClick}
      className={classNames(buttonClassName, {
        [styles.disabledButton]: disabled,
      })}
    >
      {title}
    </div>
  );
};

export default Button;
