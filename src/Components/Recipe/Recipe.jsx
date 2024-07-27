import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recipe.css';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { cuisineDishList } from '../data';
import { vegan_dish_list } from '../Vegan_dish_list';
import { seasonalDishList } from '../Seasonal_dish_list';
import { seafoodDishList } from '../seafood_dish_list';
import { nonvegeterian_dish_list } from '../nonvegeterian_dish_list';

const Recipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cuisineName, dishName, image, category } = location.state || {};

  const dishList = category === 'Vegan'
    ? vegan_dish_list
    : category === 'Seasonal'
    ? seasonalDishList
    : category === 'Seafood'
    ? seafoodDishList
    : category === 'Non-Vegetarian'
    ? nonvegeterian_dish_list
    : cuisineDishList;

  const currentIndex = dishList.findIndex(dish => dish.name === dishName);

  const baseUrl = category === 'Vegan'
    ? 'vegan'
    : category === 'Seasonal'
    ? 'seasonal'
    : category === 'Seafood'
    ? 'seafood'
    : category === 'Non-Vegetarian'
    ? 'non-vegetarian'
    : 'cuisine';

  const handleLeft = () => {
    if (currentIndex > 0) {
      const prevDish = dishList[currentIndex - 1];
      navigate(`/${baseUrl}/${prevDish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, {
        state: { cuisineName, dishName: prevDish.name, image: prevDish.image, category },
      });
    }
  };

  const handleRight = () => {
    if (currentIndex < dishList.length - 1) {
      const nextDish = dishList[currentIndex + 1];
      navigate(`/${baseUrl}/${nextDish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, {
        state: { cuisineName, dishName: nextDish.name, image: nextDish.image, category },
      });
    }
  };

  const recipe = dishList.find(dish => dish.name === dishName) || {
    ingredients: ["No data available"],
    recipe: ["No data available"],
  };

  return (
    <div className="recipe">
      <BiSolidLeftArrow className='fa_left' onClick={handleLeft} />
      <BiSolidRightArrow className='fa_right' onClick={handleRight} />
      <CgClose onClick={() => navigate(`/${baseUrl}`)} className='fa_cross' />
      <div className="recipe_container">
        <h1>{dishName}</h1>
        <div className="recipe_div">
          <div className="recipe_img">
            <img src={image} alt={dishName} />
          </div>
          <div className="recipe_description">
            <h4>Ingredients:</h4>
            <p>{Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : recipe.ingredients}</p>
            <h4>Recipe:</h4>
            <p>{Array.isArray(recipe.recipe) ? recipe.recipe.join(', ') : recipe.recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
