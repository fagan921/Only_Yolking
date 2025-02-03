// import React from 'react';
// import Layout from '../components/Layout';
import Map from '../components/Map';

function FindUs() {
  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center">
      {/* Page Title with Exact Styling */}
      <h1
        className="text-4xl sm:text-5xl font-semibold text-blue-400 mb-5"
        style={{ fontFamily: 'Gentry, serif' }}
      >
        Find Us
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10 text-center max-w-2xl">
        Come visit us at our food cart! Check the map below to find our exact location.
      </p>

      {/* Map Section (Larger & Responsive) */}
      <div className="w-full max-w-6xl h-[500px] md:h-[600px] lg:h-[700px]">
        <Map />
      </div>
    </div>
  );
}

export default FindUs;