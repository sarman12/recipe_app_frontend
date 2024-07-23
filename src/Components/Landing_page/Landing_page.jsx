import React, { useState } from 'react';
import './Landing_page.css';
import { useNavigate } from 'react-router-dom';
import Calamari from '../../assets/calamari.jpg';
import Lasagna from '../../assets/lasanga.jpg';
import Quiche from '../../assets/quiche.jpg';
import Soup from '../../assets/soup.jpg';
import Biriyani from '../../assets/biriyani.jpg';

const complimentary_dishes = [
  { dishname: 'Chickpea soup: Italian Origin', image: Soup },
  { dishname: 'Quiche : A French Pie', image: Quiche },
  { dishname: 'Italian Pasta Dish : Lasagne', image: Lasagna },
  { dishname: 'Italian SeaFood : Calamari', image: Calamari },
  { dishname: 'Chicken Biriyani', image: Biriyani },
];

function Landing_page() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleImages = (name, state_of_origin, image) => {
    navigate('/recipe', { state: { name, state_of_origin, image } });
  };

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
          {complimentary_dishes.map((dishes, index) => (
            <div
              key={index}
              id="dish"
              onClick={() => handleImages(dishes.dishname, dishes.dishname.split(':')[1].trim(), dishes.image)}
            >
              <div id="dish_inner" style={{ backgroundImage: `url(${dishes.image})` }}>
                <p>{dishes.dishname}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='complimentry_btn_div'>
          <button className='btn'>See More</button>
        </div>
        
      </div>
    </div>
  );
}

export default Landing_page;
