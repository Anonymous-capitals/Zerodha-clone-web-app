import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  
  if (loading) {
    return null; 
  }

 
  if (!user) {
    window.location.href = process.env.REACT_APP_URL;
    return null;
  }

  
  return <Outlet />;
};

export default ProtectedRoute;
