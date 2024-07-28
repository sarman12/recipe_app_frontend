import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Seafood.css';
import { BiPlus } from 'react-icons/bi';

// Import seafood images
import Bouillabaisse_France from '../../assets/FishDish/Dish_1.jpg';
import Ceviche_Peru from '../../assets/FishDish/dish_2.jpg';
import Crab_Cakes_US from '../../assets/FishDish/dish_3.jpg';
import Fish_and_Chips_UK from '../../assets/FishDish/dish_4.jpg';
import Grilled_Sardines_Portugal from '../../assets/FishDish/dish_5.jpg';
import Oysters_Rockefellers_USA from '../../assets/FishDish/dish_6.jpg';
import Paella_de_Marisco_Spain from '../../assets/FishDish/dish_7.jpg';
import Risotta_ai_Frutti_di_Mare_Italy from '../../assets/FishDish/dish_8.jpg';
import Surf_and_Turf_US from '../../assets/FishDish/dish_9.jpg';
import Tuna_Tartare_USA from '../../assets/FishDish/dish_10.jpg';

const seafoodDishList = [
  {
    name: "Bouillabaisse (France)",
    description: "A traditional French seafood stew made with various fish and shellfish.",
    images: [Bouillabaisse_France],
    name_of_dishes: ["Bouillabaisse"]
  },
  {
    name: "Ceviche (Peru)",
    description: "A popular Peruvian dish made from fresh fish marinated in citrus juices.",
    images: [Ceviche_Peru],
    name_of_dishes: ["Ceviche"]
  },
  {
    name: "Crab Cakes (US)",
    description: "Delicious crab cakes made with crab meat, mayonnaise, and breadcrumbs.",
    images: [Crab_Cakes_US],
    name_of_dishes: ["Crab Cakes"]
  },
  {
    name: "Fish and Chips (UK)",
    description: "Classic British dish of battered fish served with crispy chips.",
    images: [Fish_and_Chips_UK],
    name_of_dishes: ["Fish and Chips"]
  },
  {
    name: "Grilled Sardines (Portugal)",
    description: "Grilled sardines seasoned with garlic and parsley.",
    images: [Grilled_Sardines_Portugal],
    name_of_dishes: ["Grilled Sardines"]
  },
  {
    name: "Oysters Rockefeller (USA)",
    description: "Oysters topped with a rich mixture of butter, spinach, and Parmesan cheese.",
    images: [Oysters_Rockefellers_USA],
    name_of_dishes: ["Oysters Rockefeller"]
  },
  {
    name: "Paella de Marisco (Spain)",
    description: "Spanish seafood paella made with a variety of seafood and saffron rice.",
    images: [Paella_de_Marisco_Spain],
    name_of_dishes: ["Paella de Marisco"]
  },
  {
    name: "Risotto ai Frutti di Mare (Italy)",
    description: "Italian seafood risotto made with Arborio rice and a mix of seafood.",
    images: [Risotta_ai_Frutti_di_Mare_Italy],
    name_of_dishes: ["Risotto ai Frutti di Mare"]
  },
  {
    name: "Surf and Turf (US)",
    description: "A hearty dish combining steak and lobster tails.",
    images: [Surf_and_Turf_US],
    name_of_dishes: ["Surf and Turf"]
  },
  {
    name: "Tuna Tartare (USA)",
    description: "Fresh tuna mixed with sesame oil and lime juice, served as a tartare.",
    images: [Tuna_Tartare_USA],
    name_of_dishes: ["Tuna Tartare"]
  }
];

const Seafood = ({ handleAddToCart }) => {
  const navigate = useNavigate();

  const handleImageClick = (dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/seafood/${formattedDishName}/recipe`, { state: { dishName, image, category: 'Seafood' } });
  };

  return (
    <div className="seafoods">
      <div className="header">
        <h1>Popular Seafood Dishes</h1>
        <p>Explore a variety of delicious seafood dishes from around the world.</p>
      </div>
      <div className="seafood_container">
        {seafoodDishList.map((dish, index) => (
          <div key={index} className="seafood" id={dish.name.toLowerCase().replace(/\s+/g, '-')}>
            <div className="dish_item_intro">
              <a href={`#${dish.name.toLowerCase().replace(/\s+/g, '-')}`}>{dish.name}</a>
              <p>{dish.description}</p>
            </div>
            <div className="seafood_images">
              {dish.images.length > 0 ? (
                dish.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="seafood_image"
                    onClick={() => handleImageClick(dish.name, image)}
                  >
                    <div className="seafood_image_inner" style={{ backgroundImage: `url(${image})` }}>
                      <p>{dish.name_of_dishes[imgIndex]}</p>
                    </div>
                    <BiPlus className="fa" onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart({
                          ...dish,
                          image: image,
                          introduction: dish.description // Assuming introduction is same as description
                        });
                    }} />
                  </div>
                ))
              ) : (
                <p>No dishes available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seafood;
