import React, { FC } from "react";
import styles from "./UserName.module.scss";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authSlice";

type UserProps = {
  username: string | undefined;
};
const UserName: FC<UserProps> = ({ username }) => {
  // const shortname = username
  //   ?.split("")
  //   .map((word) => word.charAt(0))
  //   .join("");
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  return (
    userInfo && (
      <div className={styles.userFrame}>
        {/*<p>{shortname}</p>*/}
        <p>{username}</p>
      </div>
    )
  );
};

export default UserName;
