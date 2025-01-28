import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Navbar() {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Logs the user out by calling the logout method from Auth
    Auth.logout();
  };

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
        <div className="flex items-center space-x-4">
          <a
            href="https://doordash.com" // Replace with your DoorDash URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Order Now
          </a>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
