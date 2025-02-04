import mongoose, { Schema, model, type Document } from 'mongoose';
export interface IProduct extends Document {
  name: string;
  description: string;
  size: string[];
  image: string;
  price: number;
  quantity: number;
  category: mongoose.Types.ObjectId;
  // purchaseDate: string;
}
const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  // what size options we have = NA, S, M, L, XL, XXL
  size:{
      type: [String]
    },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  // This information doesnt make sence here. Would be better in orders.
  // purchaseDate: {
  //   type: String,
 // required: true,
  // },
});
const Products = model('Product', productSchema);

export default Products;