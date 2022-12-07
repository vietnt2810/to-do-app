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

const Login: React.FC = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginValue({ ...loginValue, [name.toLowerCase()]: value });
  };

  const handleLogin = () => {
    auth?.login(loginValue);
  };

  const handleOption = () => {
    navigate("/signup");
  };

  return auth?.accessToken ? (
    <Navigate to="/" />
  ) : (
    <Background>
      <Form>
        <Title>Log In</Title>
        <SubTitle>Log In to manage all your devices</SubTitle>
        <FormInput
          name="Email"
          value={loginValue.email}
          onChange={handleChange}
        />
        <FormInput
          name="Password"
          type="password"
          value={loginValue.password}
          onChange={handleChange}
        />
        <ForgetPassword href="/">Forget password?</ForgetPassword>
        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
        <OptionLine>
          Do not have an account?
          <OptionButton onClick={handleOption}>Sign Up</OptionButton>
        </OptionLine>
      </Form>
    </Background>
  );
};

export default Login;
