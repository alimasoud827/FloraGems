import React, { useState } from 'react'
import './cart.css'

const CartLine = ({ items, title, price, quantity, total, remove }) => {
  return (
    <div className='cart-row'>
      <div className='coll col-items'>{items}</div>
      <div className='coll col-title'>{title}</div>
      <div className='coll col-price'>{price}</div>
      <div className='coll col-quantity'>{quantity}</div>
      <div className='coll col-Total'>{total}</div>
      <div className='coll remove'>{remove}</div>
    </div>
  )
}

export default CartLine