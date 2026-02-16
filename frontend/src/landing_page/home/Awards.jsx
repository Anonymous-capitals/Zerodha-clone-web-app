import React, { useState, useEffect } from 'react';

function Awards() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { text: "Virtual Options", icon: "📈" },
    { text: "Commodity Simulations", icon: "🛢️" },
    { text: "Currency Derivatives", icon: "💱" },
    { text: "Stock & IPO Simulations", icon: "📊" },
    { text: "Mutual Fund Learning", icon: "💼" },
    { text: "Bonds and More", icon: "🏦" }
  ];

  return (
    <div style={{
      background: "linear-gradient(180deg, var(--zerotrade-section-alt) 0%, var(--zerotrade-bg) 100%)",
      position: "relative"
    }}>
      <div className="container mt-4 mt-md-5 py-5">
        <div className="row align-items-center g-4">
          <div 
            className="col-12 col-lg-6 p-3 p-md-5 text-center text-lg-start"
            style={{
              animation: isVisible ? "slideInLeft 0.8s ease-out" : "none"
            }}
          >
            <img 
              src="media/images/trading_simulator.png"
              alt="Leading Simulator" 
              className="award-image"
              style={{
                maxWidth: "500px", 
                width: "100%",
                margin: "0 auto",
                filter: "drop-shadow(0 8px 24px rgba(40, 167, 69, 0.15))"
              }}
            />
          </div>
          <div 
            className="col-12 col-lg-6 p-3 p-md-5 mt-lg-5"
            style={{
              animation: isVisible ? "slideInRight 0.8s ease-out 0.1s both" : "none"
            }}
          >
            <h1 
              className="awards-title"
              style={{
                background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Leading Educational Trading Simulator
            </h1>
            <p 
              className="mb-4 mb-md-5" 
              style={{
                fontSize: "1rem", 
                lineHeight: 1.7,
                color: "var(--zerotrade-text-muted)"
              }}
            >
              Thousands of learners use ZEROTRADE to explore trading and investing in virtual environments, including:
            </p>
            <div className="row g-3 mb-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="col-6"
                  style={{
                    animation: isVisible ? `slideUpFade 0.6s ease-out ${0.2 + index * 0.1}s both` : "none"
                  }}
                >
                  <div 
                    style={{
                      padding: "1rem",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, var(--zerotrade-primary-light) 0%, rgba(40, 167, 69, 0.05) 100%)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      border: "1px solid rgba(40, 167, 69, 0.2)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(40, 167, 69, 0.2)";
                      e.currentTarget.style.borderColor = "var(--zerotrade-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "rgba(40, 167, 69, 0.2)";
                    }}
                  >
                    <p style={{
                      margin: 0,
                      fontSize: "1.5rem",
                      marginBottom: "0.5rem"
                    }}>
                      {feature.icon}
                    </p>
                    <p style={{
                      margin: 0, 
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      color: "var(--zerotrade-text)"
                    }}>
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <img 
              className="award-image mt-4" 
              src="media/images/educational_press.png"
              alt="Educational Press" 
              style={{
                maxWidth: "100%",
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;