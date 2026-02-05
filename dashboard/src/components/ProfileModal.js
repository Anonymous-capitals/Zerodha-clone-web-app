import React from "react";
import { useAuth } from "./AuthContext";

const ProfileModal = ({ onClose }) => {
  const { user, logout } = useAuth();

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
      }}
    >
      <div
        style={{
          background: "#fff",
          width: 400,
          borderRadius: 8,
          padding: 20,
        }}
      >
        <h2 style={{ marginBottom: 10 }}>Profile</h2>

        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Joined:</strong>{" "}
          {new Date(user.createdAt).toDateString()}
        </p>

        <p><strong>Total Holdings:</strong> —</p>

        <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
          <button onClick={onClose}>Close</button>
          <button
            onClick={logout}
            style={{ background: "red", color: "#fff" }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
