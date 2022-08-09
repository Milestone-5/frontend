import React from "react";
import { Route, Routes } from "react-router-dom";
import Discussion from "./components/pages/Discussion";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Settings from "./components/pages/Settings";
// import Profile from "./components/pages/Profile";
import Room from "./components/pages/Room";
import PrivateRoutes from "./utils/PrivateRoutes";

const RoutesConfig = ({ user }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/room" element={<Room />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
      </Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default RoutesConfig;
