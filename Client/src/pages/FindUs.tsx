import React from 'react';
import Layout from '../components/Layout';
import Map from '../components/Map'; 

function FindUs() {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Find Us</h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Come visit us at our food cart! Check the map below to find our exact location.
        </p>
        <div className="flex justify-center">
          <Map /> {/* Embed the Map component here */}
        </div>
      </div>
    </Layout>
  );
}

export default FindUs;