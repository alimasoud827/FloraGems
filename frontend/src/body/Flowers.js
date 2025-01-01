import React from 'react';
import { assets } from '../assets/assets';
import StarRating from './StarRating';
import AddToCart from './addToCart';

const Flowers = ({ cart, setCart }) => {  
  const ratings = 3.5;
  return (
    <div>
      <h3 id="flowers">Flower Collection</h3>
      <div className="collection">
        {assets.map((asset) => (
          <div key={asset.id} className="one-cont">
            <AddToCart 
              assetId={asset.id}
              cart={cart}
              setCart={setCart} />
            <img src={asset.value} alt={asset.name} />
            <div className="cont-details">
              <div className="nameRate">
                <p className="name">{asset.name}</p>
                <StarRating rating={ratings} />
              </div>
              <p className="description">{asset.description}</p>
              <p className="price">Ksh. {asset.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flowers;