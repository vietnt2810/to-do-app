import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes: React.FC = () => {
  let auth = localStorage.getItem("accessToken");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
