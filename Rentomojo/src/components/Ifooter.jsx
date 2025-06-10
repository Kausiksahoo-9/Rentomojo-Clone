import React from 'react';
import './Ifooter.css';

const Ifooter = () => {
  const features = [
    {
      icon: 'https://tse2.mm.bing.net/th?id=OIP.ZnphE5BDUlsQmVWiT0CiZAHaHa&pid=Api&P=0&h=180',
      title: 'Finest-quality products',
      description: 'Quality matters to you, and us! That\'s why we do a strict quality-check for every product.',
    },
    {
      icon: 'https://tse2.mm.bing.net/th?id=OIP.GEsyBjdF3INBZqqvsfdl7AHaHa&pid=Api&P=0&h=180',
      title: 'Free relocation',
      description: 'Changing your house or even your city? We\'ll relocate your rented products for free.',
    },
    {
      icon: 'https://tse2.mm.bing.net/th?id=OIP.4MX1KgytVZLhnRt_Ktq4ngHaHa&pid=Api&P=0&h=180',
      title: 'Free maintenance',
      description: 'Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.',
    },
    {
      icon: 'https://tse1.mm.bing.net/th?id=OIP.6grpV_cp9yptDRFudSqqlAHaFO&pid=Api&P=0&h=180',
      title: 'Cancel anytime',
      description: 'Pay only for the time you use the product and close your subscription without any hassle.',
    },
    {
      icon: 'https://tse2.mm.bing.net/th?id=OIP.WX2lEZzxKeOHMU5dFsluRQAAAA&pid=Api&P=0&h=180',
      title: 'Easy return on delivery',
      description: 'If you don\'t like the product on delivery, you can return it right away—no questions asked.',
    },
    {
      icon: 'https://tse2.mm.bing.net/th?id=OIP.sA1Xp5UhBOAX6_XgqnLE9wHaHa&pid=Api&P=0&h=180',
      title: 'Keep upgrading',
      description: 'Bored of the same product? Upgrade to try another, newer design and enjoy the change!',
    },
  ];

  return (
    <div className="footer-container">
      <h2 className="footer-header">There's more to renting</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ifooter;
