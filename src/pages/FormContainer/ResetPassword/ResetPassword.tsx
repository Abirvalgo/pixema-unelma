import React, { useState } from "react";
import styles from "./ResetPassword.module.scss";
import { NavLink } from "react-router-dom";
import Input from "../../../components/Input";
import { ButtonType } from "../../../utils/@globalTypes";
import Button from "../../../components/Button";
import { RoutesList } from "../../Router";
import FormContainer from "../FormContainer";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <FormContainer formTitle={"Reset Password"}>
      <div className={styles.container}>
        <div className={styles.input}>
          <Input
            title={"Email"}
            type={"text"}
            value={email}
            placeholder="Your email"
            onChange={onChangeEmail}
          />
        </div>
        <div className={styles.button}>
          <Button
            title={"Reset"}
            type={ButtonType.Primary}
            onClick={() => {}}
          />
        </div>
      </div>
    </FormContainer>
  );
};

export default ResetPassword;
