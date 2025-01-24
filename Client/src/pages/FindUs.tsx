import React from 'react';

const FindUs: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Find Us</h1>
      <p>Check out the map below to see our current location:</p>
      <div className="mt-4">
        {/* Replace with interactive map later */}
        <div className="h-64 bg-gray-200 flex justify-center items-center">
          Interactive Map Placeholder
        </div>
      </div>
    </div>
  );
};

export default FindUs;
