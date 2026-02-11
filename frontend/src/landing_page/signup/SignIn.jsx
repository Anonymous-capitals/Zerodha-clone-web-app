import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_BASE_URL;
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

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
        localStorage.setItem("token", response.data.token);
        window.location.href = DASHBOARD_URL;   }
    } catch (error) {
      console.error("SignIn error:", error);
      setMessage(error.response?.data?.message || "Log In failed!");
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className="container text-center p-5">
      <div className="row">
        <h1 style={{ fontSize: "3rem", opacity: "0.85", marginTop: "5rem" }}>
          Open a free demat and trading account
        </h1>
        <h3 style={{ opacity: "0.85", fontSize: "1.3rem", marginBottom: "2.5rem" }}>
          Start investing brokerage free and join a community of 1+ crore investors and traders
        </h3>
      </div>

      <div className="row p-5">
        <div className="col-6 p-5">
          <img
            style={{ height: "47vh", width: "35vw", margin: "0 auto" }}
            src="media/images/account_open.png"
            alt="account"
          />
        </div>

        <div className="col-6">
          <h2 className="p-3 mt-5" style={{ opacity: "0.88", fontSize: "1.9rem" }}>
            Log-In
          </h2>

          <Link
            to="/signup"
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            style={{ opacity: "0.85", fontSize: "1.2rem", cursor: cursorStyle }}
          >
            Don't have an account? <span style={{ color: "blue" }}>Sign Up ...</span>
          </Link>

          <form
            onSubmit={handleSignIn}
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              width: "17rem",
              margin: "3rem auto",
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loggingIn} style={{ marginTop: "1rem" }}>
              {loggingIn ? "Logging in..." : "Log In"}
            </button>
          </form>

          {message && <p style={{ color: "red", marginTop: "1rem" }}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;