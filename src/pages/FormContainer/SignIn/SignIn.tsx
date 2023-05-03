import React, { useState } from "react";
import styles from "./SignIn.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { ButtonType } from "../../../utils/@globalTypes";
import Button from "../../../components/Button";
import { RoutesList } from "../../Router";
import FormContainer from "../FormContainer";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../redux/reducers/authSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onSignInClick = () => {
    dispatch(
      signInUser({
        data: { email, password, token_name: "random" },
        callback: () => navigate(RoutesList.Home),
      })
    );
  };
  return (
    <FormContainer formTitle={"Sign In"}>
      <div className={styles.container}>
        <div className={styles.input}>
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
        </div>
        <div className={styles.forgot} onClick={() => {}}>
          {/*Forgot password?*/}
        </div>
        <div className={styles.button}>
          <Button
            title={"Sign In"}
            type={ButtonType.Primary}
            onClick={onSignInClick}
          />
        </div>
        <div className={styles.text}>
          Don’t have an account?
          <NavLink to={RoutesList.SignUp} className={styles.signInBtn}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </FormContainer>
  );
};
export default SignIn;
