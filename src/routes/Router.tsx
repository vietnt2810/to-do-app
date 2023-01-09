import { Route, Routes } from "react-router-dom";

import Login from "features/auth/login/Login";
import SignUp from "features/auth/signUp/SignUp";
import MainLayoutRoutes from "./MainLayoutRoutes";
import AlreadyAuth from "components/authRoutes/AlreadyAuth";

const Router = () => {
  return (
    <Routes>
      <Route element={<AlreadyAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<MainLayoutRoutes />} />
    </Routes>
  );
};

export default Router;
