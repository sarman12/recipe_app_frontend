import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cuisine.css';
import { BiPlus } from 'react-icons/bi';
import { cuisineDishList } from '../data';

const cuisinesData = [
  {
    name: "Indian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: cuisineDishList.filter(dish => /Litti|Poha|Bikaneri|Akki|Paddu|Ghugni|Chole|Tunde|Mirchi|Fuchka|Kathi|Pav|Butter|Vada|Dal|Momos|Aloo|Rogan|Tandoori/.test(dish.name)),
  },
  {
    name: "Chinese Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: cuisineDishList.filter(dish => /Kung|Peking|Tofu|Chow|Cantonese|DongPu|Chinese|Sweet|Char|Chicken/.test(dish.name)),
  },
  {
    name: "Italian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: cuisineDishList.filter(dish => /Emilia|Risotto|Carbonara|Florentina|Gelato|Tiramisu|Bruschetta|Gnocchi|Pizza|Arancini|Ravioli|Spaghetti|Trofie|Lasagna|Caprese/.test(dish.name)),
  },
  {
    name: "Mexican Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: cuisineDishList.filter(dish => /Taco|Burritos|Quesadillas|Chilaquiles|Pico|Guacamole|Enchiladas|Tostada|Mole|Salsa|Churros|Elote|Fajitas|Ceviche|Tortillas/.test(dish.name)),
  },
  {
    name: "Japanese Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    dishes: cuisineDishList.filter(dish => /Sushi|Ramen|Tempura|Yakitori|Sashimi|Soba|Udon|Okonomiyaki|Tonkatsu|Unagi|Onigiri|Natto|Tamago|Yakizakana|Korokke/.test(dish.name)),
  },
];

const Cuisine = () => {
  const navigate = useNavigate();

  const handleImageClick = (cuisineName, dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/cuisine/${formattedDishName}/recipe`, { state: { cuisineName, dishName, image } });
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

export default Cuisine;
