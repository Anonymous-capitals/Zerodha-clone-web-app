import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="hero-section" 
      style={{
        background: "linear-gradient(135deg, rgba(40, 167, 69, 0.08) 0%, rgba(23, 162, 184, 0.04) 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(40, 167, 69, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(23, 162, 184, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none"
        }}
      />
      
      <div className="container p-4 p-md-5 text-center mb-5" style={{position: "relative", zIndex: 1}}>
        <div className="row justify-content-center">
          <div style={{maxWidth: "300%", marginBottom: "2rem"}}>
            <img
              className="hero-image"
              src="media/images/zerotrade_hero.png"
              alt="Learn Trading with ZEROTRADE"
              style={{
                animation: isVisible ? "slideUpFade 0.8s ease-out, float 3s ease-in-out infinite" : "none",
                animationDelay: isVisible ? "0s, 0.8s" : "0s"
              }}
            />
          </div>
          <h1 
            className="hero-title mt-4 mt-md-5" 
            style={{
              lineHeight: 1.3, 
              marginBottom: "1.5rem",
              animation: isVisible ? "slideUpFade 0.8s ease-out 0.1s both" : "none"
            }}
          >
            Learn Trading with ZEROTRADE
          </h1>
          <p 
            className="hero-subtitle fs-5 text-muted" 
            style={{
              maxWidth: "600px", 
              margin: "0 auto 2rem", 
              lineHeight: 1.8,
              animation: isVisible ? "slideUpFade 0.8s ease-out 0.2s both" : "none"
            }}
          >
            Educational simulator for learning about stocks, derivatives, mutual funds, ETFs, bonds, and more in a risk-free virtual environment.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="hero-cta btn btn-primary py-3 px-5 fs-5 mb-5"
            style={{
              borderRadius: "8px",
              fontWeight: "600",
              letterSpacing: "0.5px",
              minWidth: "200px",
              animation: isVisible ? "slideUpFade 0.8s ease-out 0.3s both" : "none",
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

export default Hero;