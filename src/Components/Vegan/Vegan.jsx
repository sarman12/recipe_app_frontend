import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Vegan.css';
import { BiPlus } from 'react-icons/bi';
import { vegan_dish_list } from '../Vegan_dish_list'; // Ensure this path is correct

const Vegan = () => {
  const navigate = useNavigate();

  const handleImageClick = (dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/vegan/${formattedDishName}/recipe`, { state: { cuisineName: 'Vegan Cuisine', dishName, image, category: 'Vegan' } });
  };

  return (
    <div className="vegan_cuisines">
      <h1>Popular Vegan Dishes</h1>
      <div className="vegan_cuisine_container">
        {vegan_dish_list.map((dish, index) => (
          <div key={index} className="vegan_cuisine" id={dish.name.toLowerCase().replace(/\s+/g, '-')}>
            <a href={`#${dish.name.toLowerCase().replace(/\s+/g, '-')}`}>{dish.name}</a>
            <p>{dish.ingredients}</p>
            <div className="vegan_cuisine_images">
              <div
                className="vegan_cuisine_image"
                onClick={() => handleImageClick(dish.name, dish.image)}
              >
                <div className="vegan_cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
                  <p>{dish.name}</p>
                </div>
                <BiPlus className="fa" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegan;
