import React, { FC } from "react";
import styles from "./UserName.module.scss";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";

type UserProps = {
  username: string | undefined;
};
const UserName: FC<UserProps> = ({ username }) => {
  const shortname = username?.substr(0, 2).toUpperCase();
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  return (
    userInfo && (
      <div className={styles.userFrame}>
        <p>{shortname}</p>
      </div>
    )
  );
};

export default UserName;
