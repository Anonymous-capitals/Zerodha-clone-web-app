// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// const API = process.env.REACT_APP_API_BASE_URL;

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const verifyUser = async () => {
//     try {
//       const res = await axios.get(
//         `${API}/api/auth/verify`,
//         { withCredentials: true }
//       );

//       if (res.data.authenticated) {
//         setUser(res.data.user);
//       } else {
//         setUser(null);
//       }
//     } catch {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     verifyUser();
//   }, []);

//   const logout = async () => {
//     await axios.post(
//       `${API}/api/auth/logout`,
//       {},
//       // { withCredentials: true }
//     );
//     setUser(null);
//     window.location.href = `${process.env.REACT_APP_URL}`;
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_BASE_URL;

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const verifyUser = async () => {
    const token = localStorage.getItem("token");

    // ✅ If no token, don't call backend
    if (!token) {
      setLoading(false);
      setUser(null);
      return;
    }

    try {
      const res = await axios.get(
        `${API}/api/auth/verify`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user || null);
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
    window.location.href = process.env.REACT_APP_URL;
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
