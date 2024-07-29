import React from 'react';
import './Footer.css';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import Logo from '../../assets/logo.png'; // Adjust path if necessary

function Footer() {
  const footerSections = [
    ['Trending', 'Cuisine', 'Seasonal', 'Seafood', 'Vegan', 'Non-vegetarian'],
    ['Home', 'About Us', 'Contact Us', 'Blogs'],
    ['Terms of Service', 'Privacy Policy']
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={Logo} alt="Food Hunt Logo" className="footer-logo" />
        </div>
        <div className="footer-navigation">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <ul>
                {section.map(item => (
                  <li key={item}><a href={`/${item.toLowerCase().replace(/ /g, '-')}`}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-social">
        <h2>Connect With Us</h2>
        <div className="footer-social-icons">
          <BsLinkedin className="fa-footer" />
          <FaFacebook className="fa-footer" />
          <FaGithub className="fa-footer" />
          <BsTwitter className="fa-footer" />
          <ImInstagram className="fa-footer" />
        </div>
      </div>
      <div className="footer-copywrite">
        © 2024 Food Hunt Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
