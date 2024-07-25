import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recipe.css'; // Ensure this path is correct
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { cuisineDishList } from '../data'; // Ensure this path is correct
import { vegan_dish_list } from '../Vegan_dish_list'; // Ensure this path is correct
import { seasonalDishList } from '../Seasonal_dish_list'; // Ensure this path is correct

const Recipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cuisineName, dishName, image, category } = location.state || {};

  // Determine the correct dish list based on the category
  const dishList = cuisineName === 'Vegan Cuisine'
    ? vegan_dish_list
    : category === 'Seasonal'
    ? seasonalDishList
    : cuisineDishList;

  // Find the index of the current dish
  const currentIndex = dishList.findIndex(dish => dish.name === dishName);

  // Handle left arrow click
  const handleLeft = () => {
    if (currentIndex > 0) {
      const prevDish = dishList[currentIndex - 1];
      navigate(`/${cuisineName === 'Vegan Cuisine' ? 'vegan' : category === 'Seasonal' ? 'seasonal' : 'cuisine'}/${prevDish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, {
        state: { cuisineName, dishName: prevDish.name, image: prevDish.image, category },
      });
    }
  };

  // Handle right arrow click
  const handleRight = () => {
    if (currentIndex < dishList.length - 1) {
      const nextDish = dishList[currentIndex + 1];
      navigate(`/${cuisineName === 'Vegan Cuisine' ? 'vegan' : category === 'Seasonal' ? 'seasonal' : 'cuisine'}/${nextDish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, {
        state: { cuisineName, dishName: nextDish.name, image: nextDish.image, category },
      });
    }
  };

  // Find the current dish details
  const recipe = dishList.find(dish => dish.name === dishName) || {
    ingredients: "No data available",
    recipe: "No data available",
  };

  return (
    <div className="recipe">
      <BiSolidLeftArrow className='fa_left' onClick={handleLeft} />
      <BiSolidRightArrow className='fa_right' onClick={handleRight} />
      <CgClose onClick={() => navigate(`/${cuisineName === 'Vegan Cuisine' ? 'vegan' : category === 'Seasonal' ? 'seasonal' : 'cuisine'}`)} className='fa_cross' />
      <div className="recipe_container">
        <h1>{dishName}</h1>
        <div className="recipe_div">
          <div className="recipe_img">
            <img src={image} alt={dishName} />
          </div>
          <div className="recipe_description">
            <h4>Ingredients - <p>{recipe.ingredients}</p></h4>
            <h4>Recipe -</h4>
            <p>{recipe.recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
