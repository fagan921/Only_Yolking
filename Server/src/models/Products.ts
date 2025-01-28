import { Schema, model, type Document } from 'mongoose';

export interface IProduct extends Document {
    
}

const productSchema = new Schema<IProduct>({
    purchaseDate: {
        type: String,
        required: true,
  },
  
});

const Products = model('Order', productSchema);

export default Products;
