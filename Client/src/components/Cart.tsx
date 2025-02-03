interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string; // Optional: Include an image for each item
}

import { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../graphQL/queries/checkout.js';
import truck from "../images/truck.png";
import sandwichCart from "../images/grid-2.png";
// import sandwichCart2 from "../images/grid-3.png";
// import { useStoreContext } from '../utils/';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions.js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart: React.FC = () => {

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);



  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Egg Sandwich', price: 5.99, quantity: 2, imageUrl: '/images/egg-sandwich.jpg' },
    { id: 2, name: 'Pancakes', price: 7.99, quantity: 1, imageUrl: '/images/pancakes.jpg' },
  ]);

  useEffect(() => {
    const authCheck = Auth.loggedIn()
    if (!authCheck) {
      window.location.assign('/login');
    }
  }, [])

  // checks if data is changed upon checkout
  useEffect(() => {
    if (data) {
      stripePromise.then((res: any) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Increase quantity
  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-skyblue py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Food Truck Image */}
        <img
          src={truck}
          alt="Food Truck"
          className="className=w-2/5 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/4 md:-ml-16 mb-8 md:mb-0"
        />
  
        {/* Cart Container */}
        <div className="md:w-2/3 text-center md:text-left bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-[#38B6FF] mb-6">Your Cart</h1>
  
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white shadow-md p-4 mb-4 rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={sandwichCart}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg mr-4"
                    />
                    <div>
                      <h2 className="font-bold text-gray-700">{item.name}</h2>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-skyblue text-white rounded-lg mr-2"
                    >
                      -
                    </button>
                    <span className="text-gray-700 font-bold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-skyblue text-white rounded-lg ml-2"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text-gray-700 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:underline text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-right mt-6">
                <h2 className="text-xl font-bold text-[#38B6FF]">Total: ${totalPrice.toFixed(2)}</h2>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
  
          {/* Checkout Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                getCheckout({
                  variables: {
                    products: [
                      "679beb91ad950e4bbfb793be",
                      "679beb91ad950e4bbfb793c0"
                    ]
                  }
                });
              }}
              className="bg-[#38B6FF] text-[#FFF4E5] px-6 py-3 rounded-xl shadow-md hover:bg-opacity-90 font-bold text-2xl border border-[#FFF4E5]"
            >
              PAYMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Cart;
