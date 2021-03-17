import React, { Component } from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  ChevronDownIcon,
  Image,
  IconButton,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/react"

import { UserConsumer } from "../../contexts/UserContext"

class Header extends Component {
  render() {
    return (
      <UserConsumer>
        {({ user }) => (
          <Menu>
            <MenuButton as={Button} colorScheme="red">
              Profile for {user}
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>
                  Docs tests
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="https://placekitten.com/120/120"
                    alt="Simon the pensive"
                    mr="12px"
                  />
                </MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        )}
      </UserConsumer>
    )
  }
}

// class Header extends Component {
//   render() {
//     return (
//       <UserConsumer>
//         {({ user }) => (
//           <Menu>
//             <MenuButton
//               as={IconButton}
//               aria-label="Options"
//               icon={<HamburgerIcon />}
//               size="xs"
//               variant="outline"
//             />
//             <MenuList>
//               <MenuItem icon={<AddIcon />} command="⌘T">
//                 New Tab
//               </MenuItem>
//               <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
//                 New Window
//               </MenuItem>
//               <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
//                 Open Closed Tab
//               </MenuItem>
//               <MenuItem icon={<EditIcon />} command="⌘O">
//                 Open File...
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         )}
//       </UserConsumer>
//     )
//   }
// }

export default Header
