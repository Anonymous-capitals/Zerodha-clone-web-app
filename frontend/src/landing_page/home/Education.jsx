import React, { useState, useEffect } from 'react';

function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      background: "linear-gradient(180deg, var(--zerotrade-bg) 0%, var(--zerotrade-section-alt) 100%)",
      paddingTop: "2rem",
      paddingBottom: "2rem"
    }}>
      <div className="container mt-4 mt-md-5 px-3 px-md-5">
        <div className="row p-3 p-md-5 g-4 align-items-center">
          <div 
            className="col-12 col-lg-6 order-2 order-lg-1 text-center"
            style={{
              animation: isVisible ? "slideInLeft 0.8s ease-out 0.1s both" : "none"
            }}
          >
            <div className="mt-4 mt-lg-5">
              <img 
                className="education-img" 
                src="media/images/learning_resources.png"
                alt="Learning Resources"
                style={{
                  maxWidth: "80%",
                  filter: "drop-shadow(0 8px 24px rgba(40, 167, 69, 0.15))"
                }}
              />
            </div>
          </div>
          <div 
            className="col-12 col-lg-6 order-1 order-lg-2 p-3 p-md-5"
            style={{
              animation: isVisible ? "slideInRight 0.8s ease-out both" : "none"
            }}
          >
            <h1 
              className="mb-4 mb-md-5 education-title"
              style={{
                background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Free Educational Resources in ZEROTRADE
            </h1>
            <p 
              style={{
                fontSize: "1rem", 
                lineHeight: 1.7, 
                marginBottom: "1.5rem",
                color: "var(--zerotrade-text-muted)",
                animation: isVisible ? "slideUpFade 0.6s ease-out 0.2s both" : "none"
              }}
            >
              Explore our comprehensive trading education guide, covering basics to advanced strategies in a virtual environment.
            </p>
            <a 
              href="/" 
              style={{
                color: "var(--zerotrade-primary)",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "2rem",
                transition: "all 0.3s ease",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                animation: isVisible ? "slideInLeft 0.6s ease-out 0.3s both" : "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(40, 167, 69, 0.1)";
                e.target.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateX(0)";
              }}
            >
              Learn Trading Basics <i className="fa-solid fa-arrow-right" style={{marginLeft: "0.5rem"}}></i>
            </a>
            <p 
              style={{
                fontSize: "1rem", 
                lineHeight: 1.7, 
                marginTop: "2rem", 
                marginBottom: "1.5rem",
                color: "var(--zerotrade-text-muted)",
                animation: isVisible ? "slideUpFade 0.6s ease-out 0.4s both" : "none"
              }}
            >
              Join our active community for discussions on trading strategies and market insights.
            </p>
            <a 
              href="/" 
              style={{
                color: "var(--zerotrade-primary)",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                animation: isVisible ? "slideInLeft 0.6s ease-out 0.5s both" : "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(40, 167, 69, 0.1)";
                e.target.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "translateX(0)";
              }}
            >
              Community Discussions <i className="fa-solid fa-arrow-right" style={{marginLeft: "0.5rem"}}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;