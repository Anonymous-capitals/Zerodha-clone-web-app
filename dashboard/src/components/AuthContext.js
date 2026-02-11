import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_BASE_URL;
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const verifyUser = async () => {
    try {
      // ✅ FIXED: Get token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        setUser(null);
        return;
      }

      const res = await axios.get(`${API}/api/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Send token properly
        },
      });

      if (res.data.authenticated) {
        setUser(res.data.user);
      } else {
        setUser(null);
        localStorage.removeItem("token");
      }
    } catch (err) {
      console.error("Verify failed:", err.message);
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
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = process.env.REACT_APP_FRONTEND_URL || "/";
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);