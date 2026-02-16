import React from 'react'
import { useNavigate } from "react-router-dom";

function OpenAccount() {
   const navigate = useNavigate();
  return (
    <div className="container p-4 p-md-5 text-center mb-5">
      <div className="row">
        <h1 className="open-account-title mt-3">
          Open a Zerodha account
        </h1>
        <p className="opacity-75 mt-4 mb-4 open-account-subtitle">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="open-account-cta btn btn-primary py-2 px-4 mt-3 fs-5 mb-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  )
}

export default OpenAccount
