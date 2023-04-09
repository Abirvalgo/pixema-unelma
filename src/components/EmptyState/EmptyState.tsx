import React, { FC } from "react";
import styles from "./EmptyState.module.scss";
import { EmptyStateIcon } from "../../assets/icons/EmptyStateIcon";

type EmptyStateProps = {
  description: string;
};
const EmptyState: FC<EmptyStateProps> = ({ description }) => {
  return (
    <div className={styles.container}>
      <EmptyStateIcon />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default EmptyState;
