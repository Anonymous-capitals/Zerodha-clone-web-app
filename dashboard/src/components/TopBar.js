import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import UserMenu from "./UserMenu";


const TopBar = () => {
  return (
    <div className="topbar">
      {/* Left: Logo */}
      <div className="topbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Zerodha" className="topbar-logo" />
        </Link>
      </div>

      {/* Center: Navigation */}
      <div className="topbar-center">
        <Menu />
      </div>

      {/* Right: User avatar */}
      <div className="topbar-right">
        <UserMenu />
      </div>
    </div>
  );
};

export default TopBar;
