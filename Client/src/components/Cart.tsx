import { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
// import { CartItem } from "../types/cart-item.js";
import { QUERY_CHECKOUT } from "../graphQL/queries/checkout.js";
import { GET_USER } from "../graphQL/queries/user.js";
// import { useStoreContext } from '../utils/';
// import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions.js';
// import { GET_PRODUCTS } from '../graphQL/queries/products.js';
const stripePromise = loadStripe('pk_test_51QnYOlPoCoQFktOpFaILGwCmfgYTKRqIZCFF00LdNNog52atxtqFfy2ESH4rewpB167zP1qXblx3ScYEYhagteFK00Sx1KvT8A');

import { ADDTOCART, REMOVEITEMFROMCART, REMOVEFROMCART } from "../graphQL/mutations/cart";
// const {loading, data}= useQuery(GET_PRODUCTS)
const Cart: React.FC = () => {
      const [addAddToCart] = useMutation(ADDTOCART, {
          refetchQueries: [GET_USER]
      })

      const [removeFromCart] = useMutation(REMOVEFROMCART, {
        refetchQueries: [GET_USER]
    })

      const [removeItemFromCart] = useMutation(REMOVEITEMFROMCART, {
        refetchQueries: [GET_USER]
    })



  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const { loading, data: userData, error } = useQuery(GET_USER);

  // original cart items, but with duplicates
  const userCartItems = userData?.getSingleUser?.saveCart || [];

  // cart without duplicates
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const authCheck = Auth.loggedIn();
    if (!authCheck) {
      window.location.assign("/login");
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setCartItems(userData.getSingleUser.saveCart);
    }
  }, [userData]);
  // checks if data is changed upon checkout
  useEffect(() => {
    if (data) {
      stripePromise.then((res: any) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);


  // useEffect for removing duplicates and setting it to cartItems
  useEffect(() => {
    console.log(userCartItems);

    const result = Array.from(new Set(userCartItems.map((s:any) => s._id)))
    .map(productId => {
      const details = userCartItems.filter((s:any) => s._id === productId)[0]
      return {
        _id: productId,
        count: userCartItems.filter((s:any) => s._id === productId).map((p:any) => p).length,
        ...details
      }
    })

    console.log(result);

    setCartItems(result)

  }, [userData]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc: any, item: any) => acc + item.price * item.count,
    0
  );

  // Increase quantity
  const increaseQuantity = async (id: number) => {
    const productId = id;

    const response = await addAddToCart({
      variables: {
          productId: productId
      }
  })

  console.log(response)

  };

  // Decrease quantity
  const decreaseQuantity = async (id: number) => {
    const productId = id;

    const response = await removeFromCart({
      variables: {
          productId: productId
      }
  })

  console.log(response)

    // setCartItems((prevItems) =>
    //   prevItems.map((item) =>
    //     item.id === id && item.quantity > 1
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   )
    // );
  };

  // Remove item
  const removeItem = async (id: number) => {
    const productId = id;

    const response = await removeItemFromCart({
      variables: {
          productId: productId
      }
  })

  console.log(response)
    //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  useEffect(() => {
    if (!sessionStorage.getItem("reloaded")) {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloaded");
    }
  }, []);
  if (loading) {
    return <h2>Data is loading, please wait...</h2>;
  }

  return (
    <div className="p-4 bg-gray-100">
      {/* THIS IS A TEST CHECKOUT BUTTON */}
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
        onClick={() => {
          getCheckout();
        }}
      >
        Checkout!
      </button>

      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item: any) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white shadow-md p-4 mb-4 rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <h2 className="font-bold text-gray-700">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg mr-2"
                >
                  -
                </button>
                <span className="text-gray-700 font-bold">{item.count}</span>
                <button
                  onClick={() => increaseQuantity(item._id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg ml-2"
                >
                  +
                </button>
              </div>
              <div>
                <p className="text-gray-700 font-bold">
                  ${(item.price * item.count).toFixed(2)}
                </p>
                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500 hover:underline text-sm mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <h2 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h2>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
  
};

export default Cart;
