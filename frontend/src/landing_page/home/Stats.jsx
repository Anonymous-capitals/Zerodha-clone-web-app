import React from 'react'

function Stats() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 g-4" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
        <div className="col-12 col-lg-6 p-3 p-md-5 HomeTextBlocks">
          <h1 className="stats-title mb-4 mb-md-5">Trust with confidence</h1>
          <div style={{lineHeight: 1.8}}>
            <h3 style={{color: "var(--zerodha-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>Customer-first always</h3>
            <p style={{marginBottom: "1.5rem", color: "var(--zerodha-text)"}}>That's why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            
            <h3 style={{color: "var(--zerodha-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>No spam or gimmicks</h3>
            <p style={{marginBottom: "1.5rem", color: "var(--zerodha-text)"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/about" style={{color: "var(--zerodha-primary)", fontWeight: 500, textDecoration: "none"}}>Our philosophies.</a></p>
            
            <h3 style={{color: "var(--zerodha-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>The Zerodha universe</h3>
            <p style={{marginBottom: "1.5rem", color: "var(--zerodha-text)"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
            
            <h3 style={{color: "var(--zerodha-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>Do better with money</h3>
            <p style={{color: "var(--zerodha-text)"}}>With initiatives like <a href="/support" style={{color: "var(--zerodha-primary)", fontWeight: 500, textDecoration: "none"}}>Nudge</a> and <a href="/support" style={{color: "var(--zerodha-primary)", fontWeight: 500, textDecoration: "none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mt-4 mt-lg-5">
            <img 
              className="stats-ecosystem-img" 
              src="media/images/ecosystem.png" 
              alt="Zerodha ecosystem"
              style={{maxWidth: "100%", borderRadius: "8px"}}
            />
          </div>
          <div className="text-center stats-links mt-3">
            <a 
              href="/product" 
              style={{
                color: "var(--zerodha-primary)", 
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
                marginRight: "2rem",
                marginBottom: "0.5rem",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.paddingRight = "4px"}
              onMouseLeave={(e) => e.target.style.paddingRight = "0"}
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a 
              href="/" 
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
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats