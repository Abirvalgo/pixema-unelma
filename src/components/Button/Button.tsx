import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonType } from "../../utils/@globalTypes";
import { BookmarkIcon, ShareIcon } from "../../assets/icons";

type ButtonProps = {
  title?: string;
  onClick: () => void;
  type: ButtonType;
  disabled?: boolean;
  onMouseOver?: (e: MouseEvent) => void;
  onMouseOut?: (e: MouseEvent) => void;
  isHighlighted?: boolean;
};
const btnStyles = {
  [ButtonType.Primary]: styles.primaryButton,
  [ButtonType.Secondary]: styles.secondaryButton,
  [ButtonType.Bookmark]: styles.bookmarkButton,
  [ButtonType.Share]: styles.shareButton,
  [ButtonType.Error]: styles.errorButton,
};

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  type,
  isHighlighted,
}) => {
  const buttonClassName = btnStyles[type];
  return (
    <>
      {type === ButtonType.Bookmark && (
        <div
          className={classNames(styles.leftPart, {
            [styles.disabledButtonShare]: disabled,
            [styles.highlightedButtonShare]: isHighlighted,
          })}
          onClick={onClick}
        >
          <BookmarkIcon />
        </div>
      )}
      {type === ButtonType.Share && (
        <div
          className={classNames(styles.rightPart, {
            [styles.disabledButtonShare]: disabled,
          })}
          onClick={onClick}
        >
          <ShareIcon />
        </div>
      )}
      {type !== ButtonType.Share && type !== ButtonType.Bookmark && (
        <div
          onClick={onClick}
          className={classNames(buttonClassName, {
            [styles.disabledButton]: disabled,
          })}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default Button;
