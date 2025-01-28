import { Schema, model, type Document } from 'mongoose';
import Products from "./Products"
export interface IOrder extends Document {
    purchaseDate: string;
    product:[typeof Products]
}

const orderSchema = new Schema<IOrder>({
    purchaseDate: {
        type: String,
        required: true,
  },
  
});

const Order = model('Order', orderSchema);

export default Order;
