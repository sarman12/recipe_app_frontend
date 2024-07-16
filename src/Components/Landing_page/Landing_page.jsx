import React, { useState } from 'react';
import './Landing_page.css';
import { BiCart, BiCrop, BiCross, BiMoon, BiPhone, BiSun, BiUser } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { MdClose, MdEmail } from 'react-icons/md';
import { BsGithub, BsList } from 'react-icons/bs';
import Calamari from '../../assets/calamari.jpg';
import Lasanga from '../../assets/lasanga.jpg';
import Quiche from '../../assets/quiche.jpg';
import Soup from '../../assets/soup.jpg'
import { LiaLinkedin } from 'react-icons/lia';
// import { CgCross } from 'react-icons/cg';

function Landing_page() {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const togglenav = () => {
    setActive(!active);
  };

  const toggleMode = () => {
    setToggle(!toggle);
  };

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <div className={`Landing_page_container ${toggle ? 'Dark' : ''}`}>
      <nav className={`Landing_page_nav ${toggle ? 'Dark' : ''}`}>
        <h1>Food Hunt.</h1>
        <ul>
          <li>
            Trending
            <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
              <ul>
                <li>Top 10</li>
                <li>Top 20</li>
                <li>Top 30</li>
              </ul>
            </div>
          </li>
          <li>
            Cuisines
            <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
              <ul>
                <li>Indian</li>
                <li>Mexican</li>
                <li>Canadian</li>
                <li>Italian</li>
                <li>Chinese</li>
                <li>French</li>
              </ul>
            </div>
          </li>
          <li>
            Seasonal
            <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
              <ul>
                <li>Summer</li>
                <li>Winter</li>
                <li>Spring</li>
                <li>Rainy</li>
              </ul>
            </div>
          </li>
          <li>
            Seafood
            <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
              <ul>
                <li>Shrimp</li>
                <li>Crab</li>
                <li>Lobster</li>
              </ul>
            </div>
          </li>
          <li>
            Vegan
            <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
              <ul>
                <li>Salad</li>
                <li>Soup</li>
                <li>Sandwich</li>
              </ul>
            </div>
          </li>
          <li>
            Non-vegetarian
            <div className={`dropdown-content ${toggle ? 'Dark' : ''}`}>
              <ul>
                <li>Chicken</li>
                <li>Beef</li>
                <li>Pork</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="search">
          {visible ? (
            <MdClose className="fa" onClick={toggleOverlay} />
          ) : (
            <FaSearch className="fa" onClick={toggleOverlay} />
          )}
          {toggle ? <BiMoon className="fa" onClick={toggleMode} /> : <BiSun className="fa" onClick={toggleMode} />}
          <BiCart className="fa" />
          <BiUser className="fa" />
          
        </div>
      </nav>

      <div className={`overlay ${visible ? 'overlay-visible' : ''} ${toggle ? 'Dark' : 'Light'}`}>
        <div className="overlay-content">
          <FaSearch className="fa-within" />
          <input type="search" placeholder="Search..." className="overlay-input" />
        </div>
      </div>


      
      <svg width="0" height="0">
        <defs>
          <clipPath id="curvyPath" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.0000005 C 0.25,0.9 0.75,0.1 1,0 V 1 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className='Landing_page_body'>
        {/* <img src={Background} alt="" /> */}
        <div>
          <h2>Check out our Top 20 Summer dishes</h2>
          <button>Check Out</button>
        </div>
      </div>

  <div className="complimentary_dishes">
    <h1>Complimentary Dishes</h1>
    <div className="complimentary_dishes_container">
      <div className="soup" id='dish'>
        <p>Chickpea soup: Italian Origin</p>
      </div>
      <div className='Quiche' id='dish'>
        <p>Quiche : A French Pie</p>
      </div>
      <div className='Lasagne' id='dish'>
        <p>Italian Pasta Dish : Lasagne</p>
      </div>
      <div className='Calamari' id='dish'>
        <p>Italian SeaFood : Calamari</p>
      </div>
    </div>
    <div className='complimentry_btn_div'>
      <button className='btn'>See More</button>
    </div>
</div>



      <div className={`Landing_page_information ${active ? 'Landing_page_information_show' : ''}`}>
        <div className="contact_form">
        <div>
        <BiPhone />
        <MdEmail />
          <BsGithub />
          <LiaLinkedin />

        </div>
        <div className="contact">
            <input type="text" name="" id="" placeholder="Enter your Name" />
            <input type="email" className="text" placeholder='Enter your email' />
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter your queries"></textarea>
            <button>Send</button>
        </div>
            
            
            
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>

        <MdClose className="special_menu" onClick={togglenav}/>
      </div>


      <div className="newsletter">
      

      </div>


      <BsList className="special_menu" onClick={togglenav}/>

    </div>
  );
}

export default Landing_page;
