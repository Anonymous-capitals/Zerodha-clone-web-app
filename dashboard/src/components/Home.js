import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const Home = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Home;
