import React from 'react';

function Stats() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 g-4" style={{paddingTop: "3rem", paddingBottom: "3rem"}}>
        <div className="col-12 col-lg-6 p-3 p-md-5 HomeTextBlocks">
          <h1 className="stats-title mb-4 mb-md-5">Learn with Confidence in ZEROTRADE</h1>  {/* Updated to ZEROTRADE branding and educational focus */}
          <div style={{lineHeight: 1.8}}>
            <h3 style={{color: "var(--zerotrade-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>Learner-first always</h3>  {/* Updated to educational focus */}
            <p style={{marginBottom: "1.5rem", color: "var(--zerotrade-text)"}}>Thousands of learners trust ZEROTRADE for risk-free simulations, helping them understand trading without real financial risk.</p>  {/* Rewritten to simulation and education focus */}
            
            <h3 style={{color: "var(--zerotrade-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>No distractions, just learning</h3>  {/* Updated to educational focus */}
            <p style={{marginBottom: "1.5rem", color: "var(--zerotrade-text)"}}>No gimmicks or spam. High-quality tools for learning at your own pace. <a href="/about" style={{color: "var(--zerotrade-primary)", fontWeight: 500, textDecoration: "none"}}>Our mission.</a></p>  {/* Updated link and text */}
            
            <h3 style={{color: "var(--zerotrade-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>The ZEROTRADE Learning Ecosystem</h3>  {/* Updated to ZEROTRADE branding */}
            <p style={{marginBottom: "1.5rem", color: "var(--zerotrade-text)"}}>Not just a simulator, but a complete learning environment. Our tools and resources help you master trading skills virtually.</p>  {/* Rewritten to educational focus */}
            
            <h3 style={{color: "var(--zerotrade-text)", marginTop: "1.5rem", marginBottom: "0.75rem", fontSize: "1.1rem", fontWeight: 600}}>Learn better with simulations</h3>  {/* Updated to educational focus */}
            <p style={{color: "var(--zerotrade-text)"}}>With features like virtual alerts and risk controls, we help you practice smart trading habits. <a href="/support" style={{color: "var(--zerotrade-primary)", fontWeight: 500, textDecoration: "none"}}>Learn more.</a></p>  {/* Rewritten to simulation focus */}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mt-4 mt-lg-5">
            <img 
              className="stats-ecosystem-img" 
              src="media/images/learning_ecosystem.png"  // Updated to original image (e.g., a generic learning network illustration; replace with your file)
              alt="ZEROTRADE Learning Ecosystem"  // Updated alt text
              style={{maxWidth: "100%", borderRadius: "8px"}}
            />
          </div>
          <div className="text-center stats-links mt-3">
            <a 
              href="/products"  // Updated to plural for consistency
              style={{
                color: "var(--zerotrade-primary)",  // Updated to ZEROTRADE color
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
              Explore our simulators <i className="fa-solid fa-arrow-right"></i>  {/* Updated to simulation focus */}
            </a>
            <a 
              href="/signup"  // Updated to signup for simulation access
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
              Start Your Simulation <i className="fa-solid fa-arrow-right"></i>  {/* Updated to simulation focus */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;