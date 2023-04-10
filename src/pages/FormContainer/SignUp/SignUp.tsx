import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import { NavLink } from "react-router-dom";
import Input from "../../../components/Input";
import { ButtonType } from "../../../utils/@globalTypes";
import Button from "../../../components/Button";
import { RoutesList } from "../../Router";
import FormContainer from "../FormContainer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const onChangeName = (value: string) => {
    setName(value);
  };
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeConfirmPass = (value: string) => {
    setConfirmPass(value);
  };
  return (
    <FormContainer formTitle={"Sign Up"}>
      <div className={styles.container}>
        <div className={styles.input}>
          <Input
            title={"Name"}
            type={"text"}
            value={name}
            placeholder="Your name"
            onChange={onChangeName}
          />
          <Input
            title={"Email"}
            type={"text"}
            value={email}
            placeholder="Your email"
            onChange={onChangeEmail}
          />
          <Input
            title={"Password"}
            type={"password"}
            value={password}
            placeholder="Your password"
            onChange={onChangePassword}
          />
          <Input
            title={"Confirm Password"}
            type={"password"}
            value={password}
            placeholder="Confirm Password"
            onChange={onChangeConfirmPass}
          />
        </div>
        <div className={styles.button}>
          <Button
            title={"Sign Up"}
            type={ButtonType.Primary}
            onClick={() => {}}
          />
        </div>
        <div className={styles.text}>
          Already have an account?
          <NavLink to={RoutesList.SignIn} className={styles.signUpBtn}>
            Sign In
          </NavLink>
        </div>
      </div>
    </FormContainer>
  );
};
//TODO сделать как child (а не outlet)?????
export default SignUp;