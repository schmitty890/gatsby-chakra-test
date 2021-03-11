import React from "react"
import { Button, Input, Stack } from "@chakra-ui/react"
import axios from "axios"




const data = {
  value1: 'test 1',
  value2: 'test2'
};

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
    const response = await axios.get("https://randomuser.me/api/?results=1");
    console.log(response);
  } catch (error) {
    console.log(error); // catches both errors
  }
}

export default function Test() {
  

  return (
    <div>
      <div>{data.value1}</div>
      <Button colorScheme="blue" onClick={fetchTheData}>test btn</Button>
      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input id="largeOne" placeholder="large size" size="lg" />
      </Stack>
    </div>
  )
}