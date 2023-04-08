import React, { FC } from "react";
import styles from "./ShareButton.module.scss";
import { BookmarkIcon, ShareIcon } from "../../assets/icons";
import { ButtonType } from "../../utils/@globalTypes";
import classNames from "classnames";

type ShareButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};
const ShareButton: FC<ShareButtonProps> = ({ onClick, disabled }) => {
  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.leftPart, {
          [styles.disabledButton]: disabled,
        })}
        onClick={onClick}
      >
        <BookmarkIcon />
      </div>

      <div
        className={classNames(styles.rightPart, {
          [styles.disabledButton]: disabled,
        })}
        onClick={onClick}
      >
        <ShareIcon />
      </div>
    </div>
  );
};

export default ShareButton;
