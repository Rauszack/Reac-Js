import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import './NavBar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'} bg={'#222831'}>
        <Heading color={'#F7EEF1'} ml={4}><Link to='/'><Image w={'20%'} src={logo}/></Link></Heading>
        <Menu>
        <MenuButton as={Button} color={'#191520'} rightIcon={<FaAngleDown />}>
            Categoría
        </MenuButton>
        <MenuList>
            <MenuItem 
              color={'#191520'}
              _hover={{ bg: '#191520', color: 'blanchedalmond' }}
              >
              <Link to='/categoría/rubio'>
              rubio
              </Link>
            </MenuItem>
            <MenuItem 
              color={'#191520'}
              _hover={{ bg: '#191520', color: 'blanchedalmond' }}
              >
              <Link to='/categoría/rosa'>
              rosa
              </Link>
            </MenuItem>
            <MenuItem 
              color={'#191520'}
              _hover={{ bg: '#191520', color: 'blanchedalmond' }}
              >
              <Link to='/categoría/brujita'>
              brujita
              </Link>
            </MenuItem>
            <MenuItem 
              color={'#191520'}
              _hover={{ bg: '#191520', color: 'blanchedalmond' }}
              >
              <Link to='/categoría/piña'>
              piña
              </Link>
            </MenuItem>
        </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  );
};

export default NavBar;