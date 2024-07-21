import React, { useState } from 'react';
import './Landing_page.css';
import Calamari from '../../assets/calamari.jpg';
import Lasanga from '../../assets/lasanga.jpg';
import Quiche from '../../assets/quiche.jpg';
import Soup from '../../assets/soup.jpg'

function Landing_page() {
  const [toggle, setToggle] = useState(false);

  const toggleMode = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`Landing_page_container ${toggle ? 'Dark' : ''}`}>
      <svg width="0" height="0">
        <defs>
          <clipPath id="curvyPath" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.0000005 C 0.25,0.9 0.75,0.1 1,0 V 1 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className='Landing_page_body'>
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
    </div>
  );
}

export default Landing_page;
