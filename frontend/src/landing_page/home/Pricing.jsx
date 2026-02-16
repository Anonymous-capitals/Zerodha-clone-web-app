import React from 'react'

function Pricing() {
  return (
    <div style={{background: "var(--zerodha-section-alt)"}}>
      <div className="container px-3 px-md-5 zerodha-pricing-section py-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-4">
            <h1 className="mb-3 home-pricing-title" style={{fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)"}}>Unbeatable pricing</h1>
            <p className="text-muted mb-4 mt-3 mt-md-5" style={{fontSize: "0.95rem", lineHeight: 1.7}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a 
              href="/pricing" 
              style={{
                color: "var(--zerodha-primary)", 
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
                  border: "1px solid var(--zerodha-border)",
                  borderRadius: "8px",
                  padding: "2rem",
                  background: "var(--zerodha-bg)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-primary)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 126, 209, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <p style={{marginBottom: "0.5rem", color: "var(--zerodha-text-muted)", fontWeight: 500, fontSize: "0.75rem", textTransform: "uppercase"}}>Free account opening</p>
                  <p style={{marginBottom: 0, fontWeight: "normal", color: "var(--zerodha-text)", fontSize: "0.95rem"}}>No account opening charges</p>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div style={{
                  border: "1px solid var(--zerodha-border)",
                  borderRadius: "8px",
                  padding: "2rem",
                  background: "var(--zerodha-bg)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-primary)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 126, 209, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <h2 style={{marginBottom: "0.5rem", marginTop: "0.5rem", color: "var(--zerodha-text)", fontSize: "2rem", fontWeight: 600}}><i className="fa-solid fa-indian-rupee-sign" style={{fontSize: "1.2rem"}}></i> 0</h2>
                  <p style={{marginBottom: 0, color: "var(--zerodha-text-muted)", fontSize: "0.95rem"}}>Free equity delivery and direct mutual funds</p>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <div style={{
                  border: "1px solid var(--zerodha-border)",
                  borderRadius: "8px",
                  padding: "2rem",
                  background: "var(--zerodha-bg)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-primary)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(56, 126, 209, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--zerodha-border)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                  <h2 style={{marginBottom: "0.5rem", marginTop: "0.5rem", color: "var(--zerodha-text)", fontSize: "2rem", fontWeight: 600}}><i className="fa-solid fa-indian-rupee-sign" style={{fontSize: "1.2rem"}}></i> 20</h2>
                  <p style={{marginBottom: 0, color: "var(--zerodha-text-muted)", fontSize: "0.95rem"}}>Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing