import React from 'react'

function Education() {
  return (
    <div className="container mt-4 mt-md-5 px-3 px-md-5">
      <div className="row p-3 p-md-5 g-4 align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center">
          <div className="mt-4 mt-lg-5">
            <img className="education-img" src="media/images/education.svg" alt="Education" />
          </div>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 p-3 p-md-5 HomeTextBlocks">
          <h1 className="mb-4 mb-md-5 education-title">Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="/" className="mx-2 my-3 d-inline-block">Varsity <i className="fa-solid fa-arrow-right"></i></a>
          <p className="mt-4 mt-md-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="/" className="mx-2">TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education