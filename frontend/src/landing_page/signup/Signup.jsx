import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_BASE_URL || "https://zerodha-clone-web-app-backend.onrender.com";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    setMessage("");

    try {
      
      if (!email || !username || !password) {
        setMessage("All fields are required");
        return;
      }

      const response = await axios.post(
        `${API}/api/auth/signup`,
        { email, username, password }
      );

      if (response.status === 201) {
        setMessage("Sign up successful! Redirecting to login...");
        setTimeout(() => navigate("/signin"), 2000);
      }
    } catch (error) {
      console.error("SignUp error:", error);
      setMessage(error.response?.data?.message || "Sign Up failed!");
    } finally {
      setSigningUp(false);
    }
  };

  return (
    <div className="container text-center p-md-5 p-3">
      <div className="row">
        <h1 style={{ fontSize: "clamp(1.8rem, 6vw, 3rem)", opacity: "0.85", marginTop: "clamp(2rem, 8vw, 5rem)" }}>
          Open a free demat and trading account
        </h1>
        <h3 style={{ opacity: "0.85", fontSize: "clamp(1rem, 4vw, 1.3rem)", marginBottom: "clamp(1.5rem, 5vw, 2.5rem)" }}>
          Start investing brokerage free and join a community of 1+ crore investors and traders
        </h3>
      </div>

      <div className="row p-md-5 p-3">
        <div className="col-md-6 col-12 p-md-5 p-3">
          <img
            style={{ height: "auto", width: "100%", maxWidth: "400px", margin: "0 auto" }}
            src="media/images/account_open.png"
            alt="account"
          />
        </div>

        <div className="col-md-6 col-12">
          <h2 className="p-3 mt-md-5 mt-3" style={{ opacity: "0.92", fontSize: "clamp(1.5rem, 5vw, 1.9rem)" }}>
            Signup now
          </h2>

          <Link
            to="/signin"
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            style={{ opacity: "0.85", fontSize: "clamp(1rem, 3vw, 1.2rem)", cursor: cursorStyle }}
          >
            Have an account? <span style={{ color: "blue" }}>Sign In ...</span>
          </Link>

          <form
            onSubmit={handleSignUp}
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
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={signingUp}>
              {signingUp ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {message && (
            <p style={{ color: message.includes("successful") ? "green" : "red", marginTop: "clamp(0.75rem, 2vw, 1rem)" }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;