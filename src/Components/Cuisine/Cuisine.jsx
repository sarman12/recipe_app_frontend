import React from 'react';
import './Cuisine.css';
import I01 from '../..//assets/I01.jpg';
import I02 from '../..//assets/I02.jpg';
import I03 from '../..//assets/I03.jpg';
import I04 from '../..//assets/I04.jpg';
import I05 from '../..//assets/I05.jpg';
import I06 from '../..//assets/I06.jpg';
import I07 from '../..//assets/I07.jpg';
import I08 from '../..//assets/I08.jpg';
import I09 from '../..//assets/I09.jpg';
import I10 from '../..//assets/I010.jpg';
import I11 from '../..//assets/I011.jpg';
import I12 from '../..//assets/I012.jpg';
import I13 from '../..//assets/I013.jpg';
import I14 from '../..//assets/I014.jpg';
import I15 from '../..//assets/I015.jpg';
import I16 from '../..//assets/I016.jpg';

import C01 from '../..//assets/C01.jpg';
import C02 from '../..//assets/C02.jpg';
import C03 from '../..//assets/C03.jpg';
import C04 from '../..//assets/C04.jpg';
import C05 from '../..//assets/C05.jpg';
import C06 from '../..//assets/C06.jpg';

const cuisinesData = [
  {
    name: "Indian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [I01, I02, I03, I04, I05, I06, I07, I08, I09, I10, I11, I12, I13, I14, I15, I16],
    name_of_dishes: ["Litti Chokha(Bihar)","Poha Jalebi(MP)","Bikaneri Kachori(Rajasthan)","Akki Roti(Karnataka)","Paddu(TN)","Ghugni Chaat(WB)","Chole Bhaturey(Delhi)","Tunde Kabab(Lucknow)","Mirchi Bhaji(Hydrabad)","Fuchka(WB)","Kathi Rolls(WB)","Pav Bhaji(Mumbai)","Butter Chicken(Delhi)","Vada Pav(Mumbai)","Dal Makhani(Punjab)","Momos(Sikkim)","Aloo Gobhi(Punjab)","Rogan Josh(Kashmir)","Tandoori Chicken(Punjab)"]
  },
  {
    name: "Chinese Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [C01, C02, C03, C04, C05, C06]
  },
  {
    name: "Italian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [I01, I02, I03, I04, I05, I06, I07, I08, I09, I10, I11, I12, I13, I14, I15, I16]
  },
  {
    name: "French Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [I01, I02, I03, I04, I05, I06, I07, I08, I09, I10, I11, I12, I13, I14, I15, I16]
  },
  {
    name: "Mexican Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [I01, I02, I03, I04, I05, I06, I07, I08, I09, I10, I11, I12, I13, I14, I15, I16]
  },
  {
    name: "Canadian Cuisine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo veritatis odit deleniti molestias quibusdam adipisci omnis modi quod labore. Dolores reprehenderit placeat facilis ducimus beatae fuga totam ipsam doloribus vero maiores.",
    images: [I01, I02, I03, I04, I05, I06, I07, I08, I09, I10, I11, I12, I13, I14, I15, I16]
  }
];

function Cuisine() {
  return (
    <div className="cuisines">
      <div className="cuisine_container">
        <h1>Cuisines</h1>
        <div className="cuisine_types">
          {cuisinesData.map((cuisine, index) => (
            <div className="cuisine" key={index}>
              <h2>{cuisine.name}</h2>
              <p>{cuisine.description}</p>
              <div className="cuisine_images">
                {cuisine.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="cuisine_image"
                    style={{ backgroundImage: `url(${image})` }}
                  >
                    {cuisine.name_of_dishes && cuisine.name_of_dishes[imgIndex] && (
                      <p>{cuisine.name_of_dishes[imgIndex]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cuisine;
