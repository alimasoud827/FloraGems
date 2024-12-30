import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import StarRating from './StarRating';
import { IoMdAdd } from "react-icons/io";
import { CartContext } from '../CartProvider';

const Flowers = () => {
  const rating = 3.5;
  const { setCart } = useContext(CartContext);

  const addToCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if(existingItem) {
        return prevCart.map((item) => 
            item.id === id 
              ? {...item, quantity: item.quantity + 1 }
              : item
          );
      } else {
        return ([...prevCart, {id, quantity: 1}])
      }
    });
    console.log('Item added to cart:', id);
  } 
  
  return (
    <div>
      <h3 id='flowers'>Flower Collection</h3>
      <div className='collection'>
        {assets.map((asset) => (
          <div key={asset.id} className='one-cont'>
            <div className='add' onClick={() => addToCart(asset.id)}><IoMdAdd className='addIcon' /></div>
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

export default Flowers;