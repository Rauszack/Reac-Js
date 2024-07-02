import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CiSquareChevDown } from "react-icons/ci";

const NavBar = () => {
  return (
    <div>
      <Heading>Logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<CiSquareChevDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </div>
  );
};

export default NavBar;
