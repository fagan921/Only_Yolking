// import React from 'react';
// import Layout from '../components/Layout';

function Menu() {
  return (
    <div className="container mx-auto py-10 px-4 text-center">
      {/* Page Title with Genty Font */}
      <h1
        className="text-4xl sm:text-5xl text-blue-400 mb-5"
        style={{ fontFamily: 'Genty Regular, serif' }}
      >
        Our Menu
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Check out our delicious offerings! Freshly made and prepared with love.
      </p>

      {/* Menu Image Section */}
      <div className="flex justify-center">
        <img
          src="/dist/assets/IMG_0331.JPG" // Updated image path
          alt="Only Yolking Menu"
          className="w-full max-w-6xl h-auto rounded-lg shadow-lg border border-gray-300"
        />
      </div>
    </div>
  );
}

export default Menu;