import React from "react";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <Flex bg="blue.500" p="4" justifyContent="space-between">
        <Box>
          <Link color="white" href="/">
            Home
          </Link>
        </Box>
        <Box>
          <Link color="white" href="/about">
            About
          </Link>
        </Box>
        <Box>
          <Link color="white" href="/contact">
            Contact
          </Link>
        </Box>
      </Flex>
    </div>
  );
}
// sign in and sign up functions
export default App;
