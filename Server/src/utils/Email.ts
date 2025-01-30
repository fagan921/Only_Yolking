const Mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();
const order = require('../models/Order');  // Path to your Order model

async function sendOrderNotification(order) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,  // Use environment variables for sensitive data
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'owner-email@example.com',  // Site owner's email
    subject: 'New Order Received',
    text: `A new order has been placed!

      Customer Details:
      - Name: ${order.customerDetails.fullName}
      - Email: ${order.customerDetails.email}
      - Address: ${order.customerDetails.address}, ${order.customerDetails.city}, ${order.customerDetails.state}, ${order.customerDetails.zip}, ${order.customerDetails.country}

      Order Details:
      - Total Amount: $${(order.totalAmount / 100).toFixed(2)}
      - Payment Status: ${order.paymentStatus}
      - Payment ID: ${order.paymentId}`,
  };

  await transporter.sendMail(mailOptions);
}

async function createOrder(paymentToken, totalAmount, products, customerDetails) {
  try {
    const order = new Order({
      purchaseDate: new Date(),
      products,
      totalAmount,
      paymentId: paymentToken,  // Payment ID from the payment service (Square, Stripe, etc.)
      paymentStatus: 'COMPLETED',
      customerDetails,
    });

    await order.save();
    await sendOrderNotification(order);
    return { success: true, message: 'Order created successfully!' };
  } catch (error) {
    console.error('Error creating order:', error);
    return { success: false, message: 'Failed to create order.' };
  }
}

module.exports = { createOrder, sendOrderNotification };
