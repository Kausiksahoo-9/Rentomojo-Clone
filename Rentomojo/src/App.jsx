import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Slider from './components/Slider';
import Ifooter from './components/Ifooter';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, months) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, months }
            : item
        )
      );
    } else {
      setCart([...cart, { product, months }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  return (
    <ChakraProvider>
      <div className='otrdiv'>
        <Navbar cart={cart} removeFromCart={removeFromCart} />
        <Hero />
        <Categories />
        <Slider addToCart={addToCart} />
        <Ifooter />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
