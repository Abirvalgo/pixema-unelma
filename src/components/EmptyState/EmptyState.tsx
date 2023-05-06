import React, { FC } from "react";
import styles from "./EmptyState.module.scss";
import { EmptyStateIcon } from "../../assets/icons/EmptyStateIcon";
import classNames from "classnames";
import { useThemeContext } from "../../context/Theme/Context";

type EmptyStateProps = {
  description: string;
};
const EmptyState: FC<EmptyStateProps> = ({ description }) => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.container}>
      <EmptyStateIcon />
      <div
        className={classNames(styles.description, {
          [styles.descriptionLight]: !theme,
        })}
      >
        {description}
      </div>
    </div>
  );
};

export default EmptyState;
