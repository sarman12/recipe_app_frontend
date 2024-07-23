import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recipe.css';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const Recipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dishName, state_of_origin, image } = location.state;

  const recipeData = {
    "Chickpea soup": {
      ingredients: "1 cup chickpeas, 2 cups vegetable broth, 1 onion, 2 cloves garlic, Salt and pepper to taste",
      steps: [
        "Soak the chickpeas overnight.",
        "In a pot, sauté the onions and garlic until translucent.",
        "Add the soaked chickpeas and vegetable broth to the pot.",
        "Simmer for 45 minutes or until chickpeas are tender.",
        "Season with salt and pepper to taste."
      ]
    },
  };

  const recipe = recipeData[dishName] || { ingredients: "No data available", steps: [] };

  return (
    <div className="recipe">
      <BiSolidLeftArrow className='fa_left' />
      <BiSolidRightArrow className='fa_right' />
      <CgClose onClick={() => navigate('/cuisine')} className='fa_cross' />
      <div className="recipe_container">
        <h1>{dishName}</h1>
        <div className="recipe_div">
          <div className="recipe_img">
            <img src={image} alt={dishName} />
          </div>
          <div className="recipe_description">
            <h3>State of Origin - <p>{state_of_origin}</p></h3>
            <h4>Ingredients - <p>{recipe.ingredients}</p></h4>
            <div>
              <h3>Steps -</h3>
              <ul>
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;