import React from 'react';
import StarRating from './StarRating';
import AddToCart from './addToCart';
import { truncateDescription } from '../HandleProducts';

const OneBox = ({ id, cart, setCart, imageURL, name, rating, description, price }) => {
  return (
    <div key={id} className="one-cont">
    <AddToCart 
      assetId={id}
      cart={cart}
      setCart={setCart} />
    <img src={imageURL} alt={name} />
    <div className="cont-details">
      <div className="nameRate">
        <p className="name">{name}</p>
        <StarRating rating={rating} />
      </div>
      <p className="description">{truncateDescription(description)}</p>
      <p className="price">Ksh. {price}</p>
    </div>
  </div>
  )
}

export default OneBox;