import React from 'react';

function Awards() {
  return (
    <div style={{background: "var(--zerotrade-section-alt)"}}>  {/* Updated to ZEROTRADE CSS variable */}
      <div className="container mt-4 mt-md-5 py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 p-3 p-md-5 text-center text-lg-start">
            <img 
              src="media/images/simulator_award.svg"  // Updated to original image
              alt="Leading Simulator" 
              className="awards-broker-img"
              style={{maxWidth: "300px", margin: "0 auto"}}
            />
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5 mt-lg-5">
            <h1 className="awards-title">Leading Educational Trading Simulator</h1>  {/* Updated to ZEROTRADE branding and educational focus */}
            <p className="mb-4 mb-md-5" style={{fontSize: "1rem", lineHeight: 1.7}}>Thousands of learners use ZEROTRADE to explore trading and investing in virtual environments, including:</p>  {/* Rewritten to educational, removed Zerodha-specific claims */}
            <ul className="awards-list" style={{listStyle: "none", paddingLeft: 0}}>
              <div className="row">
                <div className="col-6">
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Virtual Options</p></li>  {/* Updated to simulation-focused */}
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Commodity Simulations</p></li>  {/* Updated to simulation-focused */}
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Currency Derivatives</p></li>  {/* Updated to simulation-focused */}
                </div>
                <div className="col-6">
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Stock & IPO Simulations</p></li>  {/* Updated to simulation-focused */}
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Mutual Fund Learning</p></li>  {/* Updated to simulation-focused */}
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Bonds and More</p></li>  {/* Updated to simulation-focused */}
                </div>
              </div>
            </ul>
            <img 
              className="awards-press-img mt-4" 
              src="media/images/educational_press.png"  // Updated to original image
              alt="Educational Press" 
              style={{maxWidth: "100%"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;