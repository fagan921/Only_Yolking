import { useState } from 'react';
// import Layout from '../components/Layout';
import GalleryItem from '../components/GalleryItem';

// Updated gallery images with correct paths
const galleryImages = [
  '/assets/PetGallery/IMG_2680.jpeg',
  '/assets/PetGallery/IMG_2682.jpeg',
  '/assets/PetGallery/IMG_2722.jpeg',
  '/assets/PetGallery/IMG_2803.jpeg',
  '/assets/PetGallery/IMG_2816.jpeg',
  '/assets/PetGallery/IMG_2821.jpeg',
  '/assets/PetGallery/IMG_3070.jpeg',
  '/assets/PetGallery/IMG_3097.jpeg',
  '/assets/PetGallery/IMG_3102.jpeg',
  '/assets/PetGallery/IMG_3228.jpeg',
  '/assets/PetGallery/IMG_3233.jpeg',
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Gallery</h1>
        <p className="text-lg text-gray-600 mb-10">Click on an image to view it in full size.</p>

        {/* Gallery Grid */}
        <div className="flex flex-wrap justify-center">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} imageUrl={image} onClick={() => setSelectedImage(image)} />
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        {selectedImage && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={() => setSelectedImage(null)} // Click anywhere outside to close
          >
            <div className="relative max-w-4xl" onClick={(e) => e.stopPropagation()}> 
              <img src={selectedImage} alt="Expanded View" className="w-full h-auto rounded-lg shadow-lg" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-lg hover:bg-gray-300"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
  );
}

export default Gallery;