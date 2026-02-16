import React from 'react';

function CreateTicket() {
  return (
    <div className="container Ticket p-3 p-md-5">
      <h3 className="mt-4 mt-md-5 mb-4 mb-md-5 ticket-heading">To create a ticket, select a relevant topic for ZEROTRADE support</h3>  {/* Updated title to include ZEROTRADE and focus on simulation */}
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-circle-plus"></i> Simulation Setup</h3>  {/* Renamed from "Account Opening" to generic simulation topic */}
          <a href="/">Getting Started</a>  {/* Kept generic */}
          <a href="/">Online Setup</a>  {/* Generalized */}
          <a href="/">Offline Setup</a>  {/* Generalized */}
          <a href="/">Fees</a>  {/* Generalized */}
          <a href="/">Group Accounts</a>  {/* Generalized from "Company, Partnership and HUF" */}
          <a href="/">International Users</a>  {/* Generalized from "Non Resident Indian (NRI)" */}
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-regular fa-user"></i> Your ZEROTRADE Account</h3>  {/* Updated to ZEROTRADE branding */}
          <a href="/">Login Details</a>  {/* Generalized from "Login credentials" */}
          <a href="/">Profile Settings</a>  {/* Generalized from "Your Profile" */}
          <a href="/">Account Updates</a>  {/* Generalized from "Account modification and segment addition" */}
          <a href="/">Account ID</a>  {/* Generalized from "CMR & DP ID" */}
          <a href="/">Preferences</a>  {/* Generalized from "Nomination" */}
          <a href="/">Transfer Simulations</a>  {/* Generalized from "Transfer and conversion of shares" */}
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-grip-lines-vertical"></i> Simulation and Trading</h3>  {/* Renamed from "Trading and Markets" to focus on simulation */}
          <a href="/">Trading FAQs</a>  {/* Kept generic */}
          <a href="/">Trading Platform</a>  {/* Generalized from "Kite" */}
          <a href="/">Margins</a>  {/* Kept generic */}
          <a href="/">Order Types</a>  {/* Generalized from "Product and order types" */}
          <a href="/">Market Events</a>  {/* Generalized from "Corporate actions" */}
          <a href="/">Platform Features</a>  {/* Generalized from "Kite features" */}
        </div>
      </div>
      <div className="row g-4 mt-2">
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-wallet"></i> Virtual Funds</h3>  {/* Renamed from "Funds" to emphasize simulation */}
          <a href="/">Withdraw Funds</a>  {/* Generalized */}
          <a href="/">Add Funds</a>  {/* Generalized */}
          <a href="/">Bank Accounts</a>  {/* Generalized */}
          <a href="/">Payment Methods</a>  {/* Generalized from "eMandates" */}
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-regular fa-circle"></i> Dashboard</h3>  {/* Renamed from "Console" to generic */}
          <a href="/">IPO Simulations</a>  {/* Generalized */}
          <a href="/">Portfolio</a>  {/* Kept generic */}
          <a href="/">Funds Report</a>  {/* Generalized */}
          <a href="/">Profile</a>  {/* Kept generic */}
          <a href="/">Reports</a>  {/* Kept generic */}
          <a href="/">Referral Program</a>  {/* Kept generic */}
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-coins"></i> Simulated Investments</h3>  {/* Renamed from "Coin" to focus on simulation */}
          <a href="/">Understanding Investments</a>  {/* Generalized from "Understanding mutual funds and Coin" */}
          <a href="/">Investment App</a>  {/* Generalized from "Coin app" */}
          <a href="/">Investment Web</a>  {/* Generalized from "Coin web" */}
          <a href="/">Transactions</a>  {/* Generalized */}
          <a href="/">Retirement Plans</a>  {/* Generalized from "National Pension Scheme (NPS)" */}
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;