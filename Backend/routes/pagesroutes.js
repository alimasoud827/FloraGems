import express from 'express';
import Product from '../models/products.js';
const pageRouter = express.Router();

pageRouter.get("/", (req, res) => {
  res.send('This is home page');
});

pageRouter.get('/cart', (req, res) => {
  res.send('This is cart page');
});

pageRouter.get('/checkout', (req, res) => {
  res.send('This is checkout page');
});

pageRouter.get('/myorders', async (req, res) => {
  res.send('This is my orders page');
});
pageRouter.post('/admin/add', async (req, res) => {
  try {
    const { productName, price, productDescription, imageURL} = req.body;

    if (!productName || !price || !productDescription || !imageURL) {
      return res.status(400).send('All fields are required');
    }
    const newProduct = new Product({
      productName,
      price,
      productDescription,
      imageURL,
    });

    await newProduct.save(); 

    res.status(201).json({
      message: 'Product added successfully'
    });
    console.log('Received Product:', newProduct);   
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).send('Internal server error');
  }
});

export default pageRouter;