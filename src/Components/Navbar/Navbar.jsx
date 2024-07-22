import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BiCart, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ toggle, visible, toggleOverlay }) {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const handleUserIconClick = () => {
    navigate('/login');
    setIsLogin(true);
  };

  const navItems = [
    { label: 'Trending', options: ['Top 10', 'Top 20', 'Top 30'], link: '/trending' },
    { label: 'Cuisines', options: ['Indian', 'Chinese', 'Italian', 'Mexican', 'Japanese'], link: '/cuisine' },
    { label: 'Seasonal', options: ['Summer', 'Winter', 'Spring', 'Rainy'], link: '/seasonal' },
    { label: 'Seafood', options: ['Shrimp', 'Crab', 'Lobster'], link: '/seafood' },
    { label: 'Vegan', options: ['Salad', 'Soup', 'Sandwich'], link: '/vegan' },
    { label: 'Non-vegetarian', options: ['Chicken', 'Beef', 'Pork'], link: '/nonvegetarian' },
  ];

  return (
    <div className={`Landing_page_container ${toggle ? 'Dark' : ''}`}>
      <nav className={`Landing_page_nav ${toggle ? 'Dark' : ''}`}>
        <h1>Food Hunt.</h1>
        <ul>
          {navItems.map(item => (
            <li key={item.label}>
              <Link to={item.link}>{item.label}</Link>
              <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
                <ul>
                  {item.options.map(option => (
                    <li key={option}>
                      <Link to={`/cuisine#${option.toLowerCase()}`}>{option}</Link>
                    </li>
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
          <BiCart className="fa" />
          <BiUser onClick={handleUserIconClick} className="fa" />
        </div>
      </nav>
      <div className={`overlay ${visible ? 'overlay-visible' : ''} ${toggle ? 'Dark' : 'Light'}`}>
        <div className="overlay-content">
          <FaSearch className="fa-within" />
          <input type="search" placeholder="Search..." className={`overlay-input ${toggle ? 'Dark' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
