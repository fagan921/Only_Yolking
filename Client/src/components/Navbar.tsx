import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-400 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-center flex-grow">
          <img
            src="/logo.png" // Replace with your logo path
            alt="Only Yolking"
            className="h-12 mx-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6">
          <Link to="/about" className="text-white font-bold uppercase hover:underline">
            About
          </Link>
          <Link to="/find-us" className="text-white font-bold uppercase hover:underline">
            Find Us
          </Link>
          <Link to="/menu" className="text-white font-bold uppercase hover:underline">
            Menu
          </Link>
          <Link to="/gallery" className="text-white font-bold uppercase hover:underline">
            Gallery
          </Link>
          <Link to="/contact-us" className="text-white font-bold uppercase hover:underline">
            Contact Us
          </Link>
          <Link to="/shop" className="text-white font-bold uppercase hover:underline">
            Shop
          </Link>
        </div>

        {/* Order Now Button */}
        <div>
          <a
            href="https://doordash.com" // Replace with your DoorDash URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;