import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Non_vegeterian.css';
import { BiPlus } from 'react-icons/bi';
import { nonvegeterian_dish_list } from '../nonvegeterian_dish_list';

const NonVegetarian = () => {
  const navigate = useNavigate();

  const handleImageClick = (dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/non-vegetarian/${formattedDishName}/recipe`, {
      state: {
        cuisineName: 'Non-Vegetarian Cuisine',
        dishName,
        image,
        category: 'Non-Vegetarian',
      }
    });
  };

  return (
    <div className="nonvegetarian_cuisines">
      <h1>Popular Non-Vegetarian Dishes</h1>
      <div className="nonvegetarian_cuisine_container">
        {nonvegeterian_dish_list.map((dish, index) => (
          <div key={index} className="nonvegetarian_cuisine" id={dish.name.toLowerCase().replace(/\s+/g, '-')}>
          <div className="dish_item_intro">
              <a href={`#${dish.name.toLowerCase().replace(/\s+/g, '-')}`}>{dish.name}</a>
              <p>{dish.ingredients}</p>
            </div>
            <div className="nonvegetarian_cuisine_images">
              <div
                className="nonvegetarian_cuisine_image"
                onClick={() => handleImageClick(dish.name, dish.image)}
              >
                <div className="nonvegetarian_cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
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

export default NonVegetarian;
