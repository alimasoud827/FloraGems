import React from 'react'
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];

  for(let i = 1; i <= 5; i++){
    if(i <= rating){
      stars.push(<FaStar key={i} color='#fa4462' className='star-icon' />)
    }else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} color='#fa4462' className='star-icon' />)
    } else {
      stars.push(<FaRegStar key={i} color='#fa4462' className='star-icon' />)
    }
  }

  return (
    <div style={{ display: 'flex', gap: '1px', margin: '0'}}>{stars}</div>
  )
}

export default StarRating