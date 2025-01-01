import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { IoCartOutline } from "react-icons/io5";

const Right = ({ cart }) => {
  console.log(cart);
    let totalQuantity = 0;
    cart.forEach(cartItem => {
      totalQuantity += cartItem.quantity;
    });
  return (
    <div className='right-sec'>
      <FaSearch style={{ color: 'gray' }} title="Search" className='icon' />
      <div className='cart-icon-cont'>
        <IoCartOutline style={{ color: '' }} title="Cart" className='icon' />
        <div className='cart-count-cont'>
          { totalQuantity > 0 && <span className='cart-count'>{totalQuantity}</span> }
        </div>
      </div>
      <button className='sign-in-btn'>Sign in</button>
    </div>
  )
}

export default Right;