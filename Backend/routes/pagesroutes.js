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

pageRouter.get('/admin/list', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).send('Internal Server Error');
  }
});
pageRouter.delete("/admin/delete/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
});


pageRouter.post('/admin/add', async (req, res) => {
  try {
    const { productName, price, productDescription, imageURL, ratings, productCategory  } = req.body;

    if (!productName || !price || !productDescription || !imageURL || !ratings || !productCategory ) {
      return res.status(400).send('All fields are required');
    }
    const newProduct = new Product({
      productName,
      price,
      productDescription,
      imageURL,
      ratings,
      productCategory,
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