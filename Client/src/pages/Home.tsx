import React from "react";
import truck from "../images/truck.png";
import sandwich1 from "../images/sandwich-1.png"
import '../index.css';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-skyblue text-center py-16">
        <div className="container mx-auto px-4">
          <img
            src={truck}
            alt="Food Truck"
            className="mx-auto w-3/4 max-w-md"
          />
          <h1 className="text-4xl font-bold mt-6"></h1>
          <p className="text-lg mt-4">Egg in the Hole Sandwiches</p>
          <button className="mt-6 bg-white text-yellow-500 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100">
            Order Now
          </button>
        </div>
      </section>
      {/* About Section */}
      <section className="about bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Only Yolking</h2>
          <p className="text-gray-600 mt-4">
            Each sandwich is served on thick,
            golden Texas toast, perfectly toasted
            and complete with a rich, runny
            yolk nestled in each slice for a truly
            indulgent bite.
          </p>
        </div>
      </section>
      {/* Menu Section */}
      <section className="menu bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Food examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="menu-item bg-white p-6 rounded-lg shadow-md">
              <img
                src={sandwich1}
                alt="Sandwich 1"
                className="w-full h-40 object-cover rounded-md"
              />
              {/* <h3 className="text-xl font-bold mt-4">Classic Egg Sandwich</h3>
              <p className="text-gray-600">$5.99</p> */}
            </div>
            {/* Repeat for other sandwiches */}
          </div>
        </div>
      </section>
      {/* Pet Gallery Section */}
      <section className="pet-gallery bg-yellow-100 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Pet Gallery</h2>
          <p className="text-gray-600 mt-4">
            Check out our customers' furry friends!
          </p>
          <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
            View Pet Gallery
          </button>
        </div>
      </section>
      {/* Newsletter Signup Section */}
      <section className="newsletter bg-blue-500 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Stay in Touch</h2>
          <p className="text-lg mt-4">
            Subscribe to our newsletter for updates!
          </p>
          <form className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-700"
            />
            <button className="bg-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
