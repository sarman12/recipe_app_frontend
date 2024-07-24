import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiPlus } from 'react-icons/bi';
import './Seasonal.css';

import S01 from '../../assets/summer/S01.png';
import S02 from '../../assets/summer/S02.png';
import S03 from '../../assets/summer/S03.jpg';
import S04 from '../../assets/summer/S04.png';
import S05 from '../../assets/summer/S05.jpg';
import S06 from '../../assets/summer/S06.png';
import S07 from '../../assets/summer/S07.png';
import S08 from '../../assets/summer/S08.png';
import S09 from '../../assets/summer/S09.png';
import S10 from '../../assets/summer/S10.jpg';
import S11 from '../../assets/summer/S11.png';
import S12 from '../../assets/summer/S12.png';
import S13 from '../../assets/summer/S13.png';
import S14 from '../../assets/summer/S14.png';
import S15 from '../../assets/summer/S15.png';

import M01 from '../../assets/Monsoon/M01.png';
import M02 from '../../assets/Monsoon/M02.jpg';
import M03 from '../../assets/Monsoon/M03.png';
import M04 from '../../assets/Monsoon/M04.png';
import M05 from '../../assets/Monsoon/M05.png';
import M06 from '../../assets/Monsoon/M06.jpg';
import M07 from '../../assets/Monsoon/M07.png';
import M08 from '../../assets/Monsoon/M08.png';
import M09 from '../../assets/Monsoon/M09.jpg';
import M10 from '../../assets/Monsoon/M10.png';
import M11 from '../../assets/Monsoon/M11.png';
import M12 from '../../assets/Monsoon/M12.png';
import M13 from '../../assets/Monsoon/M13.png';
import M14 from '../../assets/Monsoon/M14.png';
import M15 from '../../assets/Monsoon/M15.png';

import W01 from '../../assets/winter/Winter/W01.png';
import W02 from '../../assets/winter/Winter/W02.png';
import W03 from '../../assets/winter/Winter/W03.png'
import W04 from '../../assets/winter/Winter/W04.png';
import W05 from '../../assets/winter/Winter/W05.png';
import W06 from '../../assets/winter/Winter/W06.png';
import W07 from '../../assets/winter/Winter/W07.jpg';
import W08 from '../../assets/winter/Winter/W08.png';
import W09 from '../../assets/winter/Winter/W09.png';
import W10 from '../../assets/winter/Winter/W10.png';
import W11 from '../../assets/winter/Winter/W11.png';
import W12 from '../../assets/winter/Winter/W12.png';
import W13 from '../../assets/winter/Winter/W13.png';
import W14 from '../../assets/winter/Winter/W14.png';
import W15 from '../../assets/winter/Winter/W15.png';

const seasonalData = [
  {
    seasonName: 'Summer Dishes',
    images: [S01, S02, S03, S04, S05, S06, S07, S08, S09, S10, S11, S12, S13, S14, S15],
    dishNames: ['Dahi Kadhi', 'Drumstick Kadhi', 'Lassi', 'Lauki Bharta', 'Aam Panna', 'Bitter Gourd Recipe', 'Cucumber Kadhi', 'Tendli Sabzi', 'Turai Sabzi', 'Watermelon Juice', 'Ash Gourd Kadhi', 'Mango Falooda', 'Mango Ice Cream', 'Punjabi Pakora Kadhi', 'Rasam']
  },
  {
    seasonName: 'Monsoon Dishes',
    images: [M01, M02, M03, M04, M05, M06, M07, M08, M09, M10, M11, M12, M13, M14, M15],
    dishNames: ['Aamati', 'Banana Chips', 'Bombi Bhujna', 'Chana Chaat', 'Cheese Balls', 'Corn Cob', 'Dal Vada', 'Kuzhi Paniyaram', 'Masala Tea', 'Methi Pakora', 'Moong Dal Chilla', 'Moong Dal Pakora', 'Poha Vada', 'Samosa', 'Vej Lemon Coriander-soup']
  },
  {
    seasonName: 'Winter Dishes',
    images: [W01, W02, W03, W04, W05, W06, W07, W08, W09, W10, W11, W12, W13, W14, W15],
    dishNames: ['Beetroot Thoran', 'Chikki', 'Gajar ka Halwa', 'Gushtaba(kashmir)', 'Lapsi(Gujrat)', 'Nihari', 'Nolen Gurer Sandesh', 'Panjiri', 'Paya Soup', 'Rogan Josh', 'Sarson da Saag aur Makke di roti', 'Shakarkandi Rabdi', 'Til Pitha', 'Undhiyu', 'Veg Thukpa']
  },
];

const Seasonal = () => {
  const navigate = useNavigate();

  const handleImageClick = (seasonName, dishName, image) => {
    const formattedDishName = dishName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/seasonal/${formattedDishName}/recipe`, { state: { seasonName, dishName, image } });
  };

  return (
    <div className="seasonals">
      <h1>Seasonal Dishes</h1>
      <div className="seasonal_container">
        {seasonalData.map((season, index) => (
          <div key={index} className="season" id={season.seasonName.toLowerCase().replace(/\s+/g, '-')}>
            <a href={`#${season.seasonName.toLowerCase().replace(/\s+/g, '-')}`}>{season.seasonName}</a>
            <div className="season_images">
              {season.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="season_image"
                  onClick={() => handleImageClick(season.seasonName, season.dishNames[imgIndex], image)}
                >
                  <div className="season_image_inner" style={{ backgroundImage: `url(${image})` }}>
                    <p>{season.dishNames[imgIndex]}</p>
                  </div>
                  <BiPlus className="fa" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasonal;
