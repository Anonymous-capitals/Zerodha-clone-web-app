import React, { useState, useEffect } from 'react';

function Pricing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const PricingCard = ({ label, price, description, isHighlight, delay }) => (
    <div 
      className="col-12 col-sm-4"
      style={{
        animation: isVisible ? `slideUpFade 0.6s ease-out ${delay}s both` : "none"
      }}
    >
      <div 
        style={{
          border: isHighlight ? "2px solid var(--zerotrade-primary)" : "1px solid var(--zerotrade-border)",
          borderRadius: "12px",
          padding: "2.5rem 2rem",
          background: isHighlight 
            ? "linear-gradient(135deg, var(--zerotrade-primary-light) 0%, rgba(40, 167, 69, 0.05) 100%)"
            : "var(--zerotrade-bg)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "100%",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--zerotrade-primary)";
          e.currentTarget.style.boxShadow = "0 16px 32px rgba(40, 167, 69, 0.2)";
          e.currentTarget.style.transform = "translateY(-8px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = isHighlight ? "var(--zerotrade-primary)" : "var(--zerotrade-border)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.08)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {isHighlight && (
          <div 
            style={{
              position: "absolute",
              top: "-40px",
              right: "-40px",
              width: "100px",
              height: "100px",
              background: "radial-gradient(circle, rgba(40, 167, 69, 0.2) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}
          />
        )}
        <p style={{
          marginBottom: "0.5rem",
          color: "var(--zerotrade-primary)",
          fontWeight: 700,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          position: "relative",
          zIndex: 1
        }}>
          {label}
        </p>
        <h2 style={{
          marginBottom: "0.5rem",
          marginTop: "0.5rem",
          color: "var(--zerotrade-text)",
          fontSize: "2.5rem",
          fontWeight: 700,
          position: "relative",
          zIndex: 1
        }}>
          {price}
        </h2>
        <p style={{
          marginBottom: 0,
          color: "var(--zerotrade-text-muted)",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          position: "relative",
          zIndex: 1
        }}>
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div style={{
      background: "linear-gradient(180deg, var(--zerotrade-bg) 0%, var(--zerotrade-section-alt) 100%)"
    }}>
      <div className="container px-3 px-md-5 zerotrade-pricing-section py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-4" style={{
            animation: isVisible ? "slideInLeft 0.8s ease-out both" : "none"
          }}>
            <h1 
              className="mb-3 home-pricing-title"
              style={{
                fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
                background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              ZEROTRADE Pricing
            </h1>
            <p 
              className="text-muted mb-4 mt-3 mt-md-5" 
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "var(--zerotrade-text-muted)",
                animation: isVisible ? "slideUpFade 0.6s ease-out 0.1s both" : "none"
              }}
            >
              Experience free educational simulations while learning about trading costs. No hidden charges in virtual learning.
            </p>
            <a 
              href="/pricing" 
              style={{
                color: "var(--zerotrade-primary)",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.3s ease",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                animation: isVisible ? "slideInLeft 0.6s ease-out 0.2s both" : "none"
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
              See pricing <i className="fa-solid fa-arrow-right" style={{marginLeft: "0.5rem"}}></i>
            </a>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row g-3 g-md-4 text-center">
              <PricingCard 
                label="Free Account"
                price="₹0"
                description="No charges for virtual account setup"
                isHighlight={false}
                delay={0.1}
              />
              <PricingCard 
                label="Premium"
                price="₹0"
                description="Free equity simulations and virtual mutual funds"
                isHighlight={true}
                delay={0.2}
              />
              <PricingCard 
                label="Learn"
                price="Free"
                description="Intraday and derivatives simulations"
                isHighlight={false}
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;