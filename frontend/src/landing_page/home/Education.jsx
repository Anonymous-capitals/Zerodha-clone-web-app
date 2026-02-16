import React from 'react'

function Education() {
  return (
    <div className="container mt-4 mt-md-5 px-3 px-md-5" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
      <div className="row p-3 p-md-5 g-4 align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center">
          <div className="mt-4 mt-lg-5">
            <img 
              className="education-img" 
              src="media/images/education.svg" 
              alt="Education"
              style={{maxWidth: "80%", animation: "fadeIn 0.8s ease-in-out"}}
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 p-3 p-md-5 HomeTextBlocks">
          <h1 className="mb-4 mb-md-5 education-title">Free and open market education</h1>
          <p style={{fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a 
            href="/" 
            style={{
              color: "var(--zerodha-primary)", 
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-block",
              marginBottom: "2rem",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => e.target.style.paddingRight = "4px"}
            onMouseLeave={(e) => e.target.style.paddingRight = "0"}
          >
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p style={{fontSize: "1rem", lineHeight: 1.7, marginTop: "2rem", marginBottom: "1.5rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
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
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
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
  )
}

export default Education