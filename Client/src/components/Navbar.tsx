import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '/public/assets/only-yolking-txt.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="bg-skyblue py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>
          <Link to="/" className="">
            <img
              src={logo}
              alt="Only Yolking Logo"
              className="h-24 sm:h-32 md:h-32 lg:h-40 w-auto"
            />
          </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/about" className="text-white font-bold uppercase hover:underline">About</Link>
          <Link to="/find-us" className="text-white font-bold uppercase hover:underline">Find Us</Link>
          <Link to="/menu" className="text-white font-bold uppercase hover:underline">Menu</Link>
          <Link to="/gallery" className="text-white font-bold uppercase hover:underline">Gallery</Link>

          {/* Logo */}
          
          <Link to="/contact-us" className="text-white font-bold uppercase hover:underline">Contact Us</Link>
          <Link to="/shop" className="text-white font-bold uppercase hover:underline">Shop</Link>
          <Link to="/cart" className="text-white font-bold uppercase hover:underline">Cart</Link>
          {/* <a
            href="https://doordash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-400 font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Order Now
          </a> */}

          {/* Authentication Links (Desktop) */}
          {Auth.loggedIn() ? (
            <>
              <div className="text-white font-bold">
                Hey {Auth.getProfile().data.username}!
              </div>
              <button
                onClick={logout}
                className="bg-[#FCD91A] text-[#5766BC] px-4 py-2 rounded-lg shadow hover:bg-red-600 transition font-roboto"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-yellow-300 font-bold hover:underline">Login</Link>
              <Link to="/signup" className="text-yellow-300 font-bold hover:underline">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-500 md:hidden flex flex-col items-center py-4 space-y-2">
            <Link to="/about" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/find-us" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>Find Us</Link>
            <Link to="/menu" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>Menu</Link>
            <Link to="/gallery" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/contact-us" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/shop" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>Shop</Link>
            <Link to="/cart" className="text-white text-lg font-bold uppercase hover:underline" onClick={() => setIsOpen(false)}>Cart</Link>
            {/* <a
              href="https://doordash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-400 font-bold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </a> */}

            {/* Authentication Links (Mobile) */}
            {Auth.loggedIn() ? (
              <>
                {/* <Link to="/me" className="text-white text-lg font-bold hover:underline" onClick={() => setIsOpen(false)}>
                  {Auth.getProfile().data.username}'s Profile
                </Link> */}
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-yellow-300 text-lg font-bold hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/signup" className="text-yellow-300 text-lg font-bold hover:underline" onClick={() => setIsOpen(false)}>Signup</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;