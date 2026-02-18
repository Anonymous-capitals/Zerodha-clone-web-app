import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import UserMenu from "./UserMenu";


const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link to="/">
          <img src="/logo.png" alt="Zerotrade" className="topbar-logo" />
        </Link>
      </div>

      <div className="topbar-center">
        <Menu />
      </div>

      <div className="topbar-right">
        <UserMenu />
      </div>
    </div>
  );
};

export default TopBar;
