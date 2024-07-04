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
  Flex,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import './NavBar.css'
import { link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={''} >
      <Heading ml={4}><link to='./'>Logo</link></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem><link to='/categorias/:rubio'>rubio</link></MenuItem>
          <MenuItem><link to='/categorias/:rosa'>rosa</link></MenuItem>
          <MenuItem><link to='/categorias/:brujita'>brujita</link></MenuItem>
          <MenuItem><link to='/categorias/:piña'>piña</link></MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex> 
  );
};

export default NavBar;
