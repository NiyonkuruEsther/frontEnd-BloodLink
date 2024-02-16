import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
