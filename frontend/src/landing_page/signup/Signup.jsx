import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_BASE_URL || "https://zerodha-clone-web-app-backend.onrender.com";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [messageType, setMessageType] = useState("error");

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const calculatePasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength += 25;
    if (pwd.length >= 12) strength += 25;
    if (/[A-Z]/.test(pwd)) strength += 25;
    if (/[0-9]/.test(pwd) && /[!@#$%^&*]/.test(pwd)) strength += 25;
    return strength;
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(calculatePasswordStrength(pwd));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSigningUp(true);
    setMessage("");

    try {
      if (!email || !username || !password) {
        setMessage("All fields are required");
        setMessageType("error");
        return;
      }

      const response = await axios.post(
        `${API}/api/auth/signup`,
        { email, username, password }
      );

      if (response.status === 201) {
        setMessage("Sign up successful! Redirecting to login...");
        setMessageType("success");
        setTimeout(() => navigate("/signin"), 2000);
      }
    } catch (error) {
      console.error("SignUp error:", error);
      setMessage(error.response?.data?.message || "Sign Up failed!");
      setMessageType("error");
    } finally {
      setSigningUp(false);
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "#ef5350";
    if (passwordStrength <= 50) return "#ffa726";
    if (passwordStrength <= 75) return "#fdd835";
    return "#66bb6a";
  };

  const getPasswordStrengthLabel = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, rgba(40, 167, 69, 0.08) 0%, rgba(23, 162, 184, 0.05) 100%)",
      position: "relative",
      overflow: "hidden",
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }}>
      <div style={{
        position: "absolute",
        top: "-100px",
        right: "-100px",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(40, 167, 69, 0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        bottom: "-150px",
        left: "-100px",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(23, 162, 184, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />

      <div className="container p-md-5 p-3" style={{position: "relative", zIndex: 1}}>
        <div className="row" style={{
          textAlign: "center",
          marginBottom: "3rem",
          animation: isVisible ? "slideUpFade 0.8s ease-out both" : "none"
        }}>
          <h1 style={{
            fontSize: "clamp(1.8rem, 6vw, 3rem)",
            marginTop: "clamp(2rem, 8vw, 5rem)",
            background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "700"
          }}>
            Start Your Free Trading Simulation Account
          </h1>
          <h3 style={{
            fontSize: "clamp(1rem, 4vw, 1.3rem)",
            marginBottom: "clamp(1.5rem, 5vw, 2.5rem)",
            color: "var(--zerotrade-text-muted)",
            animation: isVisible ? "slideUpFade 0.8s ease-out 0.1s both" : "none"
          }}>
            Learn trading with our educational simulator and join a community of learners
          </h3>
        </div>

        <div className="row p-md-5 p-3" style={{
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          <div 
            className="col-md-6 col-12 p-md-5 p-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: isVisible ? "slideInLeft 0.8s ease-out 0.1s both" : "none"
            }}
          >
            <img
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
                borderRadius: "12px",
                filter: "drop-shadow(0 12px 32px rgba(40, 167, 69, 0.15))"
              }}
              src="media/images/zerotrade_hero.png"
              alt="Trading Simulation Signup"
            />
          </div>

          <div 
            className="col-md-6 col-12"
            style={{
              animation: isVisible ? "slideInRight 0.8s ease-out 0.1s both" : "none"
            }}
          >
            <h2 style={{
              fontSize: "clamp(1.5rem, 5vw, 1.9rem)",
              color: "var(--zerotrade-text)",
              fontWeight: "700",
              marginBottom: "1rem",
              textAlign: { xs: "center", md: "left" }
            }}>
              Create Your Account
            </h2>

            <p style={{
              fontSize: "0.95rem",
              color: "var(--zerotrade-text-muted)",
              marginBottom: "2rem"
            }}>
              Already have an account?{" "}
              <Link
                to="/signin"
                style={{
                  color: "var(--zerotrade-primary)",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease"
                }}
              >
                Sign In here
              </Link>
            </p>

            <form
              onSubmit={handleSignUp}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                animation: isVisible ? "slideUpFade 0.8s ease-out 0.2s both" : "none"
              }}
            >
              <div style={{position: "relative"}}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--zerotrade-text)"
                }}>
                  <i className="fa-solid fa-user" style={{marginRight: "0.5rem"}}></i>
                  Username
                </label>
                <div style={{position: "relative"}}>
                  <input
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocusedField("username")}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: "8px",
                      border: focusedField === "username" 
                        ? "2px solid var(--zerotrade-primary)" 
                        : "2px solid var(--zerotrade-border)",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      backgroundColor: focusedField === "username" 
                        ? "rgba(40, 167, 69, 0.05)" 
                        : "var(--zerotrade-bg-light)",
                      boxShadow: focusedField === "username" 
                        ? "0 4px 12px rgba(40, 167, 69, 0.15)" 
                        : "none"
                    }}
                    required
                  />
                </div>
              </div>


              <div style={{position: "relative"}}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--zerotrade-text)"
                }}>
                  <i className="fa-solid fa-envelope" style={{marginRight: "0.5rem"}}></i>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    border: focusedField === "email" 
                      ? "2px solid var(--zerotrade-primary)" 
                      : "2px solid var(--zerotrade-border)",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    backgroundColor: focusedField === "email" 
                      ? "rgba(40, 167, 69, 0.05)" 
                      : "var(--zerotrade-bg-light)",
                    boxShadow: focusedField === "email" 
                      ? "0 4px 12px rgba(40, 167, 69, 0.15)" 
                      : "none"
                  }}
                  required
                />
              </div>

              <div style={{position: "relative"}}>
                <label style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--zerotrade-text)"
                }}>
                  <i className="fa-solid fa-lock" style={{marginRight: "0.5rem"}}></i>
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "8px",
                    border: focusedField === "password" 
                      ? "2px solid var(--zerotrade-primary)" 
                      : "2px solid var(--zerotrade-border)",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    backgroundColor: focusedField === "password" 
                      ? "rgba(40, 167, 69, 0.05)" 
                      : "var(--zerotrade-bg-light)",
                    boxShadow: focusedField === "password" 
                      ? "0 4px 12px rgba(40, 167, 69, 0.15)" 
                      : "none"
                  }}
                  required
                />
                
                {password && (
                  <div style={{marginTop: "0.75rem"}}>
                    <div style={{
                      display: "flex",
                      gap: "0.25rem",
                      marginBottom: "0.5rem"
                    }}>
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: "4px",
                            backgroundColor: passwordStrength >= i * 25 ? getPasswordStrengthColor() : "#e0e0e0",
                            borderRadius: "2px",
                            transition: "background-color 0.3s ease"
                          }}
                        />
                      ))}
                    </div>
                    <span style={{
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: getPasswordStrengthColor()
                    }}>
                      Password Strength: {getPasswordStrengthLabel()}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={signingUp}
                style={{
                  padding: "0.875rem 2rem",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, #20c997 100%)",
                  color: "#fff",
                  cursor: signingUp ? "not-allowed" : "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: signingUp ? 0.7 : 1,
                  boxShadow: "0 4px 12px rgba(40, 167, 69, 0.2)",
                  marginTop: "1rem"
                }}
                onMouseEnter={(e) => {
                  if (!signingUp) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 8px 20px rgba(40, 167, 69, 0.3)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.2)";
                }}
              >
                {signingUp ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" style={{marginRight: "0.5rem"}}></i>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-arrow-right" style={{marginRight: "0.5rem"}}></i>
                    Sign Up
                  </>
                )}
              </button>
            </form>

            {message && (
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  borderRadius: "8px",
                  background: messageType === "success" 
                    ? "linear-gradient(135deg, rgba(102, 187, 106, 0.1) 0%, rgba(102, 187, 106, 0.05) 100%)"
                    : "linear-gradient(135deg, rgba(239, 83, 80, 0.1) 0%, rgba(239, 83, 80, 0.05) 100%)",
                  border: `2px solid ${messageType === "success" ? "#66bb6a" : "#ef5350"}`,
                  color: messageType === "success" ? "#2e7d32" : "#c62828",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  animation: "slideUpFade 0.4s ease-out"
                }}
              >
                <i className={`fa-solid ${messageType === "success" ? "fa-check-circle" : "fa-exclamation-circle"}`} style={{marginRight: "0.5rem"}}></i>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;