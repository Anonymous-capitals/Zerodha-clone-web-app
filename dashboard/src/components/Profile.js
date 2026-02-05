import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", maxWidth: 800, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 20 }}>Account Profile</h2>

      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        <p><strong>Username</strong><br />{user.username}</p>
        <p><strong>Email</strong><br />{user.email}</p>
        <p>
          <strong>Member since</strong><br />
          {new Date(user.createdAt).toDateString()}
        </p>

        <p><strong>Holdings</strong><br />—</p>

        <div
          style={{
            marginTop: 30,
            display: "flex",
            gap: 12,
          }}
        >
          <button
            onClick={() => navigate("/")}
            className="profile-btn"
          >
            Go to Dashboard
          </button>

          <button
            onClick={logout}
            className="profile-btn danger"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
