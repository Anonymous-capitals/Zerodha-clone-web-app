import React from 'react'

function Pricing() {
  return (
    <div className="container px-3 px-md-5 zerodha-pricing-section">
      <div className="row g-4 align-items-stretch">
        <div className="col-12 col-lg-4">
          <h1 className="mb-3 home-pricing-title">Unbeatable pricing</h1>
          <p className="text-muted mb-4 mt-3 mt-md-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="/pricing" className="zerodha-link">See pricing <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-12 col-lg-8">
          <div className="row g-3 g-md-4 text-center">
            <div className="col-12 col-sm-4 border rounded p-4 home-pricing-box">
              <p className="mb-2 text-muted small text-uppercase">Free account opening</p>
              <p className="mb-0 fw-normal">No account opening charges</p>
            </div>
            <div className="col-12 col-sm-4 border rounded p-4 home-pricing-box">
              <h2 className="mb-2 mt-2"><i className="fa-solid fa-indian-rupee-sign"></i> 0</h2>
              <p className="mb-0 text-muted">Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-4 border rounded p-4 home-pricing-box">
              <h2 className="mb-2 mt-2"><i className="fa-solid fa-indian-rupee-sign"></i> 20</h2>
              <p className="mb-0 text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing