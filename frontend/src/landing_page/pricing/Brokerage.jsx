import React from "react";

function Brokerage() {
  return (
    <div className="container Brokerage">
      <div className="row">
        <h1 className="brokerage-heading">
          Understand Trading Costs with Our Simulator  {/* Updated to educational focus, removed calculator link */}
        </h1>
      </div>
      <div className="row Brokerage g-4">
        <h3 className="text-muted mb-4 mb-md-5 col-12">General Trading Charges Explained</h3>  {/* Generalized title */}
        <div className="col-12 col-lg-6">
          <h5>Securities/Commodities Transaction Tax</h5>
          <p>
            A government tax on transactions in the stock market. Typically charged on both buy and sell for delivery trades, and only on sell for intraday or derivatives. In real-world trading, this can vary by exchange and trade type.  {/* Generalized, removed Zerodha-specific references */}
          </p>
          <h5>Transaction/Turnover Charges</h5>
          <p>
            Fees charged by stock exchanges based on trade value. These vary by exchange and group of securities. In real trading, rates are set by regulatory bodies and can change over time.  {/* Generalized, removed specific rates and Zerodha mentions */}
          </p>
          <h5>Call & Trade Charges</h5>
          <p>
            Additional fees for orders placed through dealers or automated systems. In real trading, this ensures order execution but adds to costs.  {/* Generalized, removed Zerodha-specific details */}
          </p>
          <h5>Stamp Charges</h5>
          <p>
            Government fees for transactions as per stamp duty laws. Applied to stock and depository transactions in real trading.  {/* Generalized */}
          </p>
          <h5>NRI Trading Charges</h5>
          <ul>
            <li>Higher fees for international traders on derivatives.</li>
            <li>Percentage-based or fixed charges on equity trades.</li>
            <li>Annual account maintenance fees.</li>
          </ul>  {/* Generalized, removed specific amounts */}
          <h5>Account Debit Balance Charges</h5>
          <p>
            Penalties for negative balances in trading accounts. In real trading, this encourages timely payments.  {/* Generalized */}
          </p>
          <h5>Investor Protection Fund Charges</h5>
          <ul>
            <li>Fees for equity and futures to support market safety.</li>
            <li>Higher rates for options and currency trades.</li>
          </ul>  {/* Generalized, removed specific rates */}
        </div>
        <div className="col-12 col-lg-6">
          <h5>GST</h5>
          <p>
            Government tax on services, calculated as a percentage of brokerage and other charges. In real trading, this is added to total costs.  {/* Generalized */}
          </p>
          <h5>Regulatory Charges</h5>
          <p>
            Fees by market regulators for oversight. In real trading, these ensure fair markets.  {/* Generalized, removed SEBI-specific details */}
          </p>
          <h5>Depository Participant Charges</h5>
          <p>
            Fees for holding and transferring securities. In real trading, charged per transaction, with possible discounts for certain accounts.  {/* Generalized, removed Zerodha-specific fees */}
          </p>
          <h5>Pledging Charges</h5>
          <p>Fees for securing loans against securities. In real trading, applied per request.  {/* Generalized */}</p>
          <h5>Account Maintenance Charges</h5>
          <p>
            Annual fees for demat accounts, often waived for low-value holdings. In real trading, varies by account type.  {/* Generalized, removed specific links */}
          </p>
          <h5>Corporate Action Charges</h5>
          <p>
            Fees for special orders like buybacks. In real trading, added to transaction costs.  {/* Generalized */}
          </p>
          <h5>Off-Market Transfer Charges</h5>
          <p>Fees for non-exchange transfers, based on value. In real trading, ensures secure movements.  {/* Generalized */}</p>
          <h5>Physical Document Requests</h5>
          <p>
            Charges for printed statements beyond the first. In real trading, includes courier fees.  {/* Generalized */}
          </p>
          <h5>Payment Gateway Charges</h5>
          <p>Fees for online payments, often waived for certain methods. In real trading, part of fund transfers.  {/* Generalized */}</p>
          <h5>Delayed Payment Charges</h5>
          <p>
            Interest on overdue balances. In real trading, encourages prompt settlements.  {/* Generalized */}
          </p>
        </div>
      </div>
      <div className="row Brokerage">
        <h5>Disclaimer</h5>
        <p>
          ZEROTRADE is an educational trading simulator with no real charges or transactions. All content here is for learning about typical trading costs in real markets. Investments carry market risks; this simulator does not guarantee real-world results. Consult a financial advisor for actual trading. No brokerage fees apply in simulations.  {/* Completely rewritten to emphasize education and simulation, removed Zerodha-specific policies */}
        </p>
      </div>
    </div>
  );
}

export default Brokerage;