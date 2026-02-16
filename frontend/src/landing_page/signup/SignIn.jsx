import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_BASE_URL || "https://zerodha-clone-web-app-backend.onrender.com"; // Updated to ZEROTRADE-themed URL

const getDashboardURL = () => {
  const url = process.env.REACT_APP_DASHBOARD_URL || "";
  if (!url) {
    console.error("REACT_APP_DASHBOARD_URL is not set in .env file!");
    return null;
  }
  // Remove trailing slash if present
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

const DASHBOARD_URL = getDashboardURL();

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    setMessage("");

    try {
      if (!email || !password) {
        setMessage("Please enter email and password");
        return;
      }

      const response = await axios.post(
        `${API}/api/auth/login`,
        { email, password }
      );

      if (response.status === 200 && response.data.token) {
        if (!DASHBOARD_URL) {
          setMessage(
            "Configuration Error: Dashboard URL is not set. Please contact support. Check browser console for details."
          );
          console.error(
            "Cannot redirect - DASHBOARD_URL from environment is missing",
            { env: process.env.REACT_APP_DASHBOARD_URL }
          );
          return;
        }

        const token = response.data.token;
        const dashboardUrlWithToken = `${DASHBOARD_URL}?token=${encodeURIComponent(token)}`;
        window.location.href = dashboardUrlWithToken;
      }
    } catch (error) {
      console.error("SignIn error:", error);
      setMessage(error.response?.data?.message || "Log In failed!");
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className="container text-center p-md-5 p-3">
      <div className="row">
        <h1 style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", opacity: "0.85", marginTop: "clamp(2rem, 8vw, 5rem)" }}>
          Start Your Free Trading Simulation  {/* Updated to ZEROTRADE-focused, generic title */}
        </h1>
        <h3 style={{ opacity: "0.85", fontSize: "clamp(1rem, 4vw, 1.3rem)", marginBottom: "clamp(1.5rem, 5vw, 2.5rem)" }}>
          Learn trading with our educational simulator and join a community of learners  {/* Updated to educational focus, removed Zerodha-specific claims */}
        </h3>
      </div>

      <div className="row p-md-5 p-3">
        <div className="col-md-6 col-12 p-md-5 p-3">
          <img
            style={{ height: "auto", width: "100%", maxWidth: "400px", margin: "0 auto" }}
            src="media/images/simulation_start.png"  // Updated to a new, original image (e.g., a generic trading chart; replace with your file)
            alt="Trading Simulation"  // Updated alt text to generic
          />
        </div>

        <div className="col-md-6 col-12">
          <h2 className="p-3 mt-md-5 mt-3" style={{ opacity: "0.88", fontSize: "clamp(1.5rem, 5vw, 1.9rem)" }}>
            Log-In
          </h2>

          <Link
            to="/signup"
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            style={{ opacity: "0.85", fontSize: "clamp(1rem, 3vw, 1.2rem)", cursor: cursorStyle }}
          >
            Don't have an account? <span style={{ color: "#28a745" }}>Sign Up ...</span>  {/* Updated color to ZEROTRADE's primary green */}
          </Link>

          <form
            onSubmit={handleSignIn}
            style={{
              marginTop: "clamp(1.5rem, 5vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              width: "clamp(200px, 90%, 17rem)",
              margin: "clamp(1.5rem, 5vw, 3rem) auto",
              gap: "clamp(0.8rem, 2vw, 1.2rem)",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loggingIn}>
              {loggingIn ? "Logging in..." : "Log In"}
            </button>
          </form>

          {message && <p style={{ color: "red", marginTop: "clamp(0.75rem, 2vw, 1rem)" }}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;