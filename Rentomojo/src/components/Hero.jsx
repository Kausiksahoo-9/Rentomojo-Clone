// src/components/Hero.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';

//in this used react slick

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
   
  };
// data from rento mojo
  const images = [
    "https://s.rmjo.in/Price_drop_HP_Web_july.webp",
    "https://s.rmjo.in/sofa_june_web.webp",
    "https://s.rmjo.in/bed_june_web.webp",
    "https://s.rmjo.in/Refer_HP_Banner_web.webp",
  ];

  return (
    <Box className="hero" >
      <Box className="hero-slider">
        <Slider {...settings}>
          {images.map((url, index) => (
            <Box key={index} className="hero-slide">
              <img src={url} alt={`Image ${index + 1}`} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Hero;
