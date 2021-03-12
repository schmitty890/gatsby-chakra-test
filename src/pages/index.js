import React, { Component } from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import UserContext from "../UserContext"
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
  state = {
    currentUser: 'Jason',
    version: null
  }

  render() {
    // const { version } = this.state
    // const queryResults = searchQuery === "" ? bookList : searchResults
    return (
      <ChakraProvider>
        <UserContext.Provider value={this.state.currentUser}>
          <Box bg="" w="100%" p={4} color="green">
            <div>Hello world!</div>
            <TestHolder />
          </Box>
        </UserContext.Provider>
      </ChakraProvider>
    )
  }
}
export default Home