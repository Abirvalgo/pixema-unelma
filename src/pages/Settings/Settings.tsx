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

const Settings = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  const onCancelClick = () => {
    navigate(`/`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputName}>Profile</div>
        <div className={styles.boxWrapper}>
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
        <div className={styles.inputName}>Password</div>
        <div className={classNames(styles.boxWrapper, styles.boxWrapperHeight)}>
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
        <div className={styles.inputName}>Color mode</div>
        <div className={styles.switchWrapper}>
          <div className={styles.themeTextWrapper}>
            <div className={styles.themeTextTop}>Dark</div>
            <div className={styles.themeTextBottom}>Use dark theme</div>
          </div>
          <Switch />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={onCancelClick}
          type={ButtonType.Secondary}
          title={`Cancel`}
        />
        <Button onClick={() => {}} type={ButtonType.Primary} title={`Save`} />
      </div>
    </div>
  );
};

export default Settings;
