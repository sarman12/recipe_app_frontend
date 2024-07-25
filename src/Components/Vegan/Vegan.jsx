import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Vegan.css';
import { BiPlus } from 'react-icons/bi';
import { vegan_dish_list } from '../Vegan_dish_list';

const cuisinesData = [
  {
    name: "Vegan Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: vegan_dish_list,
  },
];

const Vegan = () => {
  const navigate = useNavigate();

  const handleImageClick = (cuisineName, dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/vegan/${formattedDishName}/recipe`, { state: { cuisineName, dishName, image } });
  };

  return (
    <div className="cuisines">
      <h1>Popular Cuisines</h1>
      <div className="cuisine_container">
        {cuisinesData.map((cuisine, index) => (
          <div key={index} className="cuisine" id={cuisine.name.toLowerCase().replace(/\s+/g, '-')}>
            <a href={`#${cuisine.name.toLowerCase().replace(/\s+/g, '-')}`}>{cuisine.name}</a>
            <p>{cuisine.description}</p>
            <div className="cuisine_images">
              {cuisine.dishes.map((dish, imgIndex) => (
                <div
                  key={imgIndex}
                  className="cuisine_image"
                  onClick={() => handleImageClick(cuisine.name, dish.name, dish.image)}
                >
                  <div className="cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
                    <p>{dish.name}</p>
                  </div>
                  <BiPlus className="fa" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegan;
