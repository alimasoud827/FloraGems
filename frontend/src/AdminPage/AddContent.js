import React, { useEffect, useState } from 'react';
import uploadToCloud from '../Cloud/Cloud';


const AddContent = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    productUrl: "",
    productName: "",
    price: "",
    details: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Updated product details:', productDetails)
  }, [productDetails]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file){
      if (!file.type.includes('image/')) {
        setError('Please upload an image file');
        setImage(null);
        setImageFile(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setImageFile(file);
        setError('');
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImageFile(null);
      setError('');
    }
  };

  const handleUpload = async () => {
    if(!imageFile) {
      alert('No imageselected for upload');
      return;
    }

    try {
      const uploadResponse = await uploadToCloud(imageFile);
      console.log('Uploaded Image URL:', uploadResponse);
      
    } catch (error) {
      console.error('Error uloading image:', error);
    }
  }

  const checkLink = (event) => {
    const linkUrl = event.target.value;
    if (linkUrl) {
      setImage(linkUrl);
      setImageFile(linkUrl);
      setError('');
    }
  };

  const handleInputChange = (key, value) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value, 
    }));
  };

  return (
    <div className='add-content-sec'>
      <p>Upload Image</p>
      <input 
        type='file' 
        rel='uploadphoto'
        className='upload-input' 
        onChange={handleFileChange}/>
      <p>Or Paste Link</p>
      <input className='product-name'
        type="text" 
        placeholder='Paste Link of no Image'
        value={productDetails.productUrl}
        onBlur={checkLink}
        onChange={(e) => handleInputChange("productUrl", e.target.value)} 
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
      <input type='text' rel='productname' placeholder='Type here' className='product-name' />
      <p>Product Description</p>
      <textarea rel='productdescription' placeholder='Write content here' className='product-description'
      value={productDetails.productDescription}
      onChange={(e) => handleInputChange("productDescription", e.target.value)}/>
      <div>
        <div>
          <p>Product Category</p>
          <select rel='productcategory' className='product-category'>
            <option value=''>Select</option>
            <option value='Electronics'>Electronics</option>
            <option value='Clothing'>Clothing</option>
            <option value='Books'>Books</option>
          </select>
        </div>
        <div>
          <p>Product Price</p>
          <input 
            type='text' 
            rel='productprice' 
            placeholder='Type here' 
            className='product-price' 
            value={productDetails.productPrice}
            onChange={(e) => handleInputChange("productPrice", e.target.value)}
            />
        </div>
      </div>
      <button className='add-btn' onClick={() => handleUpload()}>Add</button>
    </div>
  )
}

export default AddContent;