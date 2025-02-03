
import Stripe from "stripe";
import { Order, Products, User } from "../models/index.js";
import { signToken, AuthenticationError } from "../utils/auth.js";
import { GraphQLError } from "graphql";

const stripe = new Stripe(
  process.env.STRIPE_KEY || ""
);

const resolvers = {
  Query: {
    getSingleUser: async (_parent: any, _args: any, context: any) => {
      if (context?.user) {
        const foundUser = await User.findOne({
          _id: context.user._id,
        }).populate("saveCart");
        if (!foundUser) {
          throw new GraphQLError("User does not exist!");
        }
        return foundUser;
      } else {
        throw new AuthenticationError("Could not authenticate user.");
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
    checkout: async (_parent: any, _args: any, context: any) => {
      const url = new URL(context.headers.referer).origin;
      // const order = new Order({ products: args.products });
      const line_items = [];

      // const { products } = await order.populate('products').exec();

      // const products: any = [];

      // const productIds: any = args.products;

      // console.log(productIds)

      // const products = await Products.find({
      //   _id: {
      //     $in: productIds,
      //   },
      // });

      const user = await User.findById(context.user._id).populate("saveCart");

      const products = user?.saveCart || [];

      // const products: any = productIds.map((id: any) => {
      //   return products.find(product => product._id === id);
      // })

      console.log(products);

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      console.log(line_items);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      // check if session is success
      console.log(session)
      

      return { session: session.id };
    },

  //   invoice: async (_parent: any, args: any, context: any) => {


      // send a fetch request to stripe about the deatils of the session using the session id


  //     // const user = await User.findById(context.user._id).populate("saveCart");

  //     // Step 1: Create a customer
  //     const customer = await stripe.customers.create({
  //       email: "customer@example.com",
  //     });

  //     // Step 2: Create an invoice item
  //     await stripe.invoiceItems.create({
  //       customer: customer.id,
  //       amount: 2000, // Amount in cents (e.g., $20.00)
  //       currency: "usd",
  //       description: "Test Product",
  //     });

  //     // Step 3: Create the invoice
  //     const invoice = await stripe.invoices.create({
  //       customer: customer.id,
  //     });

  //     // Step 4: Finalize the invoice
  //     const finalizedInvoice = await stripe.invoices.finalizeInvoice(
  //       invoice.id
  //     );

  //     // You can now view the invoice in the Stripe dashboard or via API.
  //     console.log(finalizedInvoice);
  //   },
  },
  Category: {
    products: async (category: any) => {
      return await Products.find({ category: category._id });
    },
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
        throw new GraphQLError("User does not exist!");
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
    deleteUser: async (_parent: any, _args: any, context: any) => {
      const user = await User.findByIdAndDelete({ _id: context.user._id });
      if (!user) {
        return null;
      }

      return { message: "User has been deleted" };
    },
    createProduct: async (
      _parent: any,
      args: {
        name: string;
        description: string;
        image: string;
        price: number;
        quantity: number;
        category: string;
      }
    ) => {
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

    createOrders: async (
      _parent: any,
      args: { userId: string; orders: Array<any> }
    ) => {
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

    addToCart: async (_parent: any, args: any, context: any) => {
      const user = await User.findByIdAndUpdate(context.user._id, {
        $push: {
          saveCart: args.productId,
        },
      });
      if (!user) {
        return null;
      }

      return user;
    },

    removeFromCart: async (_parent: any, args: any, context: any) => {
      const user = await User.findById(context.user._id);

      const currentCart = user?.saveCart as { _id: string }[];

      let alreadyRemoved = false;

      const updatedCart = currentCart?.filter((item) => {
        console.log(item._id);
        console.log(args.productId);
        if (!alreadyRemoved && item._id.toString() === args.productId) {
          alreadyRemoved = true;
          return false;
        }
        if (alreadyRemoved) {
          return true;
        } else {
          return item._id !== args.productId;
        }
      });

      console.log(updatedCart);

      const updatedUser = await User.findByIdAndUpdate(context.user._id, {
        $set: {
          saveCart: updatedCart,
        },
      });
      if (!updatedUser) {
        return null;
      }

      return updatedUser;
    },

    removeItemFromCart: async (_parent: any, args: any, context: any) => {
      const user = await User.findByIdAndUpdate(context.user._id, {
        $pull: {
          saveCart: args.productId,
        },
      });
      if (!user) {
        return null;
      }

      return user;
    },
  },

  User: {
    saveOrder: async (user: any) => {
      return await Order.find({ user: user._id });
    },
  },
};

export default resolvers;
