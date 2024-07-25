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
import M11 from '../../assets/M011.jpg';
import M12 from '../../assets/M012.jpg';
import M13 from '../../assets/M013.jpg';
import M14 from '../../assets/M014.jpg';
import M15 from '../../assets/M015.jpg';

import J01 from '../../assets/J01.jpg';
import J02 from '../../assets/J02.jpg';
import J03 from '../../assets/J03.jpg';
import J04 from '../../assets/J04.jpg';
import J05 from '../../assets/J05.jpg';
import J06 from '../../assets/J06.jpg';
import J07 from '../../assets/J07.jpg';
import J08 from '../../assets/J08.jpg';
import J09 from '../../assets/J09.jpg';
import J10 from '../../assets/J010.jpg';
import J11 from '../../assets/J011.jpg';
import J12 from '../../assets/J012.jpg';
import J13 from '../../assets/J013.jpg';
import J14 from '../../assets/J014.jpg';
import J15 from '../../assets/J015.jpg';

const cuisinesData = [
  {
    name: "Indian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [I01, I02, I03, I04, I05, I06, I07, I08, I09, I10, I11, I12, I13, I14, I15, I16, I17, I18, I19],
    name_of_dishes: ["Litti Chokha(Bihar)", "Poha Jalebi(MP)", "Bikaneri Kachori(Rajasthan)", "Akki Roti(Karnataka)", "Paddu(TN)", "Ghugni Chaat(WB)", "Chole Bhaturey(Delhi)", "Tunde Kabab(Lucknow)", "Mirchi Bhaji(Hydrabad)", "Fuchka(WB)", "Kathi Rolls(WB)", "Pav Bhaji(Mumbai)", "Butter Chicken(Delhi)", "Vada Pav(Mumbai)", "Dal Makhani(Punjab)", "Momos(Sikkim)", "Aloo Gobhi(Punjab)", "Rogan Josh(Kashmir)", "Tandoori Chicken(Punjab)"],
  },
  {
    name: "Chinese Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [C01, C02, C03, C04, C05, C06, C07, C08, C09, C10],
    name_of_dishes: ["Kung Pulao Chicken", "Peking Roast Duck", "Tofu", "Chow Mein", "Cantonese Spring Roll", "DongPu Rou", "Chinese Hot and Sour Soup", "Sweet and Sour Pork", "Char Siu Pork", "Chicken Fried rice"],
  },
  {
    name: "Italian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [IT01, IT02, IT03, IT04, IT05, IT06, IT07, IT08, IT09, IT10, IT11, IT12, IT13, IT14, IT15],
    name_of_dishes: ["Emilia-Romagna", "Risotto", "Carbonara Pasta", "Florentina Steak", "Gelato", "Tiramisu", "Bruschetta", "Gnocchi", "Pizza", "Arancini", "Ravioli", "Spaghetti alle Vongole", "Trofie al Pesto", "Lasagna", "Caprese Salad"],
  },
  {
    name: "Mexican Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [M01, M02, M03, M04, M05, M06, M07, M08, M09, M10, M11, M12, M13, M14, M15],
    name_of_dishes: ["Taco", "Burritos", "Quesadillas", "Chilaquiles", "Pico De Gallo", "Guacamole", "Enchiladas", "Tostada", "Mole", "Salsa", "Churros", "Elote", "Fajitas", "Ceviche", "Tortillas"],
  },
  {
    name: "Japanese Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [J01, J02, J03, J04, J05, J06, J07, J08, J09, J10, J11, J12, J13, J14, J15],
    name_of_dishes: ["Sushi", "Ramen", "Tempura", "Yakitori", "Sashimi", "Soba", "Udon", "Okonomiyaki", "Tonkatsu", "Unagi", "Onigiri", "Natto", "Tamago", "Yakizakana", "Korokke"],
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
              {cuisine.images.length > 0 ? (
                cuisine.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="cuisine_image"
                    onClick={() => handleImageClick(cuisine.name, cuisine.name_of_dishes[imgIndex], image)}
                  >
                    <div className="cuisine_image_inner" style={{ backgroundImage: `url(${image})` }}>
                      <p>{cuisine.name_of_dishes[imgIndex]}</p>
                    </div>
                    <BiPlus className="fa" />
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
