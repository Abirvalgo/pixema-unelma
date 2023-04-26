import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, PostSelectors } from "../../redux/reducers/postSlice";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import Switch from "../../components/Switch";
import { HomeIcon } from "../../assets/icons";
import styles from "./Test.module.scss";
import {
  BookmarkIcon,
  FavoritesIcon,
  SettingsIcon,
  ShareIcon,
  TrendsIcon,
  UserIcon,
} from "../../assets/icons";
import ShareButton from "../../components/ShareButton";
import Input from "../../components/Input";
import Home from "../Home";

const Test = () => {
  const singlePost = useSelector(PostSelectors.getSinglePost);
  const dispatch = useDispatch();
  const onButtonClick = () => {};

  useEffect(() => {
    dispatch(getSinglePost({}));
  }, []);
  const [name, setName] = useState("");
  const onNameChange = (name: string) => {
    setName(name);
  };

  return (
    <>
      <Switch />
      <div className={styles.svgFill}>
        <HomeIcon />
      </div>
      <SettingsIcon />
      <FavoritesIcon />
      <TrendsIcon />
      <UserIcon />
      <div className={styles.svgFillBookmark}>
        <BookmarkIcon />
      </div>
      <ShareIcon />
      <ShareButton onClick={() => {}} />
      <Input
        type="text"
        value={name}
        placeholder={"Placeholder"}
        onChange={onNameChange}
        filters={"string"}
      />
    </>
  );
};

export default Test;

/*<div className={styles.container}>Font check</div>*/
/*<div>{singlePost?.name}</div>*/
/*<img src={singlePost?.poster} />*/
/*<div className={styles.container}>Font check</div>*/
/*<div>{singlePost?.name}</div>*/
/*<img src={singlePost?.poster} />*/

// const singlePost = useSelector(postSelectors.getSinglePost);
// const dispatch = useDispatch();
// const onButtonClick = () => {};
//
// useEffect(() => {
//   dispatch(getSinglePost({}));
// }, []);
// const [name, setName] = useState("");
// const onNameChange = (name: string) => {
//   setName(name);
// };
// return (
//     <>
//         <Button
//             onClick={onButtonClick}
//             title={"Кнопка"}
//             type={ButtonType.Primary}
//         />
//         <Button
//             onClick={onButtonClick}
//             title={"Кнопка"}
//             type={ButtonType.Primary}
//             disabled
//         />
//         <Switch />
//         <div className={styles.svgFill}>
//             <HomeIcon />
//         </div>
//         <SettingsIcon />
//         <FavoritesIcon />
//         <TrendsIcon />
//         <UserIcon />
//         <div className={styles.svgFillBookmark}>
//             <BookmarkIcon />
//         </div>
//         <ShareIcon />
//         <ShareButton onClick={() => {}} />
//         <Input
//             type="text"
//             value={name}
//             placeholder={"Placeholder"}
//             onChange={onNameChange}
//             filters={"string"}
//         />
//     </>
// );
// };
//
// export default Trends;
