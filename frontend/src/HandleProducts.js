import axios from "axios";


export const fetchProducts = async (setProducts, setLoading, setError) => {
  try {
    const response = await axios.get('http://localhost:5000/admin/list');
    
    console.log(response.data);
    
    const sortedProducts = response.data.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0); 
      const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
      return dateB - dateA;
    });

    setProducts(sortedProducts);
    setLoading(false);
  } catch (error) {
    setError('Failed to fetch products');
    setLoading(false);
  }
};


const handleDelete = async (productId, setProducts, setError) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:5000/admin/delete/${productId}`);
    setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
  } catch (error) {
    console.error("Failed to delete product:", error);
    setError("Failed to delete the product. Please try again.");
  }
};

export const truncateDescription = (description) => {
  const words = description.split(' ');
  if (words.length > 15) {
    return words.slice(0, 15).join(' ') + '...'; 
  }
  return description; 
};

const HandleProducts = { handleDelete, fetchProducts, truncateDescription };
export default HandleProducts;