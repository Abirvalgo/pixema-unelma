import React, { FC, ReactNode } from "react";
import styles from "./FormContainer.module.scss";
import { PixemaIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

type FormContainerPros = {
  children: ReactNode;
  formTitle: string;
};
const FormContainer: FC<FormContainerPros> = ({ children, formTitle }) => {
  const navigate = useNavigate();
  const onHomeClick = () => {
    navigate(`/`);
  };
  return (
    <div className={styles.background}>
      <div className={styles.pixema} onClick={onHomeClick}>
        <PixemaIcon />
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.formTitle}>{formTitle}</div>
        {children}
      </div>
      <div className={styles.footer}>© All Rights Reserved</div>
    </div>
  );
};

export default FormContainer;
