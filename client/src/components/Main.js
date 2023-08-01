import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
import SignUp from "./Signup";
import Login from "./Login";

function Main() {
  return (
    <div>
      <Box as="section" bg="darkgreen">
        sample
        <SignUp />
      </Box>
      <Box as="section" bg="darkgreen">
        sample
        <Login />
      </Box>
    </div>
  );
}

export default Main;
// external css (or styled objects)
// style it myself!!
// navbar diff color (cream color)
// app- dark background
// chakura ui - styled system/theme rgba numbers
// wrap with form control - inputs
