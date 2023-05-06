import React, { useEffect, useMemo, useState } from "react";
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
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const onBlurEmail = () => {
    setEmailTouched(true);
  };
  const onBlurPassword = () => {
    setPasswordTouched(true);
  };
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
  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is a required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);
  useEffect(() => {
    if (passwordTouched) {
      if (password.length === 0) {
        setPasswordError("Password is required field");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordTouched]);
  const isValid = useMemo(() => {
    return (
      emailError.length === 0 && passwordError.length === 0 && emailTouched
    );
  }, [emailError, passwordError, emailTouched]);
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
            errorText={emailError}
            onBlur={onBlurEmail}
          />
          <Input
            title={"Password"}
            type={"password"}
            value={password}
            placeholder="Your password"
            onChange={onChangePassword}
            errorText={passwordError}
            onBlur={onBlurPassword}
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
            disabled={!isValid}
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
