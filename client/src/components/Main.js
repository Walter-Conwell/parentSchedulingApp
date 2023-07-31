import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Drawer from "./Drawer";

const Main = ({ currentPage }) => {
  console.log(currentPage);
  const renderPage = () => {
    if (currentPage === "Home") {
      return <About />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Contact />;
  };
  return <div className="main">{renderPage()}</div>;
};

export default Main;
