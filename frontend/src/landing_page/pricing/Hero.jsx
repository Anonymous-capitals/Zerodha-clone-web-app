import React from 'react'

function Hero() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row text-center">
        <h1 className="pricing-hero-title">Charges</h1>
        <h3 className="opacity-50 fs-5 mb-4 mb-md-5 mt-3">List of all charges and taxes</h3>
      </div>
      <div className="row mt-4 mt-md-5 Pricing g-4">
        <div className="col-12 col-md-4 pricing-hero-col">
          <img src="media/images/pricing0.svg" alt="" />
          <h3>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-12 col-md-4 pricing-hero-col">
          <img src="media/images/other-trades.svg" alt="" />
          <h3>Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-12 col-md-4 pricing-hero-col">
          <img src="media/images/pricing0.svg" alt="" />
          <h3>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero