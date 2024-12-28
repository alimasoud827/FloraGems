import React from 'react'
import { assets } from '../assets/assets';
import StarRating from './StarRating';
import { IoMdAdd } from "react-icons/io";

const Flowers = () => {
  const rating = 3.5;
  
  return (
    <div>
      <h3 id='flowers'>Flower Collection</h3>
      <div className='collection'>
        {assets.map((asset) => (
          <div key={asset.id} className='one-cont'>
            <div className='add'><IoMdAdd className='addIcon' /></div>
            <img src={asset.value} alt={asset.name} />
            <div className='cont-details'>
              <div className='nameRate'>
                <p className='name'>{asset.name}</p>
                <StarRating rating={rating}/>
              </div>
              <p className='description'>{asset.description}</p>
              <p className='price'>Ksh. {asset.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Flowers