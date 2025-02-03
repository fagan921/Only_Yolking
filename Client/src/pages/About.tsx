// import React from 'react';
// import Layout from '../components/Layout';

function About() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 bg-cover bg-center px-6 sm:px-8 py-8 sm:py-12"
      style={{ backgroundImage: "url('/assets/EggshellBackground.png')" }}
    >
      {/* Page Title (Outside Content Box) */}
      <h1
        className="text-4xl sm:text-5xl font-semibold text-blue-400 mt-6 sm:mt-8 mb-5 text-center"
        style={{ fontFamily: "'Genty Regular', serif" }}
      >
        About Us
      </h1>

      {/* Content Box */}
      <div className="w-full max-w-5xl text-center p-6 sm:p-12 bg-white shadow-lg">
        <p className="text-lg sm:text-2xl text-gray-800 font-semibold leading-relaxed">
          "We are <span className="font-extrabold text-blue-600">Liz and Koa</span>, the proud owners of{' '}
          <span className="text-blue-600 font-extrabold">Only Yolking!</span> Our food cart was born from a shared
          love of cooking and all things breakfast. The classic egg-in-the-hole, known by many names, holds a special
          place in countless hearts, including ours.
          <br /><br />
          For me, Liz, it’s more than just comfort food—it’s a cherished memory. My mom would make egg-in-the-holes 
          for me growing up, whether to lift my spirits or to fuel me before a big day.
          <br /><br />
          We’re so excited to share this nostalgic favorite with you, made with the same care and love we’ve always put 
          into our cooking. Thank you for supporting our small, local business—we truly appreciate it and hope you enjoy every bite!"
        </p>
      </div>
    </div>
  );
}

export default About;