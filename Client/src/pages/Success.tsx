// import React from 'react';
// import Layout from '../components/Layout';
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";

import { useState } from "react";
// import { GET_USER } from "../graphQL/queries/user";

// import { useEffect } from "react";

// );

function Success() {

  const returnHome = async () => {
    window.location.href = "/";
  };

  

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 px-8 py-16">
      <div className="w-full max-w-5xl text-center border-4 border-gray-400 rounded-xl p-12 bg-white shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Payment Successful</h1>
        <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
          Payment was successful.
        </p>
        <button
          onClick={returnHome}
         
          className="mt-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 hover:text-9xl  hover:animate-growText"
        >
          Click Here To Return Home
        </button>

       
     
      </div>
    </div>
  );
}

export default Success;