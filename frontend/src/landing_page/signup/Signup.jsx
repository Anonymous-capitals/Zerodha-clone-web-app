import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthContext";
const API = process.env.REACT_APP_API_BASE_URL;
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const [cursorStyle, setCursorStyle] = useState("default");

  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${API}/api/auth/signup`,
        { email, username, password },
        { withCredentials: true }
      );

      if (response.status === 201) {
        // User is created successfully
        // Redirect to signin (no auto-login here)
        setIsAuthenticated(false);
        navigate("/signin");
      }
    } catch (error) {
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
              gap: "0.8rem",
              marginLeft: "8.5rem",
            }}
          >
            <input
              type="email"
              placeholder="  Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="  Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="  Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {message && <div style={{ color: "red" }}>{message}</div>}

            <button type="submit" className="btn btn-primary fs-5">
              {signingUp ? "Signing up..." : "Sign up ..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
