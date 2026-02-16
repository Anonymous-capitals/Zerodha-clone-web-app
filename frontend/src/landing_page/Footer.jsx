import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="zerodha-footer">
      <div className="container border-top mt-5 footer-container">
        <div className="row mt-4 mt-md-5 g-4">
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <img src="media/images/logo.svg" alt="Zerodha" className="footer-logo" />
            <p className="footer-copyright">&copy;2010 - {currentYear}, Zerodha Broking Ltd. All rights reserved.</p>
            <div className="social-links">
              <a href="https://twitter.com/zerodha" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://facebook.com/zerodha" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://instagram.com/zerodhaonline" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/zerodha" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://youtube.com/@zerodhaonline" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 footer">
            <p style={{fontWeight: "600", marginBottom: "1rem"}}>Company</p>
            <a href="/">About</a>
            <a href="/">Products</a>
            <a href="/">Pricing</a>
            <a href="/">Referral programme</a>
            <a href="/">Careers</a>
            <a href="/">Zerodha.tech</a>
            <a href="/">Press & media</a>
            <a href="/">Zerodha Cares (CSR)</a>
          </div>
          <div className="col-6 col-md-3 col-lg-3 footer">
            <p style={{fontWeight: "600", marginBottom: "1rem"}}>Support</p>
            <a href="/">Contact us</a>
            <a href="/">Support portal</a>
            <a href="/">Z-Connect blog</a>
            <a href="/">List of charges</a>
            <a href="/">Downloads & resources</a>
            <a href="/">Videos</a>
            <a href="/">Market overview</a>
            <a href="/">How to file a complaint?</a>
            <a href="/">Status of your complaints</a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 footer">
            <p style={{fontWeight: "600", marginBottom: "1rem"}}>Account</p>
            <a href="/">Open an account</a>
            <a href="/">Fund transfer</a>
            <a href="/">NRI account</a>
            <a href="/">Commodity trading</a>
            <a href="/">Dematerialisation</a>
          </div>
        </div>
        <div className="row mt-4 mt-md-5 text-small text-muted footer-disclaimer">
          <p><strong>Zerodha Broking Ltd.:</strong> Member of NSE, BSE​ &​ MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
          <p><strong>Procedure to file a complaint on SEBI SCORES:</strong> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p><strong>Attention investors:</strong> 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
        </div>
        <div className="foootersLastPart">
          <a href="/">NSE</a>
          <a href="/">BSE</a>
          <a href="/">MCX</a>
          <a href="/">Terms and Conditions</a>
          <a href="/">Policies & procedures</a>
          <a href="/">Privacy policy</a>
          <a href="/">Disclosure </a>
          <a href="/">For investor's attention </a>
          <a href="/">Investor charter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer