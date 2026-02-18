import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";
import "./UserMenu.css";

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const firstLetter = user?.username?.charAt(0).toUpperCase() || "U";

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="avatar" onClick={() => setOpen(!open)}>
        {firstLetter}
      </div>

      {open && (
        <div className="dropdown">
          <button
            onClick={() => {
              window.location.href = "/profile";
            }}
          >
            Profile
          </button>

          <button className="logout" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
