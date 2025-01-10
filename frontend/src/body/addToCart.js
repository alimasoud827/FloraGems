import { IoMdAdd } from "react-icons/io";
import React from 'react';

const AddToCart = ({ assetId, setCart }) => {
  const handleAddToCart = (assetId) => {
    setCart((prevCart) => {
      console.log(prevCart);
      const existing = prevCart.find((item) => item.id === assetId);

      if (existing) {
        return prevCart.map((item) =>
          item.id === assetId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id: assetId, quantity: 1 }];
      }
    });
  };
  return (
    <div className="add" onClick={() => handleAddToCart(assetId)}>
      <IoMdAdd className="addIcon" />
    </div>
  )
};

export default AddToCart