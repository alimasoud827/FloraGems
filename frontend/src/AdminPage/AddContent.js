import React, { useState } from 'react';
import uploadToCloud from '../Cloud/Cloud';


const AddContent = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  uploadToCloud();

  const handleFileChange = (e) => {
    const file = e.target.files[[0]];

    if (file){
      if (!file.type.includes('image/')) {
        setError('Please upload an image file');
        setImage(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setError('');
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setError('');
    }
    console.log(<img alt=''>{image}</img>);
  };

  return (
    <div className='add-content-sec'>
      <p>Upload Image</p>
      <input 
        type='file' 
        rel='uploadphoto'
        className='upload-input' 
        onChange={handleFileChange}/>
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
      <textarea rel='productdescription' placeholder='Write content here' className='product-description'/>
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
          <input type='text' rel='productprice' placeholder='Type here' className='product-price' />
        </div>
      </div>
      <button className='add-btn'>Add</button>
    </div>
  )
}

export default AddContent;