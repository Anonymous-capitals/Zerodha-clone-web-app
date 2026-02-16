import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="main-footer">  {/* Updated class from "zerodha-footer" to "main-footer" */}
      <div className="container border-top mt-5 footer-container">
        <div className="row mt-4 mt-md-5 g-4">
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            {/* Replaced copyrighted logo with original placeholder text. Replace with your new logo image (e.g., src="media/images/tradesim-logo.svg") */}
            <span style={{fontSize: "1.5rem", fontWeight: "bold", color: "var(--tradesim-primary)", display: "block", marginBottom: "1rem"}}>TradeSim</span>
            <p className="footer-copyright">&copy; {currentYear}, TradeSim. All rights reserved.</p>  {/* Updated to generic copyright */}
            <div className="social-links">
              {/* Removed Zerodha-specific social links; replaced with placeholders. Update with your real accounts if available. */}
              <a href="/" title="Twitter" style={{pointerEvents: "none", opacity: 0.5}}>  {/* Placeholder; disable or update */}
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="/" title="Facebook" style={{pointerEvents: "none", opacity: 0.5}}>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/" title="Instagram" style={{pointerEvents: "none", opacity: 0.5}}>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="/" title="LinkedIn" style={{pointerEvents: "none", opacity: 0.5}}>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="/" title="YouTube" style={{pointerEvents: "none", opacity: 0.5}}>
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-3 footer">
            <p style={{fontWeight: "600", marginBottom: "1rem"}}>Company</p>
            <a href="/">About</a>  {/* Kept generic */}
            <a href="/">Products</a>
            <a href="/">Pricing</a>
            <a href="/">Referral Program</a>  {/* Generalized */}
            <a href="/">Careers</a>
            <a href="/">Tech Blog</a>  {/* Replaced "Zerodha.tech" with generic */}
            <a href="/">Press & Media</a>
            <a href="/">Community Support</a>  {/* Replaced "Zerodha Cares" with generic */}
          </div>
          <div className="col-6 col-md-3 col-lg-3 footer">
            <p style={{fontWeight: "600", marginBottom: "1rem"}}>Support</p>
            <a href="/">Contact Us</a>
            <a href="/">Support Portal</a>
            <a href="/">Trading Blog</a>  {/* Replaced "Z-Connect blog" with generic */}
            <a href="/">Fees & Charges</a>  {/* Generalized */}
            <a href="/">Resources</a>
            <a href="/">Videos</a>
            <a href="/">Market Overview</a>
            <a href="/">File a Complaint</a>
            <a href="/">Complaint Status</a>
          </div>
          <div className="col-12 col-md-6 col-lg-3 footer">
            <p style={{fontWeight: "600", marginBottom: "1rem"}}>Account</p>
            <a href="/">Open an Account</a>
            <a href="/">Fund Transfer</a>
            <a href="/">Demo Account</a>  {/* Generalized for simulation */}
            <a href="/">Commodity Trading</a>
            <a href="/">Account Setup</a>  {/* Replaced "Dematerialisation" with generic */}
          </div>
        </div>
        <div className="row mt-4 mt-md-5 text-small text-muted footer-disclaimer">
          <p><strong>TradeSim:</strong> This is an educational trading simulator for learning purposes only. It does not involve real money or securities trading. All simulations are hypothetical and for informational use. Not affiliated with any financial institutions or exchanges.</p>  {/* Completely rewritten to be original and educational */}
          <p><strong>Risk Disclosure:</strong> Simulated trading does not guarantee real-world results. Investments in securities carry market risks; always consult a financial advisor. This app is for educational purposes and does not provide investment advice.</p>
          <p>By using TradeSim, you agree to our terms. For any issues, contact support. Remember, trading involves risk—educate yourself before real investing.</p>
        </div>
        <div className="foootersLastPart">
          <a href="/">Terms and Conditions</a>
          <a href="/">Policies & Procedures</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Disclosure</a>
          <a href="/">For Learner's Attention</a>  {/* Generalized */}
          <a href="/">User Charter</a>  {/* Generalized */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;