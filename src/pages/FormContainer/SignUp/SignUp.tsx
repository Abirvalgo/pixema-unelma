import React, { useEffect, useMemo, useState } from "react";
import styles from "./SignUp.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import { ButtonType } from "../../../utils/@globalTypes";
import Button from "../../../components/Button";
import { RoutesList } from "../../Router";
import FormContainer from "../FormContainer";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../redux/reducers/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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
  const onChangeConfirmPass = (value: string) => {
    setConfirmPass(value);
  };
  const onSignUpClick = () => {
    dispatch(
      signUpUser({
        data: {
          email,
          password,
          password_confirmation: confirmPass,
          token_name: "randomToken",
        },
        callback: () => navigate(RoutesList.SignIn),
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
      if (password !== confirmPass) {
        setPasswordError("Passwords must match");
      } else if (password.length === 0 || confirmPass.length === 0) {
        setPasswordError("Password is required field");
      } else {
        setPasswordError("");
      }
    }
  }, [confirmPass, password, passwordTouched]);
  const isValid = useMemo(() => {
    return (
      emailError.length === 0 &&
      passwordError.length === 0 &&
      emailTouched &&
      passwordTouched
    );
  }, [emailError, passwordError, emailTouched, passwordTouched]);
  return (
    <FormContainer formTitle={"Sign Up"}>
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
          <Input
            title={"Confirm Password"}
            type={"password"}
            value={confirmPass}
            placeholder="Confirm Password"
            onChange={onChangeConfirmPass}
            errorText={passwordError}
            onBlur={onBlurPassword}
          />
        </div>
        <div className={styles.button}>
          <Button
            title={"Sign Up"}
            type={ButtonType.Primary}
            onClick={onSignUpClick}
            disabled={!isValid}
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
export default SignUp;
