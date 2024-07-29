import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus, BiCheckCircle } from 'react-icons/bi';
import './Seasonal.css';
import { seasonalDishList } from '../Seasonal_dish_list'; // Adjust the path as necessary

const seasonData = [
  {
    name: "Summer Cuisine",
    description: "Enjoy the vibrant and refreshing dishes that are perfect for the summer season. These meals are light, nutritious, and full of seasonal flavors.",
    benefits: [
      "Hydrates and refreshes",
      "Rich in vitamins and minerals",
      "Light and easy on the stomach",
    ],
    dishes: seasonalDishList.filter(dish => /Dahi|Drumstick|Lassi|Lauki|Aam|Bitter|Cucumber|Tendli|Turai|Watermelon|Ash|Mango|Cream|Punjabi|Rasam/.test(dish.name)),
  },
  {
    name: "Monsoon Cuisine",
    description: "Indulge in the comforting and hearty dishes of the monsoon season. These recipes are designed to keep you warm and satisfied during the rainy days.",
    benefits: [
      "Boosts immunity",
      "Hearty and filling",
      "Perfect for rainy days",
    ],
    dishes: seasonalDishList.filter(dish => /Aamati|Banana|Bombi|Chana|Cheese|Corn|Dal|Kuzhi|Masala|Methi|Moong|Poha|Samosa|Lemon/.test(dish.name)),
  },
  {
    name: "Winter Cuisine",
    description: "Delight in the rich and warming dishes of winter. These meals are perfect for cold weather, offering both comfort and nourishment.",
    benefits: [
      "Warms and comforts",
      "Rich in energy and nutrients",
      "Helps in staying warm",
    ],
    dishes: seasonalDishList.filter(dish => /Beetroot|Chikki|Gajar|Gushtaba|Lapsi|Nihari|Sandesh|Panjiri|Paya|Rogan|Sarson|Rabdi|Til|Undhiyu|Thukpa/.test(dish.name)),
  },
];

const Seasonal = ({ handleAddToCart }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(new Set());

  const handleImageClick = (dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/seasonal/${formattedDishName}/recipe`, {
      state: { cuisineName: 'Seasonal Cuisine', dishName, image, category: 'Seasonal' },
    });
  };

  const handleAddToCartClick = (dish) => {
    handleAddToCart(dish);
    setCartItems(prev => new Set(prev).add(dish.name));
  };

  return (
    <div className="seasonal_cuisines">
      <header className="seasonal_header">
        <h1>Discover Seasonal Dishes</h1>
        <p>Explore a variety of dishes that celebrate the flavors of each season. From refreshing summer salads to hearty winter stews, there's something for every palate.</p>
      </header>
      <section className="seasonal_benefits">
        <h2>Benefits of Eating Seasonally</h2>
        <ul>
          <li>Fresher and more nutritious ingredients</li>
          <li>Support local farmers and communities</li>
          <li>More environmentally friendly</li>
          <li>Better taste and variety</li>
        </ul>
      </section>
      <div className="seasonal_cuisine_container">
        {seasonData.map((season, index) => (
          <div key={index} className="seasonal_cuisine" id={season.name.toLowerCase().replace(/\s+/g, '-')}>
            <header className="seasonal_cuisine_header">
              <h2>{season.name}</h2>
              <p>{season.description}</p>
            </header>
            <section className="seasonal_cuisine_benefits">
              <h3>Benefits of {season.name}</h3>
              <ul>
                {season.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </section>
            <div className="seasonal_cuisine_images">
              {season.dishes.map((dish, imgIndex) => (
                <div key={imgIndex} className="seasonal_cuisine_item">
                  <div className="dish_item_intro">
                    <a className="dish_name_seasonal">{dish.name}</a>
                    <p className="dish_introduction">{dish.ingredients}</p>
                  </div>
                  <div
                    className="seasonal_cuisine_image"
                    onClick={() => handleImageClick(dish.name, dish.image)}
                  >
                    <div className="seasonal_cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasonal;
