import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import './Seasonal.css';
import { seasonalDishList } from '../Seasonal_dish_list'; // Adjust the path as necessary

const seasonData = [
  {
    name: "Summer Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: seasonalDishList.filter(dish => /Dahi|Drumstick|Lassi|Lauki|Aam|Bitter|Cucumber|Tendli|Turai|Watermelon|Ash|Mango|Cream|Punjabi|Rasam/.test(dish.name)),
  },
  {
    name: "Monsoon Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: seasonalDishList.filter(dish => /Aamati|Banana|Bombi|Chana|Cheese|Corn|Dal|Kuzhi|Masala|Methi|Moong|Poha|Samosa|Lemon/.test(dish.name)),
  },
  {
    name: "Winter Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: seasonalDishList.filter(dish => /Beetroot|Chikki|Gajar|Gushtaba|Lapsi|Nihari|Sandesh|Panjiri|Paya|Rogan|Sarson|Rabdi|Til|Undhiyu|Thukpa/.test(dish.name)),
  },
];

const Seasonal = () => {
  const navigate = useNavigate();

  const handleImageClick = (dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/seasonal/${formattedDishName}/recipe`, {
      state: { cuisineName: 'Seasonal Cuisine', dishName, image, category: 'Seasonal' },
    });
  };

  return (
    <div className="seasonal_cuisines">
      <h1>Seasonal Dishes</h1>
      <div className="seasonal_cuisine_container">
        {seasonData.map((season, index) => (
          <div key={index} className="seasonal_cuisine" id={season.name.toLowerCase().replace(/\s+/g, '-')}>
            <a href={`#${season.name.toLowerCase().replace(/\s+/g, '-')}`}>{season.name}</a>
            <p>{season.description}</p>
            <div className="seasonal_cuisine_images">
              {season.dishes.map((dish, imgIndex) => (
                <div key={imgIndex} className="seasonal_cuisine_item">
                  <div
                    className="seasonal_cuisine_image"
                    onClick={() => handleImageClick(dish.name, dish.image)}
                  >
                    <div className="seasonal_cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
                      <p>{dish.name}</p>
                    </div>
                    <BiPlus className="fa" />
                  </div>


                  <div className="dish_item_intro">
                  
                  <a className="dish_name">{dish.name}</a>
                  <p className="dish_introduction">{dish.introduction}</p>

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
