import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ✅ CRITICAL FIX: Add fallback for API URL
const API = process.env.REACT_APP_API_BASE_URL || "https://zerodha-clone-web-app-backend.onrender.com";
const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "https://zerodha-clone-web-app.vercel.app";

console.log("🔧 Dashboard Config:", { API, FRONTEND_URL });

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const verifyUser = async () => {
    try {
      const token = localStorage.getItem("token");

      console.log(" Dashboard: Verifying token...", token ? "Token found" : "No token");

      if (!token) {
        console.warn(" Dashboard: No token in localStorage");
        setUser(null);
        setLoading(false);
        return;
      }

      const verifyUrl = `${API}/api/auth/verify`;
      console.log(" Dashboard: Sending request to:", verifyUrl);
      console.log(" Dashboard: With token:", token.substring(0, 20) + "...");

      const res = await axios.get(verifyUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Dashboard: Verification successful:", res.data);

      if (res.data.authenticated && res.data.user) {
        console.log(" Dashboard: User set:", res.data.user);
        setUser(res.data.user);
      } else {
        console.warn(" Dashboard: Not authenticated from response");
        setUser(null);
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error(" Dashboard: Verification error:", {
        message: err.message,
        status: err.response?.status,
        statusText: err.response?.statusText,
        data: err.response?.data,
        url: `${API}/api/auth/verify`,
      });

      setError(err.message);
      setUser(null);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(" Dashboard AuthProvider mounted");
    verifyUser();
  }, []);

  const logout = () => {
    console.log("Dashboard: User logging out...");
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