import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const ProductModal = ({ product, onClose, addToCart }) => {
  const [months, setMonths] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, months);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{product.title}</h2>
        <img src={product.productimage} alt={product.title} />
        <p>Rent: ₹{product.rent}/mo</p>
        <p>Description: {product.description}</p>
        <p>Months: {months}</p>
        <input
          type="number"
          min="1"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
        /><br/>
        <button className="book-plan-btn" onClick={handleAddToCart}>
          Book Your Plan
        </button>
      </div>
    </div>
  );
};

const Slider = ({ addToCart }) => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(22);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(66);
      } else if (window.innerWidth < 1200) {
        setCenterSlidePercentage(33);
      } else {
        setCenterSlidePercentage(22);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/db.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSeeMoreClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">You'll love to take these home</h2>
      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        stopOnHover
        transitionTime={500}
        showArrows
        centerMode
        centerSlidePercentage={centerSlidePercentage}
      >
        {data.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.productimage} alt={item.title} className="carousel-image" />
            <div className="carousel-content">
              <h3>{item.title}</h3>
              <p className="rent">Rent: ₹{item.rent}/mo</p>
              <button className="see-more-btn" onClick={() => handleSeeMoreClick(item)}>See more</button>
            </div>
          </div>
        ))}
      </Carousel>

      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Slider;
