import React, { useState } from "react";
import "./App.css";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <Main currentPage={currentPage} />
    </div>
    
  );
}

export default App;
