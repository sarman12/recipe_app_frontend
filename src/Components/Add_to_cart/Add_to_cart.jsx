import React from 'react';
import './Add_to_cart.css';
import { CgClose, CgMathPlus } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

function Add_to_cart({ cartItems, handleRemoveFromCart }) {
  const navigate = useNavigate();

  const handleImageClick = (dish) => {
    const baseUrl = dish.category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/${baseUrl}/${dish.name.replace(/\s+/g, '-').toLowerCase()}/recipe`, {
      state: {
        cuisineName: dish.cuisineName,
        dishName: dish.name,
        image: dish.image,
        category: dish.category,
      },
    });
  };

  return (
    <div className="cart_container">
      <h1>Your Saved Recipes</h1>
      <div className="cart_content">
        <div className="add_items">
          <CgMathPlus className="add_recipe_btn" onClick={() => navigate('/cuisine')} />
          <div className="add_recipe_text">Add more recipes</div>
          <div className="add_recipe_instruction">Click the plus icon to add recipes to your cart</div>
        </div>
        {cartItems.length > 0 && (
          <div className="cart_items_container">
            {cartItems.map((dish, index) => (
              <div className="cart_recipes" key={index}>
                <CgClose 
                  className='fa_cart_close' 
                  onClick={() => handleRemoveFromCart(index)} 
                />
                <div className="cart_recipe_item">
                  <div className="cart_recipe_details">
                    <span className="cart_dish_name">{dish.name}</span>
                    <p className="cart_dish_intro">{dish.introduction}</p>
                  </div>
                  <div
                    className="cart_recipe_image"
                    style={{ backgroundImage: `url(${dish.image})` }}
                    onClick={() => handleImageClick(dish)}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Add_to_cart;
