// import React from 'react';
// import Layout from '../components/Layout';

function About() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-8 py-16">
        <div className="w-full max-w-5xl text-center border-4 border-gray-400 rounded-xl p-12 bg-white shadow-lg">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8">About Us</h1>
          <p className="text-2xl text-gray-800 font-semibold leading-relaxed">
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