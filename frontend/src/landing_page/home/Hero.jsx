import React from 'react'
import {useNavigate} from "react-router-dom"

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container p-4 p-md-5 text-center mb-5">
      <div className="row justify-content-center">
        <img
          className="hero-image mb-4 mb-md-5"
          src="media/images/homeHero.png"
          alt="Invest in everything"
        />
        <h1 className="hero-title mt-4 mt-md-5">
          Invest in everything
        </h1>
        <p className="hero-subtitle fs-5 opacity-85">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="hero-cta btn btn-primary py-2 px-4 fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  )
}

export default Hero
