import React, { ChangeEvent, FC, useState } from "react";
import styles from "./Switch.module.scss";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme/Context";

type SwitchProps = {
  checked?: boolean | undefined;
  disabled?: boolean | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Switch: FC<SwitchProps> = ({ checked, disabled }) => {
  const { theme, onChangeTheme } = useThemeContext();
  const onClick = (value: boolean) => () => onChangeTheme(value);
  // const [isChecked, setIsChecked] = useState(true);
  // const onChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={theme}
          onClick={onClick(!theme)}
          readOnly
          // onChange={() => setIsChecked(!isChecked)}
          // onChange={onChange}
        />
        <span className={classNames(styles.slider, styles.round, {})}></span>
      </label>
    </div>
  );
};

export default Switch;
