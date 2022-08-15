import React from "react";
import { Route, Routes } from "react-router-dom";
import Discussion from "./components/pages/Discussion";
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import EditProfile from "./components/pages/EditProfile";
import Profile from "./components/pages/Profile";
// import Profile from "./components/pages/Profile";
import Room from "./components/pages/Room";
import PrivateRoutes from "./utils/PrivateRoutes";
import Settings from "./components/Settings";

const RoutesConfig = ({ user }) => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/room" element={<Room user={user} />} />
        <Route path="/settings" element={<Settings user={user} />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
      </Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/editprofile" element={<EditProfile user={user} />} />
    </Routes>
  );
};

export default RoutesConfig;
