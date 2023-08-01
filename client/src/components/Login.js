import React, { useState } from "react";
import "../../src/App.css";
import { ChakraProvider } from "@chakra-ui/react";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <ChakraProvider>
        <Button onClick={onOpen}>Login</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Welcome!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Sign up with us to start Connecting with Resources!</h1>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Save
              </Button>
              <Button variant="ghost">Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
}
export default Login;
