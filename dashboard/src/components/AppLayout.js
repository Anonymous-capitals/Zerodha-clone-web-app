import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const AppLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
