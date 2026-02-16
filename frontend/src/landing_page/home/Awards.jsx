import React from 'react'

function Awards() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 p-3 p-md-5 text-center text-lg-start">
          <img src="media/images/largestBroker.svg" alt="Largest broker" className="awards-broker-img" />
        </div>
        <div className="col-12 col-lg-6 p-3 p-md-5 mt-lg-5">
          <h1 className="awards-title">Largest stock broker in India</h1>
          <p className="mb-4 mb-md-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <ul className="awards-list">
            <div className="row">
              <div className="col-6">
                <li><p>Features and options</p></li>
                <li><p>Commodity and derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </div>
              <div className="col-6">
                <li><p>Stock & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and</p></li>
              </div>
            </div>
          </ul>
          <img className="awards-press-img" src="media/images/pressLogos.png" alt="Press" />
        </div>
      </div>
    </div>
  )
}

export default Awards