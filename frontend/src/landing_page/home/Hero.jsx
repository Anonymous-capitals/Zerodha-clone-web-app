import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-section" style={{background: "linear-gradient(135deg, rgba(40, 167, 69, 0.03) 0%, rgba(40, 167, 69, 0.01) 100%)"}}>  {/* Updated to ZEROTRADE's primary green */}
      <div className="container p-4 p-md-5 text-center mb-5">
        <div className="row justify-content-center">
          <div style={{maxWidth: "100%", marginBottom: "2rem"}}>
            <img
              className="hero-image mb-4 mb-md-5"
              src="media/images/zerotrade_hero.png"  // Updated to original image (e.g., a generic trading/learning illustration; replace with your file)
              alt="Learn Trading with ZEROTRADE"  // Updated alt text
              style={{
                animation: "fadeIn 0.8s ease-in-out",
                filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.05))"
              }}
            />
          </div>
          <h1 className="hero-title mt-4 mt-md-5" style={{lineHeight: 1.3, marginBottom: "1.5rem"}}>
            Learn Trading with ZEROTRADE  {/* Updated to ZEROTRADE branding and educational focus */}
          </h1>
          <p className="hero-subtitle fs-5 text-muted" style={{maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.8}}>
            Educational simulator for learning about stocks, derivatives, mutual funds, ETFs, bonds, and more in a risk-free virtual environment.  {/* Rewritten to simulation and education focus */}
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="hero-cta btn btn-primary py-3 px-5 fs-5 mb-5"
            style={{
              borderRadius: "6px",
              fontWeight: "500",
              letterSpacing: "0.3px",
              minWidth: "180px"
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;