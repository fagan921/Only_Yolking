import { Schema, model, type Document } from 'mongoose';

export interface IOrder extends Document {
    purchaseDate:string;
    products:string;
    totalAmount:string;
    paymentId:string;
    paymentStatus:string;
    customerDetails:string;
}

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  totalAmount: {
    type: Number, // Store in cents (e.g., $50.00 = 5000)
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'],
    default: 'PENDING',
    required: true,
  },
  customerDetails: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
  },
});

const Order = model('Order', orderSchema);

module.exports = Order;
