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
        padding: "10px",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "clamp(300px, 90vw, 400px)",
          borderRadius: 8,
          padding: "clamp(15px, 4vw, 20px)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <h2 style={{ marginBottom: "clamp(8px, 2vw, 10px)" }}>Profile</h2>

        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Joined:</strong>{" "}
          {new Date(user.createdAt).toDateString()}
        </p>

        <p><strong>Total Holdings:</strong> —</p>

        <div style={{ marginTop: "clamp(15px, 4vw, 20px)", display: "flex", gap: "clamp(8px, 2vw, 10px)", flexWrap: "wrap" }}>
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
