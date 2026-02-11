import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {
  const { user, loading, error } = useAuth();

  console.log("🛡️ ProtectedRoute check:", { user, loading, error });

  // ✅ Show loading state while verifying
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

  // ✅ If NO user after loading, redirect
  if (!user) {
    console.warn("🛡️ ProtectedRoute: No user authenticated, redirecting to frontend...");
    const frontendUrl = "https://zerodha-clone-web-app.vercel.app";
    // Use replace to prevent back button issues
    window.location.replace(frontendUrl);
    return null;
  }

  console.log("✅ ProtectedRoute: User authenticated as:", user.email);
  return <Outlet />;
};

export default ProtectedRoute;