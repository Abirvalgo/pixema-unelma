import React, { ChangeEvent, FC, useState } from "react";
import styles from "./Switch.module.scss";
import classNames from "classnames";

type SwitchProps = {
  checked?: boolean;
  disabled?: boolean | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Switch: FC<SwitchProps> = ({ checked, disabled }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className={classNames(styles.slider, styles.round, {})}></span>
      </label>
      <p>{isChecked ? "Selected" : "Unchecked"}</p>
    </div>
  );
};

export default Switch;
