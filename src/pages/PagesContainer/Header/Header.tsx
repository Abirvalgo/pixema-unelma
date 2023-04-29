import React, { useState, KeyboardEvent } from "react";
import styles from "./Header.module.scss";
import { PixemaIcon, SearchIcon, UserIcon } from "../../../assets/icons";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, logoutUser } from "../../../redux/reducers/authSlice";
import UserName from "../../../components/UserName";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import classNames from "classnames";
import {
  getSearchedPosts,
  PostSelectors,
} from "../../../redux/reducers/postSlice";
import { RoutesList } from "../../Router";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const userInfo = useSelector(AuthSelectors.getUserInfo);
  const userName = userInfo?.user.display_name;
  const onChangeSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };
  const onSignInClick = () => {
    navigate(`/sign-in`);
  };
  const onUserClick = () => {
    setActive(!active);
  };
  const onEditClick = () => {
    navigate(`/settings`);
  };
  const onLogoutClick = () => {
    dispatch(logoutUser());
  };
  const onClickSearchButton = () => {
    dispatch(getSearchedPosts(searchValue));
    setSearchValue("");
    navigate(RoutesList.Search);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchButton();
    }
  };
  // const onMouseOverEvent = (event: React.MouseEvent<HTMLDivElement>) => {
  //   setActive(true);
  // };
  const onMouseLeaveEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    setActive(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.siteLogo}>
          <PixemaIcon />
        </div>
        <Input
          type={`text`}
          value={searchValue}
          placeholder={"Search"}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <div className={styles.searchBtn} onClick={onClickSearchButton}>
          <SearchIcon />
        </div>
        {isLoggedIn ? (
          userInfo && (
            <div>
              <div className={styles.userIcon} onClick={onUserClick}>
                <UserName username={userName} />
                {<p className={styles.userName}>{userName}</p>}
                {active ? (
                  <div className={styles.arrowDown}></div>
                ) : (
                  <div className={styles.arrowRight}></div>
                )}
              </div>
              <div
                onMouseLeave={onMouseLeaveEvent}
                className={classNames(styles.buttonsWrapper, {
                  [styles.hidden]: active === false,
                })}
              >
                <Button
                  title={"Edit profile"}
                  type={ButtonType.Secondary}
                  onClick={onEditClick}
                />
                <Button
                  title={"Log Out"}
                  type={ButtonType.Secondary}
                  onClick={onLogoutClick}
                />
              </div>
            </div>
            //   <div className={styles.buttonsWrapper}>
            //     <Button
            //         title={"Edit profile"}
            //         type={ButtonType.Secondary}
            //         onClick={onEditClick}
            //     />
            //     <Button
            //         title={"Log Out"}
            //         type={ButtonType.Secondary}
            //         onClick={onSignInClick}
            //     />
            //   </div>
            // </div>
          )
        ) : (
          <div className={styles.userIcon} onClick={onSignInClick}>
            <UserIcon />
            Sign In
            <div className={styles.arrowRight}></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

// return (
//     <>
//       <div className={styles.leftContainer}>
//         <div className={styles.siteLogo}>
//           <PixemaIcon />
//         </div>
//         <div className={styles.iconsWrapper}>
//           <div className={styles.svgFill}>
//             <HomeIcon />
//             <p>Trends</p>
//           </div>
//           <div className={styles.svgFill}>
//             <TrendsIcon />
//             <p>Trends</p>
//           </div>
//           <div className={styles.svgFill}>
//             <FavoritesIcon />
//             <p>Favorites</p>
//           </div>
//           <div className={styles.svgFill}>
//             <SettingsIcon />
//             <p>Settings</p>
//           </div>
//         </div>
//       </div>
//       <div className={styles.header}>
//         <Input
//             type={`text`}
//             value={search}
//             placeholder={"Search"}
//             onChange={onChangeSearch}
//         />
//         <div className={styles.userIcon}>
//           <UserIcon />
//         </div>
//       </div>
//     </>
// );
// };
