import { User } from "types/user.type";

export type signUpValue = {
  username: string;
  email: string;
  password: string;
};

export type loginValue = {
  email: string;
  password: string;
};

export type userValue = {
  username: string;
};

export interface AuthContextType {
  user: User | null;
  accessToken: string;
  signUp: (signUpValue: signUpValue) => void;
  login: (loginValue: loginValue) => void;
  logout: () => void;
  updateUser: (userValue: userValue) => void;
}
