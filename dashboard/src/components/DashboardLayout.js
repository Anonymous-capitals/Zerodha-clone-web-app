import React from "react";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      {/* LEFT SIDEBAR SPACE (watchlist width) */}
      <div style={{ width: 360 }} />

      {/* RIGHT CONTENT */}
      <div style={{ flex: 1 }}>
        <TopBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
