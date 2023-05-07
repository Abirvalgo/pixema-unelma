import React from "react";
import styles from "./Settings.module.scss";
import Input from "../../components/Input";
import classNames from "classnames";
import Switch from "../../components/Switch";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";
import { useThemeContext } from "../../context/Theme/Context";
import { THEME_VALUE } from "../../utils/constants";

const Settings = () => {
  const { theme, onChangeTheme } = useThemeContext();
  const onClick = (value: boolean) => () => onChangeTheme(value);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  const onCancelClick = () => {
    navigate(`/`);
  };
  const onSaveClick = () => {
    let themeValue = ``;
    if (theme) {
      themeValue = ``;
    } else {
      themeValue = `light`;
    }
    localStorage.setItem(THEME_VALUE, themeValue);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.inputName, {
            [styles.inputNameLight]: !theme,
          })}
        >
          Profile
        </div>
        <div
          className={classNames(styles.boxWrapper, {
            [styles.boxWrapperLight]: !theme,
          })}
        >
          <div className={styles.inputWrapper}>
            <Input
              title={"Name"}
              type={"text"}
              value={userInfo?.user.display_name}
              placeholder="Your name"
              onChange={() => {}}
              disabled={!isLoggedIn}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Input
              title={"Email"}
              type={"email"}
              value={userInfo?.user.email}
              placeholder=""
              onChange={() => {}}
              disabled={!isLoggedIn}
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.inputName, {
            [styles.inputNameLight]: !theme,
          })}
        >
          Password
        </div>
        <div
          className={classNames(styles.boxWrapper, styles.boxWrapperHeight, {
            [styles.boxWrapperLight]: !theme,
          })}
        >
          <div className={styles.inputWrapperLeft}>
            <div className={styles.inputWrapper}>
              <Input
                title={"Password"}
                type={"password"}
                value={`Test name`}
                placeholder="Your Password"
                onChange={() => {}}
                disabled
              />
            </div>
          </div>
          <div className={styles.inputWrapperRight}>
            <div className={styles.inputWrapper}>
              <Input
                title={"New password"}
                type={"password"}
                value={`Test name`}
                placeholder="New Password"
                onChange={() => {}}
                disabled
              />
            </div>
            <div className={styles.inputWrapper}>
              <Input
                title={"Confirm password"}
                type={"password"}
                value={`Test name`}
                placeholder="Confirm Password"
                onChange={() => {}}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.inputName, {
            [styles.inputNameLight]: !theme,
          })}
        >
          Color mode
        </div>
        <div
          className={classNames(styles.switchWrapper, {
            [styles.switchWrapperLight]: !theme,
          })}
        >
          {theme ? (
            <div className={styles.themeTextWrapper}>
              <div className={styles.themeTextTop}>Dark</div>
              <div className={styles.themeTextBottom}>Use dark theme</div>
            </div>
          ) : (
            <div className={styles.themeTextWrapper}>
              <div className={styles.themeTextTopLight}>Light</div>
              <div className={styles.themeTextBottomLight}>Use light theme</div>
            </div>
          )}
          <Switch checked={theme} onClick={onClick(!theme)} />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={onCancelClick}
          type={ButtonType.Secondary}
          title={`Cancel`}
        />
        <Button
          onClick={onSaveClick}
          type={ButtonType.Primary}
          title={`Save`}
        />
      </div>
    </div>
  );
};

export default Settings;
