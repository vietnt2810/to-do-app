import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import {
  Background,
  Form,
  Title,
  SubTitle,
  ForgetPassword,
  Button,
  OptionLine,
  OptionButton,
} from "../components/formStyles";
import FormInput from "../components/FormInput";

const SignUp: React.FC = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const [signUpValue, setSignUpValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUpValue({ ...signUpValue, [name.toLowerCase()]: value });
  };

  const handleSignUp = () => {
    auth?.signUp(signUpValue);
  };

  const handleOption = () => {
    navigate("/login");
  };

  return auth?.accessToken ? (
    <Navigate to="/" />
  ) : (
    <Background>
      <Form>
        <Title>Sign Up</Title>
        <SubTitle>Creating a new account</SubTitle>
        <FormInput
          name="Username"
          value={signUpValue.username}
          onChange={handleChange}
        />
        <FormInput
          name="Email"
          type="email"
          value={signUpValue.email}
          onChange={handleChange}
        />
        <FormInput
          name="Password"
          type="password"
          value={signUpValue.password}
          onChange={handleChange}
          autoComplete="off"
        />
        <ForgetPassword href="/">Back to homepage</ForgetPassword>
        <Button type="button" onClick={handleSignUp}>
          SIGN UP
        </Button>
        <OptionLine>
          Already have an account?
          <OptionButton onClick={handleOption}>Login here</OptionButton>
        </OptionLine>
      </Form>
    </Background>
  );
};

export default SignUp;
