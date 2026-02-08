import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import axios from "axios";
import "./UserMenu.css";

const API = process.env.REACT_APP_API_BASE_URL;


const UserMenu = () => {
  const { user, setIsAuthenticated, setUser } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const firstLetter = user?.username?.charAt(0).toUpperCase() || "U";

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const logout = async () => {
    try {
      await axios.post(
        `${API}/api/auth/logout`,
        {},
        // { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
      navigate("/");
    }
  };

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="avatar" onClick={() => setOpen(!open)}>
        {firstLetter}
      </div>

      {open && (
        <div className="dropdown">
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
