import React, { FC, MouseEventHandler } from "react";
import styles from "./Switch.module.scss";
import classNames from "classnames";

type SwitchProps = {
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  onClick?: MouseEventHandler<HTMLInputElement>;
};

const Switch: FC<SwitchProps> = ({ checked, disabled, onClick }) => {
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={checked}
          onClick={onClick}
          readOnly
          disabled={disabled}
        />
        <span className={classNames(styles.slider, styles.round, {})}></span>
      </label>
    </div>
  );
};

export default Switch;
