import React from "react";
import { Flex, Box, Link, Spacer } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bg="blue.500"
      p="4"
      margin="0"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Link color="white" href="/Kidz Direct">
          {/* what to do with this space? */}
          placeholder
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Link color="white">*Logo*</Link>
      </Box>
      <Spacer />
      <Box ml="4">
        <Link color="white" href="/About Us">
          lorem
        </Link>
      </Box>
    </Flex>
  );
};

export default Footer;
