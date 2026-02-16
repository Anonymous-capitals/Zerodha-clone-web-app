import React, { useState, useEffect } from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <footer className="main-footer">
      <div className="container border-top mt-5 footer-container">
        <div className="row mt-4 mt-md-5 g-4">
          <div 
            className="col-12 col-md-6 col-lg-3 footer-col"
            style={{
              animation: isVisible ? "slideUpFade 0.6s ease-out both" : "none"
            }}
          >
            <span style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              background: "linear-gradient(135deg, var(--zerotrade-primary) 0%, var(--zerotrade-accent) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
              marginBottom: "1rem"
            }}>
              ZEROTRADE
            </span>
            <p className="footer-copyright">&copy; {currentYear}, ZEROTRADE. All rights reserved.</p>
            <div className="social-links" style={{display: "flex", gap: "1rem", marginTop: "1rem"}}>
              {[
                { icon: "fa-x-twitter", title: "Twitter" },
                { icon: "fa-facebook", title: "Facebook" },
                { icon: "fa-instagram", title: "Instagram" },
                { icon: "fa-linkedin", title: "LinkedIn" },
                { icon: "fa-youtube", title: "YouTube" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="/" 
                  title={social.title} 
                  style={{
                    color: "var(--zerotrade-text-muted)",
                    transition: "all 0.3s ease",
                    transform: "scale(1)",
                    pointerEvents: "none",
                    opacity: 0.6
                  }}
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Company",
              links: ["About", "Products", "Pricing", "Referral Program", "Careers", "Tech Blog", "Press & Media", "Community Support"]
            },
            {
              title: "Support",
              links: ["Contact Us", "Support Portal", "Trading Blog", "Fees & Charges", "Resources", "Videos", "Market Overview", "File a Complaint"]
            },
            {
              title: "Account",
              links: ["Open an Account", "Fund Transfer", "Demo Account", "Commodity Trading", "Account Setup"]
            }
          ].map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className="col-6 col-md-3 col-lg-3 footer"
              style={{
                animation: isVisible ? `slideUpFade 0.6s ease-out ${0.1 + sectionIndex * 0.05}s both` : "none"
              }}
            >
              <p style={{
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--zerotrade-text)",
                fontSize: "0.95rem"
              }}>
                {section.title}
              </p>
              {section.links.map((link, index) => (
                <a 
                  key={index}
                  href="/"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--zerotrade-text)",
                    opacity: 0.8,
                    transition: "all 0.3s ease",
                    paddingLeft: 0,
                    fontSize: "0.9rem"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "1";
                    e.target.style.color = "var(--zerotrade-primary)";
                    e.target.style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "0.8";
                    e.target.style.color = "var(--zerotrade-text)";
                    e.target.style.paddingLeft = "0";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="row mt-4 mt-md-5 text-small text-muted footer-disclaimer">
          <p style={{
            animation: isVisible ? "slideUpFade 0.6s ease-out 0.3s both" : "none",
            lineHeight: 1.8
          }}>
            <strong>ZEROTRADE:</strong> This is an educational trading simulator for learning purposes only. It does not involve real money or securities trading. All simulations are hypothetical and for informational use. Not affiliated with any financial institutions or exchanges.
          </p>
          <p style={{
            animation: isVisible ? "slideUpFade 0.6s ease-out 0.35s both" : "none",
            lineHeight: 1.8
          }}>
            <strong>Risk Disclosure:</strong> Simulated trading does not guarantee real-world results. Investments in securities carry market risks; always consult a financial advisor. This app is for educational purposes and does not provide investment advice.
          </p>
          <p style={{
            animation: isVisible ? "slideUpFade 0.6s ease-out 0.4s both" : "none",
            lineHeight: 1.8
          }}>
            By using ZEROTRADE, you agree to our terms. For any issues, contact support. Remember, trading involves risk—educate yourself before real investing.
          </p>
        </div>

        <div className="foootersLastPart">
          {["Terms and Conditions", "Policies & Procedures", "Privacy Policy", "Disclosure", "For Learner's Attention", "User Charter"].map((item, index) => (
            <a 
              key={index}
              href="/"
              style={{
                color: "var(--zerotrade-text)",
                opacity: 0.8,
                fontSize: "small",
                display: "inline",
                marginRight: "1rem",
                transition: "all 0.3s ease",
                animation: isVisible ? `slideUpFade 0.6s ease-out ${0.45 + index * 0.05}s both` : "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--zerotrade-primary)";
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--zerotrade-text)";
                e.target.style.opacity = "0.8";
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;