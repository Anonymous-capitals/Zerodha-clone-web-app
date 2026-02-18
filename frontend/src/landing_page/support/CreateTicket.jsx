import React from 'react';

function CreateTicket() {
  return (
    <div className="container Ticket p-3 p-md-5">
      <h3 className="mt-4 mt-md-5 mb-4 mb-md-5 ticket-heading">To create a ticket, select a relevant topic for ZEROTRADE support</h3>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-circle-plus"></i> Simulation Setup</h3>
          <a href="/">Getting Started</a>
          <a href="/">Online Setup</a>
          <a href="/">Offline Setup</a>
          <a href="/">Fees</a>
          <a href="/">Group Accounts</a>
          <a href="/">International Users</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-regular fa-user"></i> Your ZEROTRADE Account</h3>
          <a href="/">Login Details</a>
          <a href="/">Profile Settings</a>
          <a href="/">Account Updates</a>
          <a href="/">Account ID</a>
          <a href="/">Preferences</a>
          <a href="/">Transfer Simulations</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-grip-lines-vertical"></i> Simulation and Trading</h3>
          <a href="/">Trading FAQs</a>
          <a href="/">Trading Platform</a>
          <a href="/">Margins</a>
          <a href="/">Order Types</a>
          <a href="/">Market Events</a>
          <a href="/">Platform Features</a>
        </div>
      </div>
      <div className="row g-4 mt-2">
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-wallet"></i> Virtual Funds</h3>
          <a href="/">Withdraw Funds</a>
          <a href="/">Add Funds</a>
          <a href="/">Bank Accounts</a>
          <a href="/">Payment Methods</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-regular fa-circle"></i> Dashboard</h3>
          <a href="/">IPO Simulations</a>
          <a href="/">Portfolio</a>
          <a href="/">Funds Report</a>
          <a href="/">Profile</a>
          <a href="/">Reports</a>
          <a href="/">Referral Program</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-coins"></i> Simulated Investments</h3>
          <a href="/">Understanding Investments</a>
          <a href="/">Investment App</a>
          <a href="/">Investment Web</a>
          <a href="/">Transactions</a>
          <a href="/">Retirement Plans</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;