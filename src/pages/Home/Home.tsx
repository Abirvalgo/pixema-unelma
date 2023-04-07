import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, postSelectors } from "../../redux/reducers/postSlice";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import Switch from "../../components/Switch";
import { HomeIcon } from "../../assets/icons/HomeIcon";

const Home = () => {
  const singlePost = useSelector(postSelectors.getSinglePost);
  const dispatch = useDispatch();
  const onButtonClick = () => {};

  useEffect(() => {
    dispatch(getSinglePost({}));
  }, []);
  return (
    <>
      <Button
        onClick={onButtonClick}
        title={"Кнопка"}
        type={ButtonType.Primary}
      />
      <Button
        onClick={onButtonClick}
        title={"Кнопка"}
        type={ButtonType.Primary}
        disabled
      />
      <Switch />
      <HomeIcon />
    </>
  );
};

export default Home;

/*<div className={styles.container}>Font check</div>*/
/*<div>{singlePost?.name}</div>*/
/*<img src={singlePost?.poster} />*/
