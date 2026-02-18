import React from "react";
import TopBar from "./TopBar";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, width: "100%" }}>
        <TopBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
