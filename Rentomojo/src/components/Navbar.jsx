import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineDown } from 'react-icons/ai';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.svg';
import Login from './Login';
import Signup from './Signup';
import './Navbar.css';

const Navbar = ({ cart, removeFromCart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  const logoSrc = useBreakpointValue({
    base: logo2,
    md: logo,
  });

  const buttonSize = useBreakpointValue({
    base: 'sm',
    md: 'md',
  });

  const openSignupModal = () => {
    onLoginClose();
    onSignupOpen();
  };

  const openLoginModal = () => {
    onSignupClose();
    onLoginOpen();
  };

  return (
    <>
      <Box
        position="fixed"
        width="100%"
        top={0}
        zIndex={1000}
        textAlign={'center'}
        bg={useColorModeValue('white', 'gray.800')}
        transition="box-shadow 0.2s"
        boxShadow={window.scrollY > 0 ? 'md' : 'none'}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mx="auto" maxW="1200px" px={4}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <img src={logoSrc} alt="Logo" style={{ height: '40px' }} />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} alignItems="center">
              <Menu>
                <HStack spacing={2}>
                  <span>Bangalore</span>
                  <MenuButton as={IconButton} icon={<AiOutlineDown />} />
                </HStack>
                <MenuList>
                  <MenuItem>Delhi</MenuItem>
                  <MenuItem>Mumbai</MenuItem>
                  <MenuItem>Kolkata</MenuItem>
                  <MenuItem>Chennai</MenuItem>
                </MenuList>
              </Menu>
              <InputGroup width={{ base: '200px', md: '600px' }} mr={4}>
                <Input type="text" placeholder="Search for products" />
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button variant="ghost" leftIcon={<FiShoppingCart />} onClick={onCartOpen}>
              Cart ({cart.length})
            </Button>
            <Button
              onClick={onLoginOpen}
              colorScheme="red"
              size={buttonSize}
              ml={4}
              className="login"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              LOGIN / SIGNUP
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Menu>
                <MenuButton as={Button} width="100%" display="flex" alignItems="center">
                  <span className="loc">Bangalore</span>
                  <IconButton colorScheme="#E2E8F0" icon={<AiOutlineDown />} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Delhi</MenuItem>
                  <MenuItem>Mumbai</MenuItem>
                  <MenuItem>Kolkata</MenuItem>
                  <MenuItem>Chennai</MenuItem>
                </MenuList>
              </Menu>
              <InputGroup width="100%">
                <Input type="text" placeholder="Search for products" />
              </InputGroup>
              <Box>
                <Button onClick={onLoginOpen} colorScheme="red" size={buttonSize}>
                  LOGIN / SIGNUP
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Cart Modal */}
      <Modal isOpen={isCartOpen} onClose={onCartClose}>
        <ModalOverlay />
        <ModalContent id='modalCart' className="cart-modal-content">
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.product.id} className="cart-item">
                  <img src={item.product.productimage} alt={item.product.title} />
                  <div>
                    <h3>{item.product.title}</h3>
                    <p>Rent: ₹{item.product.rent}/mo</p>
                    <p>Months: {item.months}</p>
                    <button onClick={() => removeFromCart(item.product.id)}>Remove</button><br/>
                    <button id='buy'>Buy</button>
                  </div>
                </div>
              ))
            )}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onCartClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={onLoginClose}>
        <ModalOverlay />
        <ModalContent id='modalFk' className="login-modal-content">
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <Login onClose={onLoginClose} />
            <p>Don't have an account? 
              <Button colorScheme='blue' variant={'link'} onClick={openSignupModal}>Create one</Button>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onLoginClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Signup Modal */}
      <Modal isOpen={isSignupOpen} onClose={onSignupClose}>
        <ModalOverlay />
        <ModalContent id='modalFk' className="login-modal-content">
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body">
            <Signup onClose={onSignupClose} />
            <p>Already have an account? 
              <Button colorScheme='blue' variant={'link'} onClick={openLoginModal}>Login</Button>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onSignupClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
