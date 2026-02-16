
function Hero() {
  return (
    <div
      className="Support support-hero"
      style={{
        backgroundColor: "rgba(40, 167, 69, 0.9)",  // Updated to ZEROTRADE's primary green (#28a745) with opacity for a subtle effect
        color: "white",
      }}
    >
      <div className="container support-hero-container">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            {/* Updated title to include ZEROTRADE branding */}
            <h3 className="fs-4 mb-3 mb-md-5">ZEROTRADE Support Portal</h3>
            {/* Generalized subtitle for educational focus */}
            <h3 className="mb-4 mb-md-5 fs-4 support-hero-subtitle">
              Search for an answer or browse help topics to get support with your simulation
            </h3>
            <div className="support-search-wrap mb-4">
              {/* Updated placeholder to simulator-specific examples */}
              <input
                className="support-search-input"
                type="text"
                placeholder="Eg: how do I start a simulation, why is my trade not executing..."
                aria-label="Search support"
              />
              <i className="fa-solid fa-magnifying-glass support-search-icon" aria-hidden></i>
            </div>

            {/* Replaced with generic educational links */}
            <div className="mb-3 support-quick-links">
              <a href="/">Start a Simulation</a>
              <a href="/">Learn Trading Basics</a>
              <a href="/">Simulation Tips</a>
            </div>
            {/* Updated to ZEROTRADE-specific, generic guide */}
            <a href="/">ZEROTRADE User Guide</a>
          </div>
          <div className="col-12 col-lg-6 support-featured">
            {/* Generalized for simulation support */}
            <a className="mb-3 mb-md-5 d-inline-block" href="/">Track Support Tickets</a>
            <h3 className="mt-4 mt-md-5 mb-3">Featured</h3>
            <ol className="ps-3">
              <li className="mt-3 mb-4">
                {/* Updated to generic simulator topic */}
                <a href="/">How to Use the Simulator</a>
              </li>
              <li>
                {/* Updated to generic simulator topic */}
                <a href="/">Common Simulation Issues</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;