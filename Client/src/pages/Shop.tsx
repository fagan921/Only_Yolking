import React from 'react';

const Shop: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Shop</h1>
      <p>Check out our merch below:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Replace with dynamic product data */}
        <div className="border p-4">
          <h2 className="text-lg font-bold">T-Shirt</h2>
          <p>$25.00</p>
          <button className="bg-red-500 text-white px-4 py-2 mt-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
