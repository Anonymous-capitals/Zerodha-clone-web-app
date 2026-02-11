// dashboard/src/components/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_BASE_URL;
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "https://zerodha-clone-web-app.vercel.app";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const verifyUser = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log("🔍 Verifying token...", token ? `Token found (${token.substring(0, 10)}...)` : "No token");

      if (!token) {
        console.warn("⚠️ No token found in localStorage");
        setUser(null);
        setLoading(false);
        return;
      }

      console.log("📡 Sending verification request to:", `${API}/api/auth/verify`);

      const res = await axios.get(`${API}/api/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Verify response:", res.data);

      if (res.data.authenticated && res.data.user) {
        console.log("✅ User authenticated:", res.data.user);
        setUser(res.data.user);
      } else {
        console.warn("⚠️ Authentication failed - not authenticated");
        setUser(null);
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error("❌ Verify failed:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
      });

      setError(err.message);
      setUser(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const logout = () => {
    console.log("🚪 Logging out...");
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