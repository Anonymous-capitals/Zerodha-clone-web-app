import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(23, 162, 184, 0.05) 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background decorative elements */}
      <div 
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(40, 167, 69, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(23, 162, 184, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />
      
      <div className="container p-4 p-md-5 text-center mb-5" style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        position: "relative",
        zIndex: 1
      }}>
        <div className="row">
          <h1 
            className="open-account-title mt-3" 
            style={{
              marginBottom: "1rem",
              animation: isVisible ? "slideUpFade 0.8s ease-out both" : "none",
              background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Start Your Trading Journey
          </h1>
          <p 
            className="text-muted mt-4 mb-4 open-account-subtitle" 
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "var(--zerotrade-text-muted)",
              animation: isVisible ? "slideUpFade 0.8s ease-out 0.1s both" : "none"
            }}
          >
            Explore simulated trading with easy access, educational tools, and risk-free learning.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="open-account-cta btn btn-primary py-3 px-5 mt-3 fs-5 mb-5"
            style={{
              borderRadius: "8px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              minWidth: "200px",
              animation: isVisible ? "slideUpFade 0.8s ease-out 0.2s both" : "none",
              position: "relative",
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;