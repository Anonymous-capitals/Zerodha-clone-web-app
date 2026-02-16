import React from "react";

function Hero() {
  return (
    <div
      className="Support support-hero"
      style={{
        backgroundColor: "rgba(56,126,209,255)",
        color: "white",
      }}
    >
      <div className="container support-hero-container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h3 className="fs-4 mb-3 mb-md-5">Support Portal</h3>
            <h3 className="mb-4 mb-md-5 fs-4 support-hero-subtitle">
              Search for an answer or browse help topics to create a ticket
            </h3>
            <div className="support-search-wrap mb-4">
              <input
                className="support-search-input"
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                aria-label="Search support"
              />
              <i className="fa-solid fa-magnifying-glass support-search-icon" aria-hidden></i>
            </div>

            <div className="mb-3 support-quick-links">
              <a href="/">Track account opening</a>
              <a href="/">Track segment activation</a>
              <a href="/">Intraday margins</a>
            </div>
            <a href="/">Kite user manual</a>
          </div>
          <div className="col-12 col-lg-6 support-featured">
            <a className="mb-3 mb-md-5 d-inline-block" href="/">Track tickets</a>
            <h3 className="mt-4 mt-md-5 mb-3">Featured</h3>
            <ol className="ps-3">
              <li className="mt-3 mb-4">
                <a href="/">Suspension of trading - IDFC Limited</a>
              </li>
              <li>
                <a href="/">Rights Entitlements listing in October 2024</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
