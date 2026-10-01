import React from 'react';

const ImageLayout = () => {
  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
      {/* Left Image */}
      <div className="absolute left-8 bottom-12 w-32 h-32 md:w-40 md:h-40 shadow-lg rounded-lg overflow-hidden bg-white p-1">
        <img 
          src="https://images.unsplash.com/photo-1579353977828-2a4eab54089d" 
          alt="Left image" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Top Center Image */}
      <div className="absolute left-1/2 -translate-x-1/2 top-6 w-24 h-24 md:w-32 md:h-32 shadow-lg rounded-lg overflow-hidden bg-white p-1">
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" 
          alt="Center image" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-8 top-16 w-28 h-28 md:w-36 md:h-36 shadow-lg rounded-lg overflow-hidden bg-white p-1">
        <img 
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" 
          alt="Right image" 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      </div>
  );
};

export default ImageLayout;
