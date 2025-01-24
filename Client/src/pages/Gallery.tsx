import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p>Share your photos and check out what others have shared!</p>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Replace with user-submitted images */}
        <div className="h-32 bg-gray-200 flex justify-center items-center">
          Image Placeholder
        </div>
      </div>
    </div>
  );
};

export default Gallery;