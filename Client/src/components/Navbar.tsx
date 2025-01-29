import { type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import logo from '../images/logo.jpg';

const Navbar: React.FC = () => {
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
            src={logo} // Replace with your logo path
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
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/me">
              {/* Retrieving the logged-in user's profile to display the username */}
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
