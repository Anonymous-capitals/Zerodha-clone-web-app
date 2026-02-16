import React from 'react'

function Awards() {
  return (
    <div style={{background: "var(--zerodha-section-alt)"}}>
      <div className="container mt-4 mt-md-5 py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6 p-3 p-md-5 text-center text-lg-start">
            <img 
              src="media/images/largestBroker.svg" 
              alt="Largest broker" 
              className="awards-broker-img"
              style={{maxWidth: "300px", margin: "0 auto"}}
            />
          </div>
          <div className="col-12 col-lg-6 p-3 p-md-5 mt-lg-5">
            <h1 className="awards-title">Largest stock broker in India</h1>
            <p className="mb-4 mb-md-5" style={{fontSize: "1rem", lineHeight: 1.7}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
            <ul className="awards-list" style={{listStyle: "none", paddingLeft: 0}}>
              <div className="row">
                <div className="col-6">
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Features and options</p></li>
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Commodity and derivatives</p></li>
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Currency derivatives</p></li>
                </div>
                <div className="col-6">
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Stock & IPOs</p></li>
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Direct mutual funds</p></li>
                  <li style={{marginBottom: "0.75rem"}}><p style={{margin: 0, fontSize: "0.95rem"}}>Bonds and</p></li>
                </div>
              </div>
            </ul>
            <img 
              className="awards-press-img mt-4" 
              src="media/images/pressLogos.png" 
              alt="Press" 
              style={{maxWidth: "100%"}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards