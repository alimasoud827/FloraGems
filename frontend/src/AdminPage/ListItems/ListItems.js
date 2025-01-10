import React, { useEffect, useState } from 'react'
import ListRow from './ListRow'
import axios from 'axios'
import { lineSpinner } from 'ldrs'
import { MdDeleteForever } from "react-icons/md";
import './listItems.css'

lineSpinner.register();

const ListItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/list');
        setProducts(response.data)
        setLoading(false);        
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
   }, []);

  if (loading) {
    return (
    <div className='loader'>      
      <l-line-spinner
        size="40"
        stroke="3"
        speed="1" 
        color="#fa4462" 
      ></l-line-spinner>
    </div>
    )
  };

  if(error) {
    return <div>{error}</div>
  }
  return (
    <div>
      <p>All Products List</p>
      <div className='list-collection'>
        <ListRow className='list-header'
          image={'Image'}
          name={'Name'}
          price={'Price'}
          action={'Action'} 
        />
        {products.map((product) => (
          <ListRow key={product._id}
            image={<img src={product.imageURL} alt={product.productName} className='list-image' />}
            name={product.productName}
            price={product.price}
            action={<MdDeleteForever />} 
          />
        ))}        
      </div>
    </div>
  )
}

export default ListItems