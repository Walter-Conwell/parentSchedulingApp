import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SignUp from "./components/Signup";
// import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
// import Login from "./components/Login";
// import DrawerExample from "./components/Drawer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          {/* Routes defined here */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
// nav links is similar to this concept
export default App;
// DrawerExample identifier should be changed, that was default name from library!
