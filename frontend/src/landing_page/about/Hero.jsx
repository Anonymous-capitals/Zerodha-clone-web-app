import React from 'react';

function Hero() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 mt-4 mt-md-5 mb-4 mb-md-5">
        <h1 className="about-hero-title text-center">
          We pioneered educational trading simulations in India. <br className="d-none d-md-inline" />
          Now, we're advancing learning with technology.
        </h1>
      </div>
      <div className="row p-3 p-md-5 mt-4 mt-md-5 border-top about-hero-content">
        <div className="col-12 col-lg-6 p-3 p-md-5">
          <p>We launched ZEROTRADE with the goal of removing barriers to learning trading and investing in India through cost-effective, supportive, and innovative technology. Our name reflects our commitment to zero barriers in education.</p>
          <p>Today, our user-friendly simulations and in-house tools have made us a leading platform for trading education in India.</p>
          <p>Thousands of learners engage daily with our ecosystem of virtual platforms, gaining skills in a risk-free environment.</p>
        </div>
        <div className="col-12 col-lg-6 p-3 p-md-5">
          <p>In addition, we support popular online educational and community initiatives to empower aspiring traders and investors.</p>
          <p><a href="/community">ZEROTRADE Community</a>, our learning hub, fosters growth in financial literacy through virtual collaborations.</p>
          <p>And we're always innovating. Catch up on the latest updates on our <a href="/blog">blog</a> or see what the media is <a href="/media">saying about us</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;