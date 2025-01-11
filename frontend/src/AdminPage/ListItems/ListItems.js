import React, { useEffect, useState } from "react";
import ListRow from "./ListRow";
import { lineSpinner } from "ldrs";
import { MdDeleteForever } from "react-icons/md";
import "./listItems.css";
import HandleProducts from '../../HandleProducts';

lineSpinner.register();
const { fetchProducts, handleDelete } = HandleProducts;

const ListItems = () => {
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
      <p>All Products List</p>
      <div className="list-collection">
        <ListRow
          className="list-header"
          image={"Image"}
          name={"Name"}
          category={"Category"}
          price={"Price"}
          action={"Action"}
        />
        {products.length !== 0 ? products.map((product) => (
          <ListRow
            key={product._id}
            image={<img src={product.imageURL} alt={product.productName} className="list-image" />}
            name={product.productName}
            price={product.price}
            category={product.productCategory}
            action={
              <MdDeleteForever
                className="delete-icon"
                onClick={() => handleDelete(product._id, setProducts, setError)}
              />
            }
          />
        )) : <p className="no-products">No products in List. Add Product Items</p>}
      </div>
    </div>
  );
};

export default ListItems;