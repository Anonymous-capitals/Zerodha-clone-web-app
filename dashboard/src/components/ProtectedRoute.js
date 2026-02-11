// dashboard/src/components/ProtectedRoute.js
import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user, loading, error } = useAuth();

  console.log("🛡️ ProtectedRoute check:", { user, loading, error });

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Loading authentication...</p>
      </div>
    );
  }

  if (!user) {
    console.warn("❌ User not authenticated, redirecting to frontend...");
    if (error) {
      console.error("Auth error was:", error);
    }
    const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "https://zerodha-clone-web-app.vercel.app";
    window.location.href = frontendUrl;
    return null;
  }

  console.log("✅ User authenticated, rendering protected routes");
  return <Outlet />;
};

export default ProtectedRoute;