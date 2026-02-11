import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ✅ HARDCODED fallback URLs
const API = "https://zerodha-clone-web-app-backend.onrender.com";
const FRONTEND_URL = "https://zerodha-clone-web-app.vercel.app";

console.log("📋 Dashboard Auth Config:", { API, FRONTEND_URL });

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const verifyUser = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("🔐 Dashboard: Checking localStorage for token...");

      if (!token) {
        console.warn("⚠️ Dashboard: No token found in localStorage");
        setUser(null);
        setLoading(false);
        setError("No authentication token found");
        return;
      }

      console.log("✅ Dashboard: Token found, length:", token.length);
      console.log("🔄 Dashboard: Verifying token with backend at:", `${API}/api/auth/verify`);

      const response = await axios.get(`${API}/api/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log("✅ Dashboard: Verification response:", response.data);

      if (response.data.authenticated && response.data.user) {
        console.log("✅ Dashboard: Authentication successful, user:", response.data.user.email);
        setUser(response.data.user);
        setError(null);
      } else {
        console.warn("⚠️ Dashboard: Backend says not authenticated");
        setUser(null);
        setError("Authentication failed");
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error("❌ Dashboard: Verification error:", {
        message: err.message,
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        url: `${API}/api/auth/verify`,
      });

      setUser(null);
      setError(err.response?.data?.message || err.message);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("🚀 Dashboard AuthProvider: Mounted, calling verifyUser");
    verifyUser();
  }, []);

  const logout = () => {
    console.log("🚪 Dashboard: Logging out...");
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = FRONTEND_URL;
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);