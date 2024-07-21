import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BiMoon, BiSun, BiCart, BiUser } from 'react-icons/bi';

function Navbar({ toggle, toggleMode, visible, toggleOverlay }) {
  const navItems = [
    { label: 'Trending', options: ['Top 10', 'Top 20', 'Top 30'] },
    { label: 'Cuisines', options: ['Indian', 'Mexican', 'Canadian', 'Italian', 'Chinese', 'French'] },
    { label: 'Seasonal', options: ['Summer', 'Winter', 'Spring', 'Rainy'] },
    { label: 'Seafood', options: ['Shrimp', 'Crab', 'Lobster'] },
    { label: 'Vegan', options: ['Salad', 'Soup', 'Sandwich'] },
    { label: 'Non-vegetarian', options: ['Chicken', 'Beef', 'Pork'] },
  ];

  return (
    <div className={`Landing_page_container ${toggle ? 'Dark' : ''}`}>
      <nav className={`Landing_page_nav ${toggle ? 'Dark' : ''}`}>
        <h1>Food Hunt.</h1>
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
  );
}

export default Navbar;
