import React from 'react';
import './Footer.css';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import Logo from '../../assets/FoodHunt Logo.jpg'; // Adjust path if necessary

function Footer() {
  const footerSections = [
    ['Trending', 'Cuisines', 'Seasonal', 'Seafood', 'Vegan', 'Non-vegetarian'],
    ['Home', 'About Us', 'Contact Us', 'Blogs'],
    ['Terms of Service', 'Privacy Policy']
  ];

  return (
    <footer>
      <div className="footer_container">
        <div>
          <img src={Logo} alt="Food Hunt Logo" className="footer_logo" />
        </div>
        <div className="navigation_container">
          {footerSections.map((section, index) => (
            <div key={index} className="footer_content">
              <ul>
                {section.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer_social">
        <h2>Connect With Us</h2>
        <div>
          <BsLinkedin className="fa_footer" />
          <FaFacebook className="fa_footer" />
          <FaGithub className="fa_footer" />
          <BsTwitter className="fa_footer" />
          <ImInstagram className="fa_footer" />
        </div>
      </div>
      <div className="footer_copywrite">
        © 2024 Food Hunt Pvt Ltd. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
