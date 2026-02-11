import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
const API = process.env.REACT_APP_API_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        // ✅ FIXED: Get token from localStorage and send as Bearer token
        const token = localStorage.getItem("token");

        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API}/api/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token in header
          },
        });

        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        console.error("Auth verification failed:", error);
        setIsAuthenticated(false);
        localStorage.removeItem("token"); // Clear invalid token
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);