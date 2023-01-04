import { Navigate, Outlet } from "react-router-dom";

const AlreadyAuth: React.FC = () => {
  let auth = localStorage.getItem("accessToken");

  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default AlreadyAuth;
