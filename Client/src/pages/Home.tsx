import React, { useEffect, useState } from "react";
import truck from "../images/truck.png";
import sandwich1 from "../images/sandwich-1.png"
import sandwich2 from "../images/sandwich-2.png"
import sandwich3 from "../images/sandwich-3.png"
import grid1 from "../images/grid-1.png"
import grid2 from "../images/grid-2.png"
import grid3 from "../images/grid-3.png"
import grid4 from "../images/grid-4.png"
import grid5 from "../images/grid-5.png"
import grid6 from "../images/grid-6.png"
import grid7 from "../images/grid-7.png"
import grid8 from "../images/grid-8.png"
import grid9 from "../images/grid-9.png"
import menu from "../images/menu-1.jpg"
import dogBadge from "../images/dog-badge.png"
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(false), 1630); // Remove animation after 1s
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* <section className="hero bg-skyblue text-[#FFF4E5] -mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between"> */}
          {/* OG code 02/04/25 */}
          <section className="hero bg-skyblue text-[#FFF4E5] -mt-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* Left: Truck Image */}
          <img
            src={truck}
            alt="Food Truck"
            className={`w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-xl md:-ml-16 ${animate ? "animate-bounce" : ""}`}
          // className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl md:-ml-16"
          />
          {/* text */}
          <div className="text-center md:text-right md:w-2/5 pr-2 ml-auto mr-auto">
            <h1 className="text-5xl font-medium font-roboto whitespace-nowrap leading-tight mb-9 shadow-[#000000]">
            {/* <div className="text-center md:text-right md:w-2/5 pr-2 ml-auto mr-auto">
            <h1 className="text-5xl font-medium font-roboto whitespace-nowrap leading-tight mb-9 shadow-[#000000]"> */}
              Egg in the <br /> Hole Sandwiches
            </h1>
            <a href="https://www.doordash.com/store/only-yolking-eugene-31165337/"
              target="_blank"
              rel="noopener noreferrer"  className="inline-block mt-10 bg-[#FCD91A] text-[#5766BC] px-3 py-4 rounded-xl font-semibold text-2xl shadow-md border border-[#38B6FF] font-roboto tracking-wide 
              hover:animate-wiggle"
        
            >
              {/* className="mt-10 bg-[#FCD91A] text-[#5766BC] px-3 py-4 rounded-xl font-semi-bold text-2xl shadow-md hover:bg-opacity-90 border border-[#38B6FF] font-roboto tracking-wide"> */}
              ORDER NOW
            </a>
          </div>
        </div>
      </section>


      {/* Sanwiches Section */}
      <section
        className="py-8 flex justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-eggcarton.png')" }}
      >
        <div className="max-w-5xl w-full px-6 flex flex-col md:flex-row items-center gap-12 justify-center mx-auto">
          <div className="flex flex-col gap-10 md:w-1/3">
            <img src={sandwich1} alt="Sandwich 1" className="w-68 h-auto rounded-lg -mb-20 -mt-15" />
            <img src={sandwich2} alt="Sandwich 2" className="w-68 h-auto rounded-lg -mb-20 -mt-15" />
            <img src={sandwich3} alt="Sandwich 3" className="w-68 h-auto rounded-lg -mb-10 -mt-12" />
          </div>
          <div className="md:w-2/3 text-end pl-4">
            <h1 className="text-5xl font-medium font-genty text-[#38B6FF] whitespace-nowrap leading-tight">Only Yolking</h1>
            <p className="text-2xl md:text-right font-roboto text-[#38B6FF] leading-relaxed mb-6">
            {/* <p className="text-3xl md:text-right font-roboto text-[#38B6FF] leading-relaxed max-w-sm OR max-h- ml-60 mb-6"> */}
              Each sandwich is served on thick, golden Texas toast, perfectly toasted and complete with a rich, runny yolk nestled in each slice for a truly indulgent bite.
            </p>
            <p className="text-2xl md:text-right font-roboto text-[#38B6FF] leading-relaxed mb-6">
            It's paired with layers of savory, melted cheese and your choice of crispy bacon or smoky ham, creating the ultimate comfort food experience.
            </p>
            <a href="https://www.doordash.com/store/only-yolking-eugene-31165337/"
              target="_blank"
              rel="noopener noreferrer"  className="inline-block mt-10 bg-[#FCD91A] text-[#5766BC] px-3 py-4 rounded-xl font-semibold text-2xl shadow-md hover:bg-opacity-90 border border-[#FFF4E5] font-roboto tracking-wide 
              hover:animate-wiggle">
              GET CRACKIN'
            </a>
          </div>
        </div>
      </section>


      {/* IG-style grid */}
      <section className="menu bg-skyblue py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl text-[#FFF4E5] font-bold text-center mb-6">Yolked-Up Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="menu-item">
              <img src={grid1} alt="Sandwich 1" className="w-full aspect-square object-cover rounded-md" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $5.99</p>
            </div>

            <div className="menu-item">
              <img src={grid2} alt="Sandwich 2" className="w-full aspect-square object-cover rounded-md" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $6.49</p>
            </div>

            <div className="menu-item">
              <img src={grid3} alt="Sandwich 3" className="w-full aspect-square object-cover rounded-md" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $7.29</p>
            </div>

            <div className="menu-item">
              <img src={grid4} alt="Sandwich 4" className="w-full aspect-square object-cover rounded-md" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $6.99</p>
            </div>

            <div className="menu-item">
              <img src={grid5} alt="Sandwich 5" className="w-full aspect-square object-cover rounded-md" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $5.49</p>
            </div>

            <div className="menu-item">
              <img src={grid6} alt="Sandwich 6" className="w-full aspect-square object-cover rounded-md" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $7.99</p>
            </div>

            <div className="menu-item">
              <img src={grid7} alt="Sandwich 7" className="w-full aspect-square object-cover rounded-lg" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $6.59</p>
            </div>

            <div className="menu-item">
              <img src={grid8} alt="Sandwich 8" className="w-full aspect-square object-cover rounded-lg" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $5.79</p>
            </div>

            {/* Placeholder */}
            {/* <div className="menu-item border-dashed border-2 border-gray-300 flex items-center justify-center text-[#FFF4E5] aspect-square"> */}
            <div className="menu">
              <img src={grid9} alt="Sandwich 9" className="w-full aspect-square object-cover rounded-lg" />
              <p className="text-[#FFF4E5] mt-2">Awesome sandwich name $5.79</p>
            </div>
          </div>
        </div>
      </section>

      {/* menu-pdf */}
      <section className="menu bg-skyblue py-4">
        <div className="max-w-5xl mx-auto px-4">
          <img src={menu} alt="Menu" />
        </div>
      </section>


      {/* Pets */}
      <section className="py-16 flex justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/bg-eggcarton.png')" }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-2/3 text-start pl-4">
            <h2 className="text-4xl font-bold text-[#38B6FF] font-roboto">Pet Gallery</h2>
            <p className="text-2xl font-roboto text-[#38B6FF] leading-relaxed mt-5">
              Bring your furry friends along to <span className="font-bold">Only Yolking!</span> Snap a photo of your pet while you enjoy your meal,
              and we’ll add them to our pet photo gallery.
              Come for the sandwiches, stay for the paw-sitive vibes!
            </p>
            <div className='mt-10'>
            <Link to='/gallery'
            className="inline-block mt-10 bg-[#FCD91A] text-[#5766BC] px-3 py-4 rounded-xl font-semibold text-2xl shadow-md hover:bg-opacity-90 border border-[#FFF4E5] font-roboto tracking-wide 
            hover:animate-wiggle">
              PET GALLERY
            </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src={dogBadge} alt="Dog Badge" className="w-full max-w-xs md:max-w-md rounded-lg" />
          </div>

        </div>
      </section>


      {/* Newsletter */}
      <section className="bg-skyblue py-12 flex justify-center">
        <div className="container mx-auto px-6 text-center max-w-2xl">

          <h2 className="text-4xl font-bold text-[#FFF4E5] font-roboto">Stay in the Yolk!</h2>

          <p className="text-lg text-[#FFF4E5] mt-4">
            Subscribe to our newsletter for **egg-citing** updates, special deals, and all things <span className="font-bold">Only Yolking!</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full sm:w-2/3 border border-[#FFF4E5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFF4E5] text-[#FFF4E5]"
            />
            <button className="bg-[#FFF4E5] text-[#38B6FF] font-bold px-6 py-3 rounded-xl hover:bg-[#FFC107]">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-[#FFF4E5] mt-4 italic">
            No spam, just **egg-cellent** content. 🥚✨
          </p>

        </div>
      </section>

    </div>
  );
};

export default Home;
