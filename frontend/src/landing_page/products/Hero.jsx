import React from 'react';

function Hero() {
  return (
    <div className="container border-bottom mb-5 products-hero">
      <div className="row text-center mt-4 mt-md-5 fs-4">
        <h1 className="products-hero-title">ZEROTRADE Simulators</h1>  {/* Updated to ZEROTRADE branding and focus on simulation */}
        <p className="opacity-75 mt-2 fs-5">Intuitive platforms for learning trading</p>  {/* Updated to educational focus */}
        <p className="mt-1 mb-4 mb-md-5 products-hero-link">
          Check out our <a className="opacity-75" href="/">educational offerings <i className="fa-solid fa-arrow-right"></i></a>  {/* Updated to generic educational link */}
        </p>
      </div>
    </div>
  );
}

export default Hero;