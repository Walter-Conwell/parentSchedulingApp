// import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import SignUp from "./Signup";

// const Navbar = () => {
//   return (
//     <Flex className="header" bg="blue.500" p="4">
//       <Box>
//         <Link color="white" href="/">
//           Kidz Direct
//         </Link>
//       </Box>
//       <Spacer />
//       <Box>
//         <Link color="white" href="/contact">
//           Contact
//         </Link>
//       </Box>
//       <Spacer />
//       <Box>
//         <Link color="white" href="/SignUp">
//           Sign up
//         </Link>
//       </Box>
//       <Spacer />
//       <Box>
//         <Link color="white" href="/Contact">
//           Log Input
//         </Link>
//       </Box>
//       <Box ml="4">
//         <Link color="white" href="/About Us">
//           About Us
//         </Link>
//       </Box>
//     </Flex>
//   );
// };

// export default Navbar;
// // follow example and tweak it.
import { Image, Flex, Button, HStack, chakra, Link } from "@chakra-ui/react";

const CTA = "Get Started";

export default function Navbar() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* <Image src={Logo.src} h="50px" /> */}

        <HStack as="nav" spacing="5">
          <Link color="black" href="/SignUp">
            Sign up
          </Link>
        </HStack>

        <HStack>
          <Button>{CTA}</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
