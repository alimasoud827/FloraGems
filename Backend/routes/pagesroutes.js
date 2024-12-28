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
pageRouter.get('/admin', async (req, res) => {

  const product = new Product({ 
    name: 'product1',
    price: 100,
    description: 'This is product1',
    imageURL: 'http://www.google.com/product1.jpg',
   });
  await product.save();
  res.send('This is admin page');
});

export default pageRouter;