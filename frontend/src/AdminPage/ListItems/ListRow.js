import React from 'react'

const ListRow = ({ image, name, category, price, action}) => {
  return (
    <div className='row'>
      <div className='coll'>{image}</div>
      <div className='coll'>{name}</div>
      <div className='coll'>{category}</div>
      <div className='coll'>{price}</div>
      <div className='coll'>{action}</div>
    </div>
  )
};

export default ListRow;