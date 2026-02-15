import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const API = process.env.REACT_APP_API_BASE_URL || "https://zerodha-clone-web-app-backend.onrender.com";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [holdings, setHoldings] = useState([]);
  const [loadingHoldings, setLoadingHoldings] = useState(false);

  useEffect(() => {
    if (user?.id) {
      fetchUserHoldings();
    }
  }, [user?.id]);

  const fetchUserHoldings = async () => {
    try {
      setLoadingHoldings(true);
      const res = await axios.get(`${API}/userHoldings/${user.id}`);
      setHoldings(res.data || []);
    } catch (err) {
      console.error("Failed to load user holdings:", err);
      setHoldings([]);
    } finally {
      setLoadingHoldings(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toDateString();
    } catch (error) {
      return "N/A";
    }
  };

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
        <p><strong>Username</strong><br />{user?.username || "—"}</p>
        <p><strong>Email</strong><br />{user?.email || "—"}</p>
        <p>
          <strong>Member since</strong><br />
          {formatDate(user?.createdAt)}
        </p>

        <p><strong>Holdings</strong><br />{loadingHoldings ? "Loading..." : holdings.length} holdings</p>

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
