import React, { useState } from 'react';
import './App.css';
import Landing_page from './Components/Landing_page/Landing_page';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaSearch } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { MdClose } from 'react-icons/md';
import { BiMoon, BiSun, BiCart, BiUser } from 'react-icons/bi';
import Cuisine from './Components/Cuisine/Cuisine';
import Logo from './assets/FoodHunt Logo.jpg'; // Adjust path if necessary

function App() {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleMode = () => setToggle(!toggle);
  const toggleOverlay = () => setVisible(!visible);

  const navItems = [
    { label: 'Trending', options: ['Top 10', 'Top 20', 'Top 30'] },
    { label: 'Cuisines', options: ['Indian', 'Mexican', 'Canadian', 'Italian', 'Chinese', 'French'] },
    { label: 'Seasonal', options: ['Summer', 'Winter', 'Spring', 'Rainy'] },
    { label: 'Seafood', options: ['Shrimp', 'Crab', 'Lobster'] },
    { label: 'Vegan', options: ['Salad', 'Soup', 'Sandwich'] },
    { label: 'Non-vegetarian', options: ['Chicken', 'Beef', 'Pork'] },
  ];

  const footerSections = [
    ['Trending', 'Cuisines', 'Seasonal', 'Seafood', 'Vegan', 'Non-vegetarian'],
    ['Home', 'About Us', 'Contact Us', 'Blogs'],
    ['Terms of Service', 'Privacy Policy']
  ];

  return (
    <div>
      <div className={`Landing_page_container ${toggle ? 'Dark' : ''}`}>
        <nav className={`Landing_page_nav ${toggle ? 'Dark' : ''}`}>
          <h1>Food Hunt.</h1>
          {/* <div className="logo-container">
            <img src={Logo} alt="Food Hunt Logo" className="logo" />
          </div> */}
          <ul>
            {navItems.map(item => (
              <li key={item.label}>
                {item.label}
                <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
                  <ul>
                    {item.options.map(option => (
                      <li key={option}>{option}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div className="search">
            {visible ? (
              <MdClose className="fa" onClick={toggleOverlay} />
            ) : (
              <FaSearch className="fa" onClick={toggleOverlay} />
            )}
            {toggle ? (
              <BiMoon className="fa" onClick={toggleMode} />
            ) : (
              <BiSun className="fa" onClick={toggleMode} />
            )}
            <BiCart className="fa" />
            <BiUser className="fa" />
          </div>
        </nav>

        <div className={`overlay ${visible ? 'overlay-visible' : ''} ${toggle ? 'Dark' : 'Light'}`}>
          <div className="overlay-content">
            <FaSearch className="fa-within" />
            <input type="search" placeholder="Search..." className={`overlay-input ${toggle ? 'Dark' : ''}`} />
          </div>
        </div>
      </div>

      {/* <Landing_page /> */}
      <Cuisine />

        <footer>
            <div className="footer_container">
              <div>
                <img src={Logo} alt="Food Hunt Logo" />
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
                <BsLinkedin className="fa" />
                <FaFacebook className="fa" />
                <FaGithub className="fa" />
                <BsTwitter className="fa" />
                <ImInstagram className="fa" />
              </div>
            </div>
            <div className="footer_copywrite">
              © 2024 Food Hunt Pvt Ltd. All Rights Reserved
            </div>
        </footer>


    </div>
  );
}

export default App;
