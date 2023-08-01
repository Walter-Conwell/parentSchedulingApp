// import logo from "./logo.svg";
// notes - not a mismatch
// next- use this that works, and incorporate
import React, { useState } from "react";
import "../../src/App.css";
import { ChakraProvider } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <ChakraProvider>
        <Button onClick={onOpen}>SignUp</Button>

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

export default SignUp;

// import React, { useState } from "react";
// import "./App.css";
// import { ChakraProvider } from "@chakra-ui/react";
// import { Flex, Box, Link, Spacer } from "@chakra-ui/react";
// import { SettingsIcon } from "@chakra-ui/icons";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import SignUp from "./components/Signup";
// import Footer from "./components/Footer";
// // import DrawerExample from "./components/Drawer";

// function App() {
//   const [currentPage, setCurrentPage] = useState("About");
//   const handlePageChange = (page) => setCurrentPage(page);
//   return (
//     <div className="App">
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* <DrawerExample
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       /> */}
//       <Main currentPage={currentPage} />
//       <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
//     </div>
//   );
// }

// export default App;
// // DrawerExample identifier should be changed, that was default name from library!

// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";
// import { ADD_PROFILE } from "../utils/mutations";
// import { ChakraProvider } from "@chakra-ui/react";
// import {
//   Flex,
//   Box,
//   Link,
//   Spacer,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Button,
//   ButtonGroup,
// } from "@chakra-ui/react";
// // we link with chakra only

// // const Signup = () => {
// //   const [formState, setFormState] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

// //   // update state based on form input changes
// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     setFormState({
// //       ...formState,
// //       [name]: value,
// //     });
// //   };

// //   // submit form
// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();
// //     console.log(formState);

// //     try {
// //       const { data } = await addProfile({
// //         variables: { ...formState },
// //       });

// //       Auth.login(data.addProfile.token);
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   };
// // };

// // const Modal = document.body
// function SignUp() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Sign Up/Login</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>login or sign up</ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant="ghost">SignUp</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// // plug import ADD_USER into submit button.
// export default SignUp;
// // // to do
// // // queries, mutations, resolvers
// // // tie backend to frontend
// // act 25 sign up

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ChakraProvider } from "@chakra-ui/react";
// // import { Flex, Box, Spacer } from "@chakra-ui/react";
// // import {
// //   Modal,
// //   ModalOverlay,
// //   ModalContent,
// //   ModalHeader,
// //   ModalFooter,
// //   ModalBody,
// //   ModalCloseButton,
// //   useDisclosure,
// //   Button,
// //   ButtonGroup,
// // } from "@chakra-ui/react";
// // import { useMutation } from "@apollo/client";
// // import { ADD_PROFILE } from "../utils/mutations";

// // import Auth from "../utils/auth";

// // const Signup = () => {
// //   const [formState, setFormState] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });
// //   const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

// //   // update state based on form input changes
// //   const handleChange = (event) => {
// //     const { name, value } = event.target;

// //     setFormState({
// //       ...formState,
// //       [name]: value,
// //     });
// //   };

// //   // submit form
// //   const handleFormSubmit = async (event) => {
// //     event.preventDefault();
// //     console.log(formState);

// //     try {
// //       const { data } = await addProfile({
// //         variables: { ...formState },
// //       });

// //       Auth.login(data.addProfile.token);
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   };

// //   return (
// //     <main className="flex-row justify-center mb-4">
// //       <div className="col-12 col-lg-10">
// //         <div className="card">
// //           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
// //           <div className="card-body">
// //             {data ? (
// //               <p>
// //                 Success! You may now head{" "}
// //                 <Link to="/">back to the homepage.</Link>
// //               </p>
// //             ) : (
// //               <form onSubmit={handleFormSubmit}>
// //                 <input
// //                   className="form-input"
// //                   placeholder="Your username"
// //                   name="name"
// //                   type="text"
// //                   value={formState.name}
// //                   onChange={handleChange}
// //                 />
// //                 <input
// //                   className="form-input"
// //                   placeholder="Your email"
// //                   name="email"
// //                   type="email"
// //                   value={formState.email}
// //                   onChange={handleChange}
// //                 />
// //                 <input
// //                   className="form-input"
// //                   placeholder="******"
// //                   name="password"
// //                   type="password"
// //                   value={formState.password}
// //                   onChange={handleChange}
// //                 />
// //                 <button
// //                   className="btn btn-block btn-info"
// //                   style={{ cursor: "pointer" }}
// //                   type="submit"
// //                 >
// //                   Submit
// //                 </button>
// //               </form>
// //             )}

// //             {error && (
// //               <div className="my-3 p-3 bg-danger text-white">
// //                 {error.message}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // };

// // export default Signup;
