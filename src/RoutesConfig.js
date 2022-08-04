import React from "react";
import { Route, Routes } from "react-router-dom";
import Discussion from "./components/pages/Discussion";
import LandingPage from "./components/pages/LandingPage";
import Room from "./components/pages/Room";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/room/:id" element={<Room />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};

export default RoutesConfig;
