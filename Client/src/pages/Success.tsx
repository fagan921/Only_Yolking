// import React from 'react';
// import Layout from '../components/Layout';
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { loadStripe } from "@stripe/stripe-js";
// import { useEffect } from "react";
// import Stripe from "stripe";
// import { GET_USER } from "../graphQL/queries/user";
// const stripe = new Stripe(
//   "pk_test_51QnYOlPoCoQFktOpFaILGwCmfgYTKRqIZCFF00LdNNog52atxtqFfy2ESH4rewpB167zP1qXblx3ScYEYhagteFK00Sx1KvT8A"
// );
function Success() {
    // const { data, error } = useQuery(GET_USER);
    // console.log(data)
    // console.log(error)
    const params = new URL(location.href).searchParams;
    const session_id = params.get('session_id');
    // let user = data?.getSingleUser|| {};
    
  //   useEffect(() => {
  //     route()


        
  //   },[])


  //   // send a quey to your server to create an invoivce
  //  const route = async () =>{
  //   const session = await stripe.checkout.sessions.retrieve(
  //     session_id
  //   );
  //  }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-8 py-16">
          <div className="w-full max-w-5xl text-center border-4 border-gray-400 rounded-xl p-12 bg-white shadow-lg">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-8">This is the success page</h1>
            <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
                {session_id}
            </p>
          </div>
        </div>
    );
  }
  
  export default Success;