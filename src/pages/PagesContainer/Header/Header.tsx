import React, { KeyboardEvent, useState } from "react";
import styles from "./Header.module.scss";
import {
  BurgerMenu,
  FilterIcon,
  PixemaIcon,
  SearchIcon,
  UserIcon,
} from "../../../assets/icons";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, logoutUser } from "../../../redux/reducers/authSlice";
import UserName from "../../../components/UserName";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import classNames from "classnames";
import {
  getAllPosts,
  PostSelectors,
  resetPosts,
  setFiltersVisible,
} from "../../../redux/reducers/postSlice";
import ModalFilters from "../../../components/ModalFilters";
import { selectGenres, selectLanguages } from "../../../utils/constants";
import { useThemeContext } from "../../../context/Theme/Context";
import SideBar from "../../../components/SideBar";

const Header = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("release_date:desc");
  const [yearFrom, setYearFrom] = useState(``);
  const [yearTo, setYearTo] = useState(``);
  const [runtimeFrom, setRuntimeFrom] = useState(``);
  const [runtimeTo, setRuntimeTo] = useState(``);
  const [scoreFrom, setScoreFrom] = useState(``);
  const [scoreTo, setScoreTo] = useState(``);
  const onYearFromChange = (value: string) => {
    setYearFrom(value);
  };
  const onYearToChange = (value: string) => {
    setYearTo(value);
  };
  const onRuntimeFromChange = (value: string) => {
    setRuntimeFrom(value);
  };
  const onRuntimeToChange = (value: string) => {
    setRuntimeTo(value);
  };
  const onScoreFromChange = (value: string) => {
    setScoreFrom(value);
  };
  const onScoreToChange = (value: string) => {
    setScoreTo(value);
  };
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const isVisible = useSelector(PostSelectors.getFiltersVisible);
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
    navigate(`/`);
    dispatch(logoutUser());
  };
  const onClickSearchButton = () => {
    if (searchValue) {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
  };
  const onClickFilters = () => {
    if (isVisible) {
      dispatch(setFiltersVisible(false));
    } else {
      dispatch(setFiltersVisible(true));
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onClickSearchButton();
    }
  };

  const onMouseLeaveEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    setActive(false);
  };
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<{
    value: string | ``;
    label: string | ``;
  } | null>();
  const handleSelectGenre = (data: any) => {
    setSelectedGenre(data);
  };
  const handleSelectLanguage = (data: { value: string; label: string }) => {
    setSelectedLanguage(data);
  };
  const OnRatingClick = () => {
    setSort("user_score:desc");
  };
  const OnYearClick = () => {
    setSort("release_date:desc");
  };
  const genreMap = selectedGenre?.map((item: any) => item.value);
  const startSearch = () => {
    dispatch(setFiltersVisible(false));
    navigate(`/filters`);
    dispatch(resetPosts({ allPosts: [], trendPosts: [], searchedPosts: [] }));
    dispatch(
      getAllPosts({
        perPage: 20,
        page: page,
        genre: genreMap.toString(),
        language: selectedLanguage?.value,
        order: sort,
        user_score: `${scoreFrom},${scoreTo}`,
        runtime: `${runtimeFrom},${runtimeTo}`,
        released: `${yearFrom},${yearTo}`,
      })
    );
  };
  const clearFilter = () => {
    setSort("release_date:desc");
    setYearTo(``);
    setYearFrom(``);
    setRuntimeTo(``);
    setRuntimeFrom(``);
    setScoreTo(``);
    setScoreFrom(``);
    setSelectedGenre([]);
    setSelectedLanguage(null);
  };
  return (
    <>
      <div className={styles.selectContainer}>
        <div
          className={classNames({
            [styles.modalBackground]: isVisible,
          })}
          onClick={onClickFilters}
        ></div>

        <ModalFilters
          isVisible={isVisible}
          genreValue={selectedGenre}
          onGenreChange={handleSelectGenre}
          options={selectGenres}
          onCloseClick={onClickFilters}
          onRatingClick={OnRatingClick}
          onYearClick={OnYearClick}
          yearFromValue={yearFrom}
          yearToValue={yearTo}
          onYearFromChange={onYearFromChange}
          onYearToChange={onYearToChange}
          runtimeFromValue={runtimeFrom}
          runtimeToValue={runtimeTo}
          onRuntimeFromChange={onRuntimeFromChange}
          onRuntimeToChange={onRuntimeToChange}
          scoreFromValue={scoreFrom}
          scoreToValue={scoreTo}
          onScoreFromChange={onScoreFromChange}
          onScoreToChange={onScoreToChange}
          onClearFilterClick={clearFilter}
          onShowResultsClick={startSearch}
          langValue={selectedLanguage}
          onLangChange={handleSelectLanguage}
          langOptions={selectLanguages}
          isHighlighted={sort === "release_date:desc"}
        />
      </div>
      <div
        className={classNames(styles.header, {
          [styles.headerLight]: !theme,
        })}
      >
        <div className={styles.searchWrapper}>
          <Input
            type={`text`}
            value={searchValue}
            placeholder={"Search"}
            onChange={onChangeSearch}
            onKeyDown={onKeyDown}
            disabled={!isLoggedIn}
          />
          {isLoggedIn && (
            <>
              <div className={styles.searchBtn} onClick={onClickSearchButton}>
                <SearchIcon />
              </div>
              <div className={styles.filterBtn} onClick={onClickFilters}>
                <FilterIcon />
              </div>
            </>
          )}
        </div>
        {isLoggedIn ? (
          userInfo && (
            <>
              {/*burger menu mobile start*/}
              <div className={styles.burgerMenu} onClick={onUserClick}>
                <BurgerMenu />
                <div
                  className={classNames(styles.userMobileHidden, {
                    [styles.userMobile]: active,
                  })}
                >
                  <div className={styles.userNameMobile}>
                    <UserName username={userName} />
                  </div>
                  <div>
                    <SideBar />
                  </div>

                  <div className={styles.logoutMobile}>
                    <Button
                      title={"Log Out"}
                      type={ButtonType.Primary}
                      onClick={onLogoutClick}
                    />
                  </div>
                </div>
                <div className={styles.siteLogoTablet}>
                  {theme ? <PixemaIcon /> : <PixemaIcon fill="#242426" />}
                </div>
              </div>

              {/*burger menu mobile end*/}
              <div className={styles.userBlock}>
                <div className={styles.userIcon} onClick={onUserClick}>
                  <UserName username={userName} />
                  {
                    <p
                      className={classNames(styles.userName, {
                        [styles.userNameLight]: !theme,
                      })}
                    >
                      {userName}
                    </p>
                  }
                  {active ? (
                    <div className={styles.arrowDown}></div>
                  ) : (
                    <div className={styles.arrowRight}></div>
                  )}
                </div>
                <div
                  onMouseLeave={onMouseLeaveEvent}
                  className={classNames(styles.buttonsWrapper, {
                    [styles.hidden]: !active,
                    [styles.buttonsLight]: !theme,
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
            </>
          )
        ) : (
          <div className={styles.headerMobileSignIn}>
            <div className={styles.siteLogoTablet}>
              {theme ? <PixemaIcon /> : <PixemaIcon fill="#242426" />}
            </div>
            <div
              className={classNames(styles.userIcon, {
                [styles.userIconLight]: !theme,
              })}
              onClick={onSignInClick}
            >
              <UserIcon />
              <p
                className={classNames(styles.userName, {
                  [styles.userNameLight]: !theme,
                })}
              >
                Sign In
              </p>
              <div className={styles.arrowRight}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
