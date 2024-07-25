import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recipe.css'; // Ensure this path is correct
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { cuisineDishList } from '../data'; // Ensure this path is correct

const Recipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dishName, image } = location.state || {};

  const currentIndex = cuisineDishList.findIndex(dish => dish.name === dishName);

  const handleLeft = () => {
    if (currentIndex > 0) {
      const prevDish = cuisineDishList[currentIndex - 1];
      navigate(`/cuisine/${prevDish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, { state: { dishName: prevDish.name, image: prevDish.image } });
    }
  };

  const handleRight = () => {
    if (currentIndex < cuisineDishList.length - 1) {
      const nextDish = cuisineDishList[currentIndex + 1];
      navigate(`/cuisine/${nextDish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, { state: { dishName: nextDish.name, image: nextDish.image } });
    }
  };

  // Get the recipe data for the current dish
  const recipe = cuisineDishList.find(dish => dish.name === dishName) || { ingredients: "No data available", recipe: "No data available" };

  return (
    <div className="recipe">
      <BiSolidLeftArrow className='fa_left' onClick={handleLeft} />
      <BiSolidRightArrow className='fa_right' onClick={handleRight} />
      <CgClose onClick={() => navigate('/cuisine')} className='fa_cross' />
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
