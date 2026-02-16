import React from 'react';

function Pricing() {
  return (
    <div style={{background: "var(--zerotrade-section-alt)"}}>  {/* Updated to ZEROTRADE variable */}
      <div className="container px-3 px-md-5 zerotrade-pricing-section py-5">  {/* Updated class to ZEROTRADE */}
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-4">
            <h1 className="mb-3 home-pricing-title" style={{fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)"}}>ZEROTRADE Pricing</h1>  {/* Updated to ZEROTRADE branding */}
            <p className="text-muted mb-4 mt-3 mt-md-5" style={{fontSize: "0.95rem", lineHeight: 1.7}}>Experience free educational simulations while learning about trading costs. No hidden charges in virtual learning.</p>  {/* Rewritten to educational focus */}
            <a 
              href="/pricing" 
              style={{
                color: "var(--zerotrade-primary)",  // Updated to ZEROTRADE color
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.paddingRight = "4px"}
              onMouseLeave={(e) => e.target.style.paddingRight = "0"}
            >
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row g-3 g-md-4 text-center">
              <div className="col-12 col-sm-4">
                <div style={{
                  border: "1px solid var(--zerotrade-border)",  // Updated to ZEROTRADE variable
                  borderRadius: "8px",
                  padding: "2rem",
                  background: "var(--zerotrade-bg)",  // Updated to ZEROTRADE variable
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerotrade-primary)";  // Updated to ZEROTRADE color
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.1)";  // Updated to green
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerotrade-border)";  // Updated to ZEROTRADE variable
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <p style={{marginBottom: "0.5rem", color: "var(--zerotrade-text-muted)", fontWeight: 500, fontSize: "0.75rem", textTransform: "uppercase"}}>Free Simulation Account</p>  {/* Updated to simulation focus */}
                  <p style={{marginBottom: 0, fontWeight: "normal", color: "var(--zerotrade-text)", fontSize: "0.95rem"}}>No charges for virtual account setup</p>  {/* Updated to simulation focus */}
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div style={{
                  border: "1px solid var(--zerotrade-border)",  // Updated to ZEROTRADE variable
                  borderRadius: "8px",
                  padding: "2rem",
                  background: "var(--zerotrade-bg)",  // Updated to ZEROTRADE variable
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerotrade-primary)";  // Updated to ZEROTRADE color
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.1)";  // Updated to green
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerotrade-border)";  // Updated to ZEROTRADE variable
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <h2 style={{marginBottom: "0.5rem", marginTop: "0.5rem", color: "var(--zerotrade-text)", fontSize: "2rem", fontWeight: 600}}><i className="fa-solid fa-indian-rupee-sign" style={{fontSize: "1.2rem"}}></i> 0</h2>  {/* Kept ₹0 for free, but context is simulation */}
                  <p style={{marginBottom: 0, color: "var(--zerotrade-text-muted)", fontSize: "0.95rem"}}>Free equity simulations and virtual mutual funds</p>  {/* Updated to simulation focus */}
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div style={{
                  border: "1px solid var(--zerotrade-border)",  // Updated to ZEROTRADE variable
                  borderRadius: "8px",
                  padding: "2rem",
                  background: "var(--zerotrade-bg)",  // Updated to ZEROTRADE variable
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerotrade-primary)";  // Updated to ZEROTRADE color
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(40, 167, 69, 0.1)";  // Updated to green
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerotrade-border)";  // Updated to ZEROTRADE variable
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <h2 style={{marginBottom: "0.5rem", marginTop: "0.5rem", color: "var(--zerotrade-text)", fontSize: "2rem", fontWeight: 600}}>Learn</h2>  {/* Changed from ₹20 to "Learn" for educational focus */}
                  <p style={{marginBottom: 0, color: "var(--zerotrade-text-muted)", fontSize: "0.95rem"}}>Intraday and derivatives simulations</p>  {/* Updated to simulation focus */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;