import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import api from "../api/axiosConfig";

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
      const res = await api.get("/userHoldings");
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
    <div style={{ 
      padding: "clamp(20px, 5vw, 40px)", 
      maxWidth: "100%", 
      margin: "0 auto",
      width: "100%"
    }}>
      <h2 style={{ marginBottom: "clamp(15px, 3vw, 20px)" }}>Account Profile</h2>

      <div
        style={{
          background: "#fff",
          padding: "clamp(15px, 4vw, 24px)",
          borderRadius: 12,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          overflow: "auto"
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
