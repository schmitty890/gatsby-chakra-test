import React, { Component } from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import {UserProvider, UserConsumer} from "../UserContext"
import Test from "../components/test/test"
import TestTwo from "../components/testTwo/testTwo"
import TestThree from "../components/testThree/testThree"
import TestHolder from "../components/testHolder/testHolder"

// export default function Home() {
//   return (
//     <ChakraProvider>
//       <UserContext.Provider>
//         <Box bg="" w="100%" p={4} color="green">
//           <div>Hello world!</div>
//           <TestHolder />
//         </Box>
//       </UserContext.Provider>
//     </ChakraProvider>
//   )
// }


class Home extends Component {


  render() {
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
}
export default Home