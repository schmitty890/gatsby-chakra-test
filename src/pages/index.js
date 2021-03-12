import React, { Component } from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import {UserProvider, UserConsumer} from "../UserContext"
import TestHolder from "../components/testHolder/testHolder"

export default function Home() {
  return (
    <ChakraProvider>
      <UserProvider>
          <Box bg="" w="100%" p={4} color="green">
            <div>Hello world!</div>
            <TestHolder />
          </Box>
      </UserProvider>
    </ChakraProvider>
  )
}


// class Home extends Component {


//   render() {
//     return (
//       <ChakraProvider>
//         <UserProvider>
//             <Box bg="" w="100%" p={4} color="green">
//               <div>Hello world!</div>
//               <TestHolder />
//             </Box>
//         </UserProvider>
//       </ChakraProvider>
//     )
//   }
// }
// export default Home