import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../HandleProducts';
import OneBox from './OneBox';

const Flowers = ({ cart, setCart }) => {   
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts(setProducts, setLoading, setError);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <l-line-spinner size="40" stroke="3" speed="1" color="#fa4462"></l-line-spinner>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  const jeweleryProducts = products.filter(
    (product) => product.productCategory?.toLowerCase() === 'jewellery'
  );
  return (
    <div>
      <h3 id="jewellery">Jewellery Collection</h3>
      <div className="collection">
        {jeweleryProducts.map((product) => (
          <OneBox
            id={product._id}
            cart={cart}
            setCart={setCart}
            name={product.productName}
            imageURL={product.imageURL}
            description={product.productDescription}
            rating={product.ratings}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Flowers;