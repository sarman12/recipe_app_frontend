import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { BiCart, BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => setVisible(!visible);
  
  const navigate = useNavigate();
  
  const handleUserIconClick = () => {
    navigate('/login');
  };

  const navItems = [
    { label: 'TRENDING', options: ['Top 10', 'Top 20', 'Top 30'], link: '/trending' },
    { label: 'CUISINE', options: ['Indian', 'Chinese', 'Italian', 'Mexican', 'Japanese'], link: '/cuisine' },
    { label: 'SEASONAL', options: ['Summer', 'Winter', 'Spring', 'Rainy'], link: '/seasonal' },
    { label: 'SEAFOOD', options: ['Shrimp', 'Crab', 'Lobster'], link: '/seafood' },
    { label: 'VEGAN', options: ['Salad', 'Soup', 'Sandwich'], link: '/vegan' },
    { label: 'NON-VEGETERIAN', options: ['Chicken', 'Beef', 'Pork'], link: '/non-vegetarian' },
  ];

  return (
    <div className='Landing_page_container'>
      <nav className='Landing_page_nav'>
        <h1 onClick={() => {navigate('/')}}>Food Hunt.</h1>
        <ul>
          {navItems.map(item => (
            <li>
              <Link to={item.link}>{item.label}</Link>
              <div className='dropdown-content'>
                <ul>
                  {item.options.map(option => (
                    <li>
                      <Link to>{option}</Link>
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
          <BiCart className="fa" onClick={()=>{navigate('/yourcart')}} />
          <BiUser onClick={handleUserIconClick} className="fa" />
        </div>
      </nav>
      <div className={`overlay ${visible ? 'overlay-visible' : ''}`}>
        <div className="overlay-content">
          <FaSearch className="fa-within" />
          <input type="search" placeholder="Search......" className='overlay-input'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
