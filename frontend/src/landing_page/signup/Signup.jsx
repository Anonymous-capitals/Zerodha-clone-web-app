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
          <h2 className="p-3 mt-5" style={{ opacity: "0.92", fontSize: "1.9rem" }}>
            Signup now
          </h2>

          <Link
            to="/signin"
            onMouseEnter={() => setCursorStyle("pointer")}
            onMouseLeave={() => setCursorStyle("default")}
            style={{ opacity: "0.85", fontSize: "1.2rem", cursor: cursorStyle }}
          >
            Have an account? <span style={{ color: "blue" }}>Sign In ...</span>
          </Link>

          <form
            onSubmit={handleSignUp}
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              width: "17rem",
              margin: "3rem auto",
            }}
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
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
            <button type="submit" disabled={signingUp} style={{ marginTop: "1rem" }}>
              {signingUp ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {message && (
            <p style={{ color: message.includes("successful") ? "green" : "red", marginTop: "1rem" }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;