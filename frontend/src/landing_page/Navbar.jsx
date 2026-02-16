import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top main-nav"
      style={{ 
        minHeight: "80px",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        boxShadow: isScrolled ? "var(--zerotrade-shadow-md)" : "var(--zerotrade-shadow-sm)",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container p-2 px-3">
        <Link 
          className="navbar-brand d-flex align-items-center" 
          to="/" 
          style={{
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: "scale(1)"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img
            className="navbar-logo"
            src="media/images/logo.svg"
            alt="Zerotrade"
            style={{
              maxHeight: "60px",
              filter: "drop-shadow(0 2px 4px rgba(40, 167, 69, 0.1))"
            }}
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
          style={{
            transition: "all 0.3s ease",
            opacity: 0.7
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;