import React from 'react'

function Stats() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 g-4">
        <div className="col-12 col-lg-6 p-3 p-md-5 HomeTextBlocks">
          <h1 className="mb-4 mb-md-5 stats-title">Trust with confidence</h1>
          <h3>Customer-first always</h3>
          <p>That's why 1.6+ crore customers trust Zerodha with ~₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          <h3>No spam or gimmicks</h3>
          <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="/about">Our philosophies.</a></p>
          <h3>The Zerodha universe</h3>
          <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs</p>
          <h3>Do better with money</h3>
          <p>With initiatives like <a href="/support">Nudge</a> and <a href="/support">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mt-4 mt-lg-5">
            <img className="stats-ecosystem-img" src="media/images/ecosystem.png" alt="Zerodha ecosystem" />
          </div>
          <div className="text-center stats-links mt-3">
            <a href="/product" className="me-2 me-md-4">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            <a href="/">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats