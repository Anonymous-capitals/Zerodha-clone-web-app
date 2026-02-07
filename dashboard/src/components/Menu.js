// import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  // const [selected, setSelected] = useState(0);

  const menuItem = "menu-item";
  const activeItem = "menu-item active";

  return (
    <ul className="menu-list">
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? activeItem : menuItem}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/orders" className={({ isActive }) => isActive ? activeItem : menuItem}>
          Orders
        </NavLink>
      </li>
      <li>
        <NavLink to="/holdings" className={({ isActive }) => isActive ? activeItem : menuItem}>
          Holdings
        </NavLink>
      </li>
      <li>
        <NavLink to="/positions" className={({ isActive }) => isActive ? activeItem : menuItem}>
          Positions
        </NavLink>
      </li>
      <li>
        <NavLink to="/funds" className={({ isActive }) => isActive ? activeItem : menuItem}>
          Funds
        </NavLink>
      </li>
      <li>
        <NavLink to="/apps" className={({ isActive }) => isActive ? activeItem : menuItem}>
          Apps
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
