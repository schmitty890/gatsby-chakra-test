import React from "react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Test from "../components/test/test"
import TestTwo from "../components/testTwo/testTwo"
import TestThree from "../components/testThree/testThree"

export default function Home() {
  return (
    <ChakraProvider>
      <Box bg="" w="100%" p={4} color="green">
        <div>Hello world!</div>
        <Test></Test>
        <TestTwo></TestTwo>
        <TestThree></TestThree>
      </Box>
    </ChakraProvider>
  )
}
