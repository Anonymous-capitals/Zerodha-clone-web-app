import React from 'react'
import { useNavigate } from "react-router-dom";

function OpenAccount() {
   const navigate = useNavigate();
  return (
    <div style={{background: "linear-gradient(135deg, rgba(56, 126, 209, 0.05) 0%, rgba(56, 126, 209, 0.02) 100%)"}}>
      <div className="container p-4 p-md-5 text-center mb-5" style={{paddingTop: "4rem", paddingBottom: "4rem"}}>
        <div className="row">
          <h1 className="open-account-title mt-3" style={{marginBottom: "1rem"}}>
            Open a Zerodha account
          </h1>
          <p className="text-muted mt-4 mb-4 open-account-subtitle" style={{fontSize: "1rem", lineHeight: 1.6}}>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="open-account-cta btn btn-primary py-3 px-5 mt-3 fs-5 mb-5"
            style={{
              borderRadius: "6px",
              fontWeight: "500",
              letterSpacing: "0.3px",
              minWidth: "180px"
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  )
}

export default OpenAccount
