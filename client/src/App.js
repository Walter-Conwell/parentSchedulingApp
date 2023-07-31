import React, { useState } from "react";
import "./App.css";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DrawerExample from "./components/Drawer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <DrawerExample
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <Main currentPage={currentPage} />
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default App;
// DrawerExample identifier should be changed, that was default name from library!
