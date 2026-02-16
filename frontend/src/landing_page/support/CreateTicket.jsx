import React from 'react'

function CreateTicket() {
  return (
    <div className="container Ticket p-3 p-md-5">
      <h3 className="mt-4 mt-md-5 mb-4 mb-md-5 ticket-heading">To create a ticket, select a relevant topic</h3>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-circle-plus"></i> Account Opening</h3>
          <a href="/">Getting started</a>
          <a href="/">Online</a>
          <a href="/">Offline</a>
          <a href="/">Charges</a>
          <a href="/">Company, Partnership and HUF</a>
          <a href="/">Non Resident Indian (NRI)</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-regular fa-user"></i> Your Zerodha Account</h3>
          <a href="/">Login credentials</a>
          <a href="/">Your Profile</a>
          <a href="/">Account modification and segment addition</a>
          <a href="/">CMR & DP ID</a>
          <a href="/">Nomination</a>
          <a href="/">Transfer and conversion of shares</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-grip-lines-vertical"></i> Trading and Markets</h3>
          <a href="/">Trading FAQs</a>
          <a href="/">Kite</a>
          <a href="/">Margins</a>
          <a href="/">Product and order types</a>
          <a href="/">Corporate actions</a>
          <a href="/">Kite features</a>
        </div>
      </div>
      <div className="row g-4 mt-2">
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-wallet"></i> Funds</h3>
          <a href="/">Fund withdrawal</a>
          <a href="/">Adding funds</a>
          <a href="/">Adding bank accounts</a>
          <a href="/">eMandates</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-regular fa-circle"></i> Console</h3>
          <a href="/">IPO</a>
          <a href="/">Portfolio</a>
          <a href="/">Funds statement</a>
          <a href="/">Profile</a>
          <a href="/">Reports</a>
          <a href="/">Referral program</a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ticket-col">
          <h3><i className="fa-solid fa-coins"></i> Coin</h3>
          <a href="/">Understanding mutual funds and Coin</a>
          <a href="/">Coin app</a>
          <a href="/">Coin web</a>
          <a href="/">Transactions and reports</a>
          <a href="/">National Pension Scheme (NPS)</a>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket