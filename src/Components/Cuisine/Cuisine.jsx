import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cuisine.css';
import { BiPlus } from 'react-icons/bi';
import I01 from '../../assets/I01.jpg';
import I02 from '../../assets/I02.jpg';
import I03 from '../../assets/I03.jpg';
import I04 from '../../assets/I04.jpg';
import I05 from '../../assets/I05.jpg';
import I06 from '../../assets/I06.jpg';
import I07 from '../../assets/I07.jpg';
import I08 from '../../assets/I08.jpg';
import I09 from '../../assets/I09.jpg';
import I10 from '../../assets/I010.jpg';
import I11 from '../../assets/I011.jpg';
import I12 from '../../assets/I012.jpg';
import I13 from '../../assets/I013.jpg';
import I14 from '../../assets/I014.jpg';
import I15 from '../../assets/I015.jpg';
import I16 from '../../assets/I016.jpg';
import I17 from '../../assets/I017.jpg';
import I18 from '../../assets/I018.jpg';
import I19 from '../../assets/I019.jpg';

import C01 from '../../assets/C01.jpg';
import C02 from '../../assets/C02.jpg';
import C03 from '../../assets/C03.jpg';
import C04 from '../../assets/C04.jpg';
import C05 from '../../assets/C05.jpg';
import C06 from '../../assets/C06.jpg';
import C07 from '../../assets/C07.jpg';
import C08 from '../../assets/C08.jpg';
import C09 from '../../assets/C09.jpg';
import C10 from '../../assets/C010.jpg';

import IT01 from '../../assets/IT01.jpg';
import IT02 from '../../assets/IT02.jpg';
import IT03 from '../../assets/IT03.jpg';
import IT04 from '../../assets/IT04.jpg';
import IT05 from '../../assets/IT05.jpg';
import IT06 from '../../assets/IT06.jpg';
import IT07 from '../../assets/IT07.jpg';
import IT08 from '../../assets/IT08.jpg';
import IT09 from '../../assets/IT09.jpg';
import IT10 from '../../assets/IT010.jpg';
import IT11 from '../../assets/IT011.jpg';
import IT12 from '../../assets/IT012.jpg';
import IT13 from '../../assets/IT013.jpg';
import IT14 from '../../assets/IT014.jpg';
import IT15 from '../../assets/IT015.jpg';

import M01 from '../../assets/M01.jpg';
import M02 from '../../assets/M02.jpg';
import M03 from '../../assets/M03.jpg';
import M04 from '../../assets/M04.jpg';
import M05 from '../../assets/M05.jpg';
import M06 from '../../assets/M06.jpg';
import M07 from '../../assets/M07.jpg';
import M08 from '../../assets/M08.jpg';
import M09 from '../../assets/M09.jpg';
import M10 from '../../assets/M010.jpg';

const cuisinesData = [
  {
    name: "Indian Cuisine",
    description: "Indian cuisine is known for its vibrant spices, fresh herbs, and wide variety of rich flavors.",
    dishes: [
      { name: "Litti Chokha", image: I01, introduction: "A traditional dish from Bihar made with wheat and gram flour." },
      { name: "Poha Jalebi", image: I02, introduction: "A popular breakfast dish from Madhya Pradesh, combining flattened rice and sweet jalebi." },
      { name: "Bikaneri Kachori", image: I03, introduction: "A spicy snack from Rajasthan, made with moong dal and spices." },
      { name: "Akki Roti", image: I04, introduction: "A rice-based flatbread from Karnataka, often served with chutney." },
      { name: "Paddu", image: I05, introduction: "Small, round snacks made from fermented rice and urad dal batter." },
      { name: "Ghugni Chaat", image: I06, introduction: "A flavorful street food from West Bengal, made with dried yellow peas." },
      { name: "Chole Bhaturey", image: I07, introduction: "A popular North Indian dish consisting of spicy chickpeas and fried bread." },
      { name: "Tunde Kabab", image: I08, introduction: "A famous kebab from Lucknow, known for its unique blend of spices." },
      { name: "Mirchi Bhaji", image: I09, introduction: "Spicy green chili fritters, a popular snack in Hyderabad." },
      { name: "Fuchka", image: I10, introduction: "A street food from West Bengal, also known as pani puri or golgappa." },
      { name: "Kathi Rolls", image: I11, introduction: "A delicious wrap filled with spiced meat and vegetables, originating from Kolkata." },
      { name: "Pav Bhaji", image: I12, introduction: "A spicy vegetable mash served with soft bread rolls, a Mumbai street food favorite." },
      { name: "Butter Chicken", image: I13, introduction: "A rich and creamy chicken dish from Delhi, cooked in a tomato-based sauce." },
      { name: "Vada Pav", image: I14, introduction: "A popular street food from Mumbai, consisting of a spicy potato filling inside a bread roll." },
      { name: "Dal Makhani", image: I15, introduction: "A creamy lentil dish from Punjab, slow-cooked to perfection." },
      { name: "Momos", image: I16, introduction: "Steamed dumplings filled with meat or vegetables, popular in Sikkim and the North East." },
      { name: "Aloo Gobhi", image: I17, introduction: "A classic vegetarian dish from Punjab, made with potatoes and cauliflower." },
      { name: "Rogan Josh", image: I18, introduction: "A fragrant lamb curry from Kashmir, cooked with aromatic spices." },
      { name: "Tandoori Chicken", image: I19, introduction: "A famous Indian dish of roasted chicken marinated in yogurt and spices." },
    ],
  },
  {
    name: "Chinese Cuisine",
    description: "Chinese cuisine offers a range of flavors and techniques, from stir-frying and steaming to braising and baking.",
    dishes: [
      { name: "Kung Pulao Chicken", image: C01, introduction: "A spicy and flavorful chicken dish with a mix of rice and vegetables." },
      { name: "Peking Roast Duck", image: C02, introduction: "A famous Beijing dish, known for its crispy skin and tender meat." },
      { name: "Tofu", image: C03, introduction: "A versatile ingredient made from soybeans, used in a variety of Chinese dishes." },
      { name: "Chow Mein", image: C04, introduction: "Stir-fried noodles with vegetables and meat, a popular Chinese street food." },
      { name: "Cantonese Spring Roll", image: C05, introduction: "Crispy rolls filled with vegetables and meat, commonly served as an appetizer." },
      { name: "DongPu Rou", image: C06, introduction: "A traditional braised pork belly dish from China, known for its rich flavor." },
      { name: "Chinese Hot and Sour Soup", image: C07, introduction: "A flavorful soup with a balance of spicy and sour tastes." },
      { name: "Sweet and Sour Pork", image: C08, introduction: "A popular dish featuring crispy pork in a tangy sauce." },
      { name: "Char Siu Pork", image: C09, introduction: "Cantonese-style barbecued pork, known for its sweet and savory glaze." },
      { name: "Chicken Fried rice", image: C10, introduction: "A classic Chinese dish with stir-fried rice, chicken, and vegetables." },
    ],
  },
  {
    name: "Italian Cuisine",
    description: "Italian cuisine is celebrated for its regional diversity, especially between the north and the south of the Italian Peninsula.",
    dishes: [
      { name: "Emilia-Romagna", image: IT01, introduction: "A rich region in northern Italy, known for its pasta and cheese dishes." },
      { name: "Risotto", image: IT02, introduction: "A creamy rice dish cooked with broth and flavored with Parmesan cheese." },
      { name: "Carbonara Pasta", image: IT03, introduction: "A classic Roman pasta dish made with eggs, cheese, pancetta, and pepper." },
      { name: "Florentina Steak", image: IT04, introduction: "A large, T-bone steak from Florence, grilled and seasoned with salt." },
      { name: "Gelato", image: IT05, introduction: "Italian ice cream, known for its dense and creamy texture." },
      { name: "Tiramisu", image: IT06, introduction: "A popular coffee-flavored dessert made with mascarpone cheese and cocoa." },
      { name: "Bruschetta", image: IT07, introduction: "Grilled bread topped with fresh tomatoes, garlic, and basil." },
      { name: "Gnocchi", image: IT08, introduction: "Soft dumplings made from potatoes, flour, and eggs, served with various sauces." },
      { name: "Pizza", image: IT09,introduction:"made with love"},
      { name: "Pizza", image: IT09, introduction: "A globally popular dish originating from Italy, with a variety of toppings." },
      { name: "Arancini", image: IT10, introduction: "Deep-fried rice balls stuffed with meat, cheese, or vegetables." },
      { name: "Ravioli", image: IT11, introduction: "Pasta pockets filled with meat, cheese, or vegetables, served with sauce." },
      { name: "Spaghetti alle Vongole", image: IT12, introduction: "Spaghetti with clams, a classic Italian seafood dish." },
      { name: "Trofie al Pesto", image: IT13, introduction: "A Ligurian pasta dish made with basil pesto sauce." },
      { name: "Lasagna", image: IT14, introduction: "Layered pasta with meat, cheese, and tomato sauce, baked to perfection." },
      { name: "Caprese Salad", image: IT15, introduction: "A simple salad made with fresh tomatoes, mozzarella, and basil." },
    ],
  },
  {
    name: "Mexican Cuisine",
    description: "Mexican cuisine is known for its bold flavors, colorful presentations, and variety of spices and ingredients.",
    dishes: [
      { name: "Taco", image: M01, introduction: "A traditional Mexican dish consisting of a folded or rolled tortilla filled with various ingredients." },
      { name: "Burritos", image: M02, introduction: "A large flour tortilla filled with meat, beans, rice, and other ingredients, then rolled up." },
      { name: "Quesadillas", image: M03, introduction: "A grilled tortilla filled with cheese and other ingredients, folded in half." },
      { name: "Chilaquiles", image: M04, introduction: "A breakfast dish made with tortilla chips, salsa, and various toppings." },
      { name: "Pico De Gallo", image: M05, introduction: "A fresh salsa made with chopped tomatoes, onions, cilantro, and lime juice." },
      { name: "Guacamole", image: M06, introduction: "A creamy dip made from mashed avocados, lime juice, onions, and tomatoes." },
      { name: "Enchiladas", image: M07, introduction: "Corn tortillas rolled around a filling and covered with chili sauce." },
      { name: "Tostada", image: M08, introduction: "A flat or bowl-shaped tortilla that is deep-fried or toasted." },
      { name: "Mole", image: M09, introduction: "A rich sauce made from various ingredients including chili peppers and chocolate." },
      { name: "Salsa", image: M10, introduction: "A variety of sauces used as condiments, made from tomatoes, chili peppers, and other ingredients." },
    ],
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
              {cuisine.dishes.length > 0 ? (
                cuisine.dishes.map((dish, imgIndex) => (
                  <div key={imgIndex} className="cuisine_dish_item">
                  <div className="dish_item_intro">
                      <a className="dish_name">{dish.name}</a>
                      <p className="dish_intro">{dish.introduction}</p>
                    </div>
                    <div
                      className="cuisine_image"
                      onClick={() => handleImageClick(cuisine.name, dish.name, dish.image)}
                    >
                      <div className="cuisine_image_inner" style={{ backgroundImage: `url(${dish.image})` }}>
                        <p>{dish.name}</p>
                      </div>
                      <BiPlus className="fa_cuisine" />
                    </div>
                    
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

export default Cuisine;