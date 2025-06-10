import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <h3>Enjoy An Upgraded Lifestyle In Bangalore City On A Budget With RentoMojo!</h3>
          <p>
            RentoMojo is a leading rental company with a pan-India presence. We offer furniture, appliances, and electronics on rent in Bangalore at an affordable monthly fee. When you choose to rent from us instead of buying from a store, you get to use the best products in the market and still save money!
          </p>
          <p>
            Whether you have a home in Bangalore or have just rented a room here, you’ll find everything you need on our website. We offer top-quality furniture, appliances, and electronics, made by the most dependable, in-demand brands around. If you choose to rent from us, you will receive multiple rewards like free maintenance, free relocation, and damage waiver.
          </p>
          <p>
            RentoMojo makes it effortless for you to rent from us. All you need to do is pick out the products you like, add them to your cart, and then check out. Our team will deliver your rental items directly to your home and also install them for you. We offer fast delivery to all parts of Bangalore, including locations such as Bangalore Bazaar, Malleswaram, Doorvavinagar, Bangalore Sub Foreign Post, and Agara.
          </p>
          <a href="/read-more">Read More</a>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>RENTOMOJO</h4>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/culture">Culture</a></li>
              <li><a href="/investors">Investors</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/our-benefits">Our Benefits</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
              <li><a href="/landlords">Landlords</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>INFORMATION</h4>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/support-home">Support Home</a></li>
              <li><a href="/documents-required">Documents Required</a></li>
              <li><a href="/annual-returns">Annual Returns</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>POLICIES</h4>
            <ul>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
              <li><a href="/cancellation-return">Cancellation & Return</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/rental-terms">Rental Terms & Conditions</a></li>
              <li><a href="/referral-terms">Referral Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>NEED HELP?</h4>
            <p><a href="mailto:jo@rentomojo.com">jo@rentomojo.com</a></p>
            <h4>DOWNLOAD APP</h4>
            <div className="app-links">
              {/* <a href="https://play.google.com/store"><img src="https://tse2.mm.bing.net/th?id=OIP.FHHIJUpM4p-GzAKE802VsAHaEo&pid=Api&P=0&h=180" alt="Google Play" /></a> */}
              <a href="https://www.apple.com/app-store/"><img src="https://tse1.mm.bing.net/th?id=OIP.hs34C-pG50SpVUiCayJdcAHaFc&pid=Api&P=0&h=180" alt="App Store" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
