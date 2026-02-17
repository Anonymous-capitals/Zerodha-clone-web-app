import React, { useState, useEffect } from 'react';

function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const StatItem = ({ title, description, delay }) => (
    <div
      style={{
        animation: isVisible ? `slideUpFade 0.6s ease-out ${delay}s both` : "none",
        padding: "1.5rem",
        borderLeft: "4px solid var(--zerotrade-primary)",
        borderRadius: "4px",
        marginTop: "1.5rem",
        background: "linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, transparent 100%)",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = "var(--zerotrade-accent)";
        e.currentTarget.style.transform = "translateX(8px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = "var(--zerotrade-primary)";
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 style={{
        color: "var(--zerotrade-text)",
        marginTop: "0",
        marginBottom: "0.75rem",
        fontSize: "1.1rem",
        fontWeight: 600
      }}>
        {title}
      </h3>
      <p style={{
        marginBottom: "0",
        color: "var(--zerotrade-text-muted)",
        lineHeight: 1.6,
        fontSize: "0.95rem"
      }}>
        {description}
      </p>
    </div>
  );

  return (
    <div style={{
      background: "var(--zerotrade-bg)",
      position: "relative"
    }}>
      <div className="container">
        <div className="row p-3 p-md-5 g-4" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
          <div className="col-12 col-lg-6 p-3 p-md-5">
            <h1 
              className="stats-title mb-4 mb-md-5"
              style={{
                animation: isVisible ? "slideUpFade 0.6s ease-out both" : "none",
                background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Learn with Confidence in ZEROTRADE
            </h1>

            <StatItem 
              title="Learner-first always"
              description="Thousands of learners trust ZEROTRADE for risk-free simulations, helping them understand trading without real financial risk."
              delay={0.1}
            />

            <StatItem 
              title="No distractions, just learning"
              description="No gimmicks or spam. High-quality tools for learning at your own pace."
              delay={0.2}
            />

            <StatItem 
              title="The ZEROTRADE Learning Ecosystem"
              description="Not just a simulator, but a complete learning environment. Our tools and resources help you master trading skills virtually."
              delay={0.3}
            />

            <StatItem 
              title="Learn better with simulations"
              description="With features like virtual alerts and risk controls, we help you practice smart trading habits."
              delay={0.4}
            />
          </div>

          <div className="col-12 col-lg-6" style={{
            animation: isVisible ? "slideInRight 0.8s ease-out 0.1s both" : "none"
          }}>
            <div className="mt-4 mt-lg-5">
              <img 
                className="stats-image" 
                src="media/images/learning_ecosystem.png"
                alt="ZEROTRADE Learning Ecosystem"
                style={{
                  maxWidth: "100%", 
                  borderRadius: "12px",
                  filter: "drop-shadow(0 12px 32px rgba(40, 167, 69, 0.15))"
                }}
              />
            </div>
            <div className="text-center stats-links mt-4" style={{
              animation: isVisible ? "fadeIn 0.6s ease-out 0.5s both" : "none"
            }}>
              <a 
                href="/products"
                style={{
                  color: "var(--zerotrade-primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  marginRight: "2rem",
                  marginBottom: "0.5rem",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  position: "relative"
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
                Explore our simulators <i className="fa-solid fa-arrow-right" style={{marginLeft: "0.5rem", transition: "all 0.3s ease"}}></i>
              </a>
              <a 
                href="/signup"
                style={{
                  color: "var(--zerotrade-primary)",
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                  padding: "0.5rem 1rem",
                  borderRadius: "6px",
                  position: "relative"
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
                Start Your Simulation <i className="fa-solid fa-arrow-right" style={{marginLeft: "0.5rem", transition: "all 0.3s ease"}}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;