import React, { useState } from 'react';
import axios from "axios";

const AddContent = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    imageURL: "",
    productName: "",
    productDescription: "",
    price: "",
    ratings: 0,
    productCategory: '',
  });
  const [error, setError] = useState('');
  const [backendMess, setBackendMess] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (!file.type.includes('image/')) {
        setError('Please upload an image file');
        setImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setError('');
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          imageURL: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setError('');
    }
  };

  const checkLink = (event) => {
    const linkUrl = event.target.value;
    if (linkUrl) {
      setImage(linkUrl);
      setError('');
    }
  };

  const handleInputChange = (key, value) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/admin/add", productDetails);

      setProductDetails({
        productName: "",
        price: "",
        productDescription: "",
        productImageUrl: "",
      });
      setImage(null);
      setError("");
      setBackendMess(response.data.message);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='add-content-sec'>
      <p>Upload Image</p>
      <input 
        type='file' 
        className='upload-input' 
        onChange={handleFileChange}
      />
      <p>Or Paste Link</p>
      <input 
        type="text" 
        placeholder='Paste Link of no Image'
        value={productDetails.imageURL}
        onBlur={checkLink}
        onChange={(e) => handleInputChange("imageURL", e.target.value)} 
      />
      {error && <p className='error-msg'>{error}</p>}
      <div margin-top='10px'>
        {image && (
          <img 
            src={image} 
            alt='product' 
            className='product-image'/>
        )}
      </div>
      <p>Product Name</p>
      <input 
        type='text' 
        placeholder='Type here' 
        className='product-name'
        value={productDetails.productName}
        onChange={(e) => handleInputChange("productName", e.target.value)}
      />

      <p>Product Description</p>
      <textarea 
        placeholder='Write content here' 
        className='product-description'
        value={productDetails.productDescription}
        onChange={(e) => handleInputChange("productDescription", e.target.value)}
      />
      <div>
        <div>
          <p>Ratings</p>
          <input 
            type="number" 
            min="0" 
            max="5" 
            step="0.5" 
            placeholder="Enter ratings (0-5)"
            value={productDetails.ratings}
            onChange={(e) => handleInputChange("ratings", parseFloat(e.target.value) || 0)}
          />
        </div>
        <div>
          <p>Category</p>
          <select
            className="product-category"
            value={productDetails.productCategory}
            onChange={(e) => handleInputChange("productCategory", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Flowers">Flowers</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input 
            type='text' 
            placeholder='Type here' 
            className='product-price' 
            value={productDetails.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
          />
        </div>
      </div>
      <button type='submit' className='add-btn'>Add</button>
      {backendMess && 
        <div className={`popup ${showPopup ? 'show' : ''}`}>          
          <div class="popup-content">
            <p>{backendMess}</p>
          </div>
        </div>
      }
    </form>
  );
}

export default AddContent;