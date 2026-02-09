import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = process.env.REACT_APP_URL;
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
