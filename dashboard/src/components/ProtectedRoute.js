import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user, loading, error } = useAuth();

  console.log(" ProtectedRoute:", { user, loading, error });

  if (loading) {
    return (
      <div style={{ 
        padding: "40px", 
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div>
          <h2>Loading Dashboard...</h2>
          <p>Authenticating user...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    console.warn(" ProtectedRoute: No user, redirecting to frontend");
    if (error) {
      console.error(" ProtectedRoute: Auth error:", error);
    }
    const frontendUrl = "https://zerodha-clone-web-app.vercel.app";
    window.location.href = frontendUrl;
    return null;
  }

  console.log(" ProtectedRoute: User authenticated, rendering dashboard");
  return <Outlet />;
};

export default ProtectedRoute;