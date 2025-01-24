import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAILS } from '../graphql/queries';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID from the URL

  // Fetch product details using Apollo Client
  const { loading, error, data } = useQuery<{ product: Product }>(GET_PRODUCT_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error fetching product details. Please try again later.</p>;

  const product = data?.product;

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-red-500 mb-6">${product.price.toFixed(2)}</p>

          {/* Buy Now Button */}
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition"
            onClick={() => {
              // Redirect to Stripe Checkout or handle payment logic here
              window.location.href = `/checkout/${product.id}`;
            }}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Back to Shop Link */}
      <div className="mt-6">
        <Link to="/shop" className="text-red-500 underline">
          Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
