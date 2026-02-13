import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user, loading, error } = useAuth();
  if (loading) {
    return (
      <div style={{
        padding: "40px",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#f5f5f5"
      }}>
        <h2>Loading...</h2>
        <p>Authenticating your session...</p>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>
    );
  }

  if (!user) {
    const frontendUrl = process.env.REACT_APP_URL || "https://zerodha-clone-web-app-ranit-gopes-projects.vercel.app";
    // Use replace to prevent back button issues
    window.location.replace(frontendUrl);
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;