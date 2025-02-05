import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../images/only-yolking-txt.png';
import cart from '../images/cart.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logout = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Auth.logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-skyblue py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">

        <Link to="/" className="">
          <img
            src={logo}
            alt="Only Yolking Logo"
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/about" className="text-white font-bold uppercase hover:underline">About</Link>
          <Link to="/find-us" className="text-white font-bold uppercase hover:underline">Find Us</Link>
          <Link to="/menu" className="text-white font-bold uppercase hover:underline">Menu</Link>
          <Link to="/gallery" className="text-white font-bold uppercase hover:underline">Gallery</Link>

          {/* Logo */}

          <Link to="/contact-us" className="text-white font-bold uppercase hover:underline">Contact Us</Link>
          <Link to="/shop" className="text-white font-bold uppercase hover:underline">Shop</Link>
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
              <div className="text-[white] font-bold">
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

          {/* <Link to="/cart" className="text-white font-bold uppercase hover:underline">Cart</Link> */}

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-25 left-0 w-full bg-skyblue lg:hidden flex flex-col items-center py-4 space-y-2">
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
                  onClick={logout}
                  className="bg-[#FCD91A] text-[#5766BC] px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
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
        <div className="lg:hidden flex items-center space-x-4"> 
          <Link to="/cart" className="">
            <img
              src={cart}
              alt="cart icon"
              className="h-12 w-auto"
            />
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#FFF4E5] lg:hidden text-[whit]e text-6xl"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;