import React from 'react'

function Pricing() {
  return (
    <div className="container px-3 px-md-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-5 col-lg-4">
          <h1 className="mb-3 opacity-75 home-pricing-title">Unbeatable pricing</h1>
          <p className="text-muted mb-4 mt-3 mt-md-5 mx-0 mx-md-2">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="/" className="mx-0 mx-md-2">See pricing <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-12 col-md-7 col-lg-6 offset-lg-2">
          <div className="row p-3 text-center g-2 g-md-3">
            <div className="col-12 col-sm-6 border rounded p-3 p-md-4 home-pricing-box">
              <h1 className="mb-3 mb-md-4 mt-3 mt-md-4"><i className="fa-solid fa-indian-rupee-sign"></i> 0</h1>
              <p className="mb-2 text-muted">Free equity delivery and <br className="d-none d-sm-inline" /> direct mutual funds</p>
            </div>
            <div className="col-12 col-sm-6 border rounded p-3 p-md-4 home-pricing-box">
              <h1 className="mb-3 mb-md-4 mt-3 mt-md-4"><i className="fa-solid fa-indian-rupee-sign"></i> 20</h1>
              <p className="text-muted mb-0">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing