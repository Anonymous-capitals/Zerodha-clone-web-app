import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top main-nav"  // Updated class from "zerodha-nav" to "main-nav" for rebranding
      style={{ 
        background: "var(--tradesim-bg)",  // Updated variable from "--zerodha-bg" to "--tradesim-bg"
        minHeight: "100px",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
      }}
    >
      <div className="container p-2 px-3">
        <Link className="navbar-brand d-flex align-items-center" to="/" style={{transition: "opacity 0.2s ease"}}>
          <img
            className="navbar-logo"
            src="media/images/logo.svg"
            alt="Zerotrade"
            style={{maxHeight: "70px"}}
          />
        </Link>
        <button
          className="navbar-toggler border-0 py-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/signup" style={{fontWeight: "500"}}>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{fontWeight: "500"}}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product" style={{fontWeight: "500"}}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" style={{fontWeight: "500"}}>Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" style={{fontWeight: "500"}}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;