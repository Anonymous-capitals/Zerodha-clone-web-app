import React from 'react';

function Hero() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row text-center">
        <h1 className="pricing-hero-title">ZEROTRADE Pricing</h1>
        <h3 className="opacity-50 fs-5 mb-4 mb-md-5 mt-3">Learn about trading costs in our free simulator</h3>
      </div>
      <div className="row mt-4 mt-md-5 Pricing g-4">
        <div className="col-12 col-md-4 pricing-hero-col">
          <img src="media/images/free_simulation.svg" alt="Free Simulation" />
          <h3>Free Equity Simulations</h3>
          <p>All equity simulations in ZEROTRADE are absolutely free — no brokerage in virtual trades. Learn about real delivery costs without risk.</p>
        </div>
        <div className="col-12 col-md-4 pricing-hero-col">
          <img src="media/images/trade_costs.svg" alt="Trade Costs" />
          <h3>Intraday and Derivatives Simulations</h3>
          <p>Explore virtual intraday and options trades for free. In real trading, fees are typically per order or a percentage of value.</p>
        </div>
        <div className="col-12 col-md-4 pricing-hero-col">
          <img src="media/images/free_investment.svg" alt="Free Investment" />
          <h3>Free Mutual Fund Simulations</h3>
          <p>All mutual fund simulations are absolutely free — no commissions in virtual investments. Understand real fund costs educationally.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;