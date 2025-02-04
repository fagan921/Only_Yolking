import React from "react";
// import { motion } from "framer-motion";
import owners from "../images/owners.png";
import liz from "../images/liz.png";

const About: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center px-6 sm:px-8 py-10 sm:py-16"
      style={{ backgroundImage: "url('/assets/EggshellBackground.png')" }}
    >
      {/* Page Title */}
      <h1
        className="text-5xl sm:text-7xl font-semibold text-yellow-500 mt-6 sm:mt-8 mb-8 text-center tracking-wide"
        style={{ fontFamily: "'Genty Regular', serif" }}
      >
        Meet The Yolkers
      </h1>

      {/* Content Section */}
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg sm:text-2xl text-gray-900 font-medium leading-relaxed">
            <span className="text-yellow-600 font-bold">We are Liz and Koa,</span> the proud owners of{" "}
            <span className="text-blue-500 font-bold text-2xl">Only Yolking!</span> Our food cart was born from a shared
            love of cooking and all things breakfast. The classic egg-in-the-hole, known by many names, holds a special
            place in countless hearts, including ours.
            <br />
            <br />
            For me, Liz, it’s more than just comfort food—it’s a cherished memory. My mom would make egg-in-the-holes
            for me growing up, whether to lift my spirits or to fuel me before a big day.
            <br />
            <br />
            We’re so excited to share this nostalgic favorite with you, made with the same care and love we’ve always put
            into our cooking. <span className="italic text-yellow-500">Thank you for supporting our small, local business</span>—we truly appreciate it and hope you enjoy every bite!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center gap-10 md:w-1/3">
          {/* <motion.img
            src={owners}
            alt="Owners"
            className="w-80 md:w-full rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          /> */}
          <img src={owners} alt="Owners" className="w-80 md:w-full rounded-xl shadow-lg" />

          {/* <motion.img
            src={liz}
            alt="Liz"
            className="w-56 md:w-64 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          /> */}
          <img src={liz} alt="Liz" className="w-56 md:w-64 rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default About;
