import React from 'react'
import { assets } from '../assets/assets';
import StarRating from './StarRating';
import AddToCart from './addToCart';

const MainBody = ({ cart, setCart }) => {
  const rating = 3.5;
  
  return (
    <div>
      <h3>Latest Collection</h3>
      <div id='collection' className='collection'>
        {assets.map((asset) => (
          <div key={asset.id} className='one-cont'>
            <AddToCart 
              assetId={asset.id}
              cart={cart}
              setCart={setCart} />
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

export default MainBody