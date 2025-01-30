import React from 'react';

type GalleryItemProps = {
  imageUrl: string;
  onClick: () => void;
};

function GalleryItem({ imageUrl, onClick }: GalleryItemProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={onClick}
      >
        <img src={imageUrl} alt="Gallery Image" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default GalleryItem;
