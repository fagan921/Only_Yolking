import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../images/logo.jpg';

function Navbar() {
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="bg-blue-400 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-center">
          <img src={logo} alt="Only Yolking" className="h-12" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6">
          <Link to="/about" className="text-white font-bold uppercase hover:underline">About</Link>
          <Link to="/find-us" className="text-white font-bold uppercase hover:underline">Find Us</Link>
          <Link to="/menu" className="text-white font-bold uppercase hover:underline">Menu</Link>
          <Link to="/gallery" className="text-white font-bold uppercase hover:underline">Gallery</Link>
          <Link to="/contact-us" className="text-white font-bold uppercase hover:underline">Contact Us</Link>
          <Link to="/shop" className="text-white font-bold uppercase hover:underline">Shop</Link>
          <a
            href="https://doordash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Order Now
          </a>
        </div>

        {/* Authentication Links */}
        <div className="flex space-x-4">
          {Auth.loggedIn() ? (
            <>
              <Link to="/me" className="text-white font-bold hover:underline">
                {Auth.getProfile().data.username}'s Profile
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white font-bold hover:underline">Login</Link>
              <Link to="/signup" className="text-white font-bold hover:underline">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;