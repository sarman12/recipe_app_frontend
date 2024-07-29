import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus, BiCheckCircle } from 'react-icons/bi';
import './Vegan.css';
import { vegan_dish_list } from '../Vegan_dish_list'; // Ensure this path is correct

const Vegan = ({ handleAddToCart }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(new Set());

  const handleImageClick = (dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/vegan/${formattedDishName}/recipe`, {
      state: { cuisineName: 'Vegan Cuisine', dishName, image, category: 'Vegan' }
    });
  };

  const handleAddToCartClick = (dish) => {
    handleAddToCart(dish);
    setCartItems(prev => new Set(prev).add(dish.name));
  };

  return (
    <div className="vegan_cuisines">
      <header className="vegan_header">
        <h1>Explore Popular Vegan Dishes</h1>
        <p>Discover a variety of healthy and delicious vegan recipes that are perfect for any occasion.</p>
      </header>
      <section className="vegan_benefits">
        <h2>Benefits of Vegan Cuisine</h2>
        <ul>
          <li>Rich in essential nutrients</li>
          <li>Promotes heart health</li>
          <li>Aids in weight management</li>
          <li>Supports the environment</li>
        </ul>
      </section>
      <div className="vegan_cuisine_container">
        {vegan_dish_list.map((dish, index) => (
          <div key={index} className="vegan_cuisine" id={dish.name.toLowerCase().replace(/\s+/g, '-')}>
            <div className="dish_item_intro">
              <a href={`#${dish.name.toLowerCase().replace(/\s+/g, '-')}`}>{dish.name}</a>
              <p>{dish.ingredients}</p>
            </div>
            <div className="vegan_cuisine_images">
              <div
                className="vegan_cuisine_image"
                onClick={() => handleImageClick(dish.name, dish.image)}
              >
                <div className="vegan_cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
                  <p>{dish.name}</p>
                </div>
                {cartItems.has(dish.name) ? (
                  <BiCheckCircle className="fa" />
                ) : (
                  <BiPlus className="fa" onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCartClick(dish);
                  }} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vegan;
