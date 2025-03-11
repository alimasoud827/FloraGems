import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../HandleProducts';
import OneBox from './OneBox';

const MainBody = ({ cart, setCart }) => {   
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

  return (
    <div>
      <h3 id="flowers">Latest Collection</h3>
      <div className="collection">
        {products.slice(0, 4).map((product) => (
          <OneBox
            id={product._id || product.id}
            cart={cart}
            setCart={setCart}
            name={product.productName || product.productName}
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

export default MainBody;