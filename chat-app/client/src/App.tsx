import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import SetProfilePicture from "./components/ProfilePicture/SetProfilePicture";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/setprofilepicture" element={<SetProfilePicture />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
