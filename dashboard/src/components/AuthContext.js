import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_BASE_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const verifyUser = async () => {
    try {
      const res = await axios.get(
        `${API}/api/auth/verify`,
        { withCredentials: true }
      );

      if (res.data.authenticated) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const logout = async () => {
    await axios.post(
      `${API}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
    setUser(null);
    window.location.href = `${process.env.REACT_APP_URL}`;
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
