// import { use } from 'react';
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
import Stripe from 'stripe';
import {  Order, Products, User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';
import { GraphQLError } from 'graphql';

const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    
    getSingleUser: async (_parent: any, _args: any, context: any) => {
      if (context?.user) {
        const foundUser = await User.findOne({ _id: context.user._id });
        if (!foundUser) {
          throw new GraphQLError("User does not exist!")
        }
        return foundUser;
      } else {
        throw new AuthenticationError('Could not authenticate user.');
      
      }
    },

    getProducts: async () => {
      const allProducts = await Products.find({}).populate("category");
      return allProducts;
    },
   
    // getProduct: async () => {
    //   return await Products.findOne();
    // },
    // getOrders: async () => {
    //   return await Order.find();
    // },
    checkout: async (_parent:any, args:any, context:any) => {
      const url = new URL(context.headers.referer).origin;
      // const order = new Order({ products: args.products });
      const line_items = [];

      // const { products } = await order.populate('products').exec();

      // const products: any = [];

      const productIds: any = args.products;


      const products = await Products.find({
        _id: {
          $in: productIds
        }
      });


      // const products: any = productIds.map((id: any) => {
      //   return products.find(product => product._id === id);
      // })

      console.log(products)

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Category:{
    products: async(category:any)=>{
      return await Products.find({category: category._id})
    }
  },
  Order: {
    user: async (order: any) => {
      return await User.findById(order.user);
    },
    products: async (order: any) => {
      return await Products.find({ _id: { $in: order.products } });
    },
  },
  Mutation: {
    createUser: async (
      _parent: any,
      args: { username: string; email: string; password: string },
      _context: any
    ) => {
      const user = await User.create(args);
      if (!user) {
        return null;
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },

    login: async (
      _parent: any,
      args: { email: string; password: string },
      _context: any
    ) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new GraphQLError("User does not exist!")
      }
      const correctPw = await user.isCorrectPassword(args.password);
      if (!correctPw) {
        return null;
      }
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },
    // createOrder: async(
    //   _parent:any, _args:any,_context:any
    // )=>{
    //   const updatedUser = await User.
    // }
    deleteUser: async(_parent:any,_args:any,context:any)=>{
      
     
        const user = await User.findByIdAndDelete({ _id: context.user._id })
        if (!user) {
          return null;
        }
        
        return { message: 'User has been deleted'};
    },
    createProduct: async(_parent: any, args: { name: string, description: string, image: string, price: number, quantity: number, category: string })=>{
      const newProduct = new Products({
        name: args.name,
        description: args.description,
        image: args.image,
        price: args.price,
        quantity: args.quantity,
        category: args.category,
      });

      await newProduct.save();
      return newProduct;
    },  
    
    createOrders: async (_parent: any, args: { userId: string, orders: Array<any> }) => {
      const user = await User.findById(args.userId);

      if (!user) {
        throw new Error("User not found");
      }

      const newOrders = args.orders.map((order: any) => {
        const newOrder = new Order({
          user: user._id,
          ...order,
        });

        return newOrder.save();
      });

      return await Promise.all(newOrders);
    },
      

  },

  User: {
    saveOrder: async (user: any) => {
      return await Order.find({ user: user._id });
    },
  }
};

export default resolvers;