import React, { FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { ButtonType } from "../../utils/@globalTypes";
import { BookmarkIcon, ShareIcon } from "../../assets/icons";
import { useThemeContext } from "../../context/Theme/Context";

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
  const { theme } = useThemeContext();
  const buttonClassName = btnStyles[type];
  return (
    <>
      {type === ButtonType.Bookmark && (
        <div
          className={classNames(styles.leftPart, {
            [styles.disabledButtonShare]: disabled,
            [styles.highlightedButtonShare]: isHighlighted,
            [styles.buttonLight]: !theme && !isHighlighted,
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
            [styles.buttonLight]: !theme,
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
            [styles.highlightedButton]: isHighlighted,
          })}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default Button;
