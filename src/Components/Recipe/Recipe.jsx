import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Recipe.css';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';

const Recipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cuisine, dish, image } = location.state;

  const recipeData = {
    "Fuchka(WB)": {
      ingredients: "1 cup atta (whole wheat flour), 1 cup sooji (semolina), 1/2 tsp baking powder, Water (as needed), Oil (for frying)",
      steps: [
        "Prepare Dough: In a large bowl, mix atta, sooji, and baking powder. Gradually add water and knead into a stiff dough. Rest the dough for 1 hour.",
        "Shape Papdis: Divide the dough into small portions (7 g each). Roll each portion into a smooth ball and then flatten into discs (about 7 cm in diameter).",
        "Dry Papdis: Let the discs dry slightly until the surface is no longer sticky but not stiff (about 2 hours).",
        "Fry Papdis: Heat oil in a wok to 200ºC. Fry each papdi, pressing down with a perforated spoon until it puffs up and turns brown. Drain on a colander.",
        "Crisp Up: Dry the papdis in the sun or in an oven at the lowest temperature setting until crisp.",
        "For Tamarind Water: Soak tamarind in warm water and extract the pulp. Mix in lime juice, black salt, regular salt, bhaja moshla, and water. Adjust seasoning to taste.",
        "Potato Filling: Mash boiled potatoes and season with black salt, chaat masala, coriander powder, crushed green chillies, coriander leaves, and some tamarind water. Add boiled yellow peas and soaked Bengal gram. Mix gently."
      ]
    },
    // Add other dishes data...
  };

  const recipe = recipeData[dish] || { ingredients: "No data available", steps: [] };

  return (
    <div className="recipe">
      <BiSolidLeftArrow className='fa_left' />
      <BiSolidRightArrow className='fa_right' />
      <CgClose onClick={() => navigate('/')} className='fa_cross' />
      <div className="recipe_container">
        <h1>{dish}</h1>
        <div className="recipe_div">
          <div className="recipe_img">
            <img src={image} alt={dish} />
          </div>
          <div className="recipe_description">
            <h3>State of Origin - <p>{cuisine}</p></h3>
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
