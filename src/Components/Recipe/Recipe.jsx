import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recipe.css'; // Ensure this path is correct
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { cuisineDishList } from '../data'; // Ensure this path is correct

const Recipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dishName, state_of_origin, image } = location.state || {};

  // Find current index of the dish in the list
  const currentIndex = cuisineDishList.indexOf(dishName);

  // Handle navigation to previous dish
  const handleLeft = () => {
    if (currentIndex > 0) {
      const prevDish = cuisineDishList[currentIndex - 1];
      const prevDishImage = findImageForDish(prevDish);
      navigate(`/cuisine/${prevDish.replace(/\s+/g, '-').toLowerCase()}/recipe`, { state: { dishName: prevDish, state_of_origin, image: prevDishImage } });
    }
  };

  // Handle navigation to next dish
  const handleRight = () => {
    if (currentIndex < cuisineDishList.length - 1) {
      const nextDish = cuisineDishList[currentIndex + 1];
      const nextDishImage = findImageForDish(nextDish);
      navigate(`/cuisine/${nextDish.replace(/\s+/g, '-').toLowerCase()}/recipe`, { state: { dishName: nextDish, state_of_origin, image: nextDishImage } });
    }
  };

  // Define recipe data
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
    // Add more recipes here
  };

  // Get recipe details based on dish name
  const recipe = recipeData[dishName] || { ingredients: "No data available", steps: [] };

  // Find image path for a dish
  const findImageForDish = (dishName) => {
    const dishImages = {
      "Litti Chokha(Bihar)": require('../../assets/I01.jpg'),
      "Poha Jalebi(MP)": require('../../assets/I02.jpg'),
      // Add more dishes and images
    };
    return dishImages[dishName] || ""; // Return default or empty image if not found
  };

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
