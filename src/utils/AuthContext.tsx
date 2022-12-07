import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "api/api";

import { User } from "types/types";

type signUpValue = {
  username: string;
  email: string;
  password: string;
};

type loginValue = {
  email: string;
  password: string;
};

type userValue = {
  username: string;
};

interface AuthContext {
  user: User | null;
  accessToken: string;
  loadUser: () => void;
  signUp: (signUpValue: signUpValue) => void;
  login: (loginValue: loginValue) => void;
  logout: () => void;
  updateUser: (userValue: userValue) => void;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const [accessToken, setAccessToken] = useState("");

  const loadUser = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      setAccessToken(token);
      setUser(JSON.parse(localStorage.getItem("user") as string));
    }
  };

  const updateUser = (user: userValue) => {
    api
      .patch(
        `users/${JSON.parse(localStorage.getItem("user") as string).id}`,
        user
      )
      .then((response) => {
        delete response.data.password;
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      });
  };

  const signUp = (signUpValue: signUpValue) => {
    api
      .post("register", {
        username: signUpValue.username,
        email: signUpValue.email,
        password: signUpValue.password,
      })
      .then((response) => {
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const login = (loginValue: loginValue) => {
    api
      .post("login", {
        email: loginValue.email,
        password: loginValue.password,
      })
      .then((response) => {
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  const logout = () => {
    setUser(null);
    setAccessToken("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, loadUser, signUp, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
