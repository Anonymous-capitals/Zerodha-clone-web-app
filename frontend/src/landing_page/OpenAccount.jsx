import React from 'react';
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div style={{background: "linear-gradient(135deg, rgba(40, 167, 69, 0.05) 0%, rgba(40, 167, 69, 0.02) 100%)"}}>  {/* Updated to new primary green (#28a745) for TradeSim branding */}
      <div className="container p-4 p-md-5 text-center mb-5" style={{paddingTop: "4rem", paddingBottom: "4rem"}}>
        <div className="row">
          <h1 className="open-account-title mt-3" style={{marginBottom: "1rem"}}>
            Start Your Trading Journey  {/* Changed from "Open a Zerodha account" to original, generic title */}
          </h1>
          <p className="text-muted mt-4 mb-4 open-account-subtitle" style={{fontSize: "1rem", lineHeight: 1.6}}>
            Explore simulated trading with easy access, educational tools, and risk-free learning.  {/* Updated to original description, focusing on simulation and education without copying Zerodha's specifics */}
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
            Sign up for free  {/* Kept as-is, but ensure it aligns with your app's free tier */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;