import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import SignUp from "./components/SignupForm/SignupForm";
import { Dashboard } from "./components/Dashboard/Dashboard";
import SignInSide from "./components/LoginForm/LoginForm";
import Register from "./components/SignupForm/SignupForm";
import SignUp from "./playground/Signup/signup";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/Signin" element={<SignInSide />} />
          <Route path="/SignUp" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Register" element={<SignUp />} />
        </Routes>
      </Router>
  );
};

export default App;
