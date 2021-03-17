import React from "react"
import {
  Button,
  Input,
  Stack,
  Switch,
  FormControl,
  FormLabel,
  Badge,
  Flex,
  Box,
  Avatar,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"
import axios from "axios"
import { UserConsumer } from "../../contexts/UserContext"
import myData from "../../data/my-json-content.json"

const data = {
  value1: "test 1",
  value2: "test2",
}

// function fetchTheData() {
//   console.log('fetchTheData')
//   axios.get('https://randomuser.me/api/?results=1')
//     .then(res => {
//       console.log(res)
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

async function fetchTheData() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("https://randomuser.me/api/?results=1")
    console.log(response)
  } catch (error) {
    console.log(error) // catches both errors
  }
}

function getSwitchValue(e) {
  console.log(e)
  console.log(e.nativeEvent.target.checked)
}

const Test = () => {
  return (
    <UserConsumer>
      {({ user, changeCurrentUser }) => (
        <div>
          <div>{user}</div>
          <Button colorScheme="blue" onClick={changeCurrentUser}>
            change name to bob
          </Button>
          <h1>{myData.title}</h1>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Enable email alerts?
            </FormLabel>
            <Switch
              id="email-alerts"
              colorScheme="red"
              onChange={e => getSwitchValue(e)}
            />
          </FormControl>

          <Stack direction="row">
            <Badge>Default</Badge>
            <Badge colorScheme="green">Success</Badge>
            <Badge colorScheme="red">Removed</Badge>
            <Badge colorScheme="purple">New</Badge>
          </Stack>

          <Stack direction="row">
            <Badge variant="outline" colorScheme="green">
              Default
            </Badge>
            <Badge variant="solid" colorScheme="green">
              Success
            </Badge>
            <Badge variant="subtle" colorScheme="green">
              Removed
            </Badge>
          </Stack>

          <Flex>
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box ml="3">
              <Text fontWeight="bold">
                Segun Adebayo
                <Badge ml="1" colorScheme="green">
                  New
                </Badge>
              </Text>
              <Text fontSize="sm">UI Engineer</Text>
            </Box>
          </Flex>

          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for submitting your application. Our team will get back to
              you soon.
            </AlertDescription>
          </Alert>

          <ul style={{ border: `1px solid red` }}>
            {myData.content.map((data, index) => {
              return <li key={`content_item_${index}`}>{data.item}</li>
            })}
          </ul>
        </div>
      )}
    </UserConsumer>
  )
}

export default Test

// export default function Test() {

//   return (
//     <div>
//       {this.props.currentUser}
//       {/* <div>{data.value1}</div>
//       <Button colorScheme="blue" onClick={fetchTheData}>test btn</Button>
//       <Stack spacing={3}>
//         <Input placeholder="extra small size" size="xs" />
//         <Input placeholder="small size" size="sm" />
//         <Input placeholder="medium size" size="md" />
//         <Input id="largeOne" placeholder="large size" size="lg" />
//       </Stack> */}
//     </div>
//   )
// }
