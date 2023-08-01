import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import SignUp from "./components/Signup";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import DrawerExample from "./components/Drawer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          {/* Routes defined here */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
// nav links is similar to this concept
export default App;
// DrawerExample identifier should be changed, that was default name from library!
