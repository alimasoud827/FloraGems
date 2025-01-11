import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  productDescription: { type: String, required: true },
  imageURL: { type: String, required: true },
  ratings: { type: String, required: true },
  productCategory: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;