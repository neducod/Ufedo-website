// import React from 'react';

// const ImageLayoutFlex = () => {
//   return (
//     <div className="flex items-center justify-between px-6 py-12 w-full min-h-[400px] bg-gray-100 rounded-lg border border-gray-300">
//       <div className="w-32 h-32 md:w-40 md:h-40 self-end shadow-lg rounded-lg overflow-hidden bg-white p-1">
//         <img 
//           src="https://images.unsplash.com/photo-1579353977828-2a4eab54089d" 
//           alt="Left image" 
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>

//       <div className="w-24 h-24 md:w-32 md:h-32 self-start shadow-lg rounded-lg overflow-hidden bg-white p-1">
//         <img 
//           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"    alt="Center image" 
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>

//       <div className="w-28 h-28 md:w-36 md:h-36 self-center shadow-lg rounded-lg overflow-hidden bg-white p-1">
//         <img 
//           src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" 
//           alt="Right image" 
//           className="w-full h-full object-cover rounded-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageLayoutFlex;













import React from 'react';

export default function VintagePhotoGallery() {
  return (
    <div className="min-h-screen bg-[#c8b18f] flex flex-col items-center justify-center p-6 sm:p-10 select-none">
      {/* Main Container mimicking the aged mounting board */}
      <div className="w-full max-w-5xl bg-[#d4bc96] shadow-2xl rounded-sm p-6 sm:p-12 border border-[#b89d75] relative flex flex-col items-center">
        
        {/* Handwritten Style Header */}
        <div className="text-center mb-8 tracking-wider">
          <h1 className="font-serif italic text-xl sm:text-2xl text-stone-800 font-semibold drop-shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.3)]">
            GENI' VIEW GARMENT DISTRICT
          </h1>
          <h2 className="font-serif italic text-lg sm:text-xl text-stone-800 font-medium tracking-widest mt-1 drop-shadow-[0.5px_0.5px_0px_rgba(0,0,0,0.3)]">
            MIDTOWN MANHATTAN
          </h2>
        </div>

        {/* Photos Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          
          {/* Photo 1 */}
          <div className="bg-stone-100 p-3 pb-8 shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-72 sm:h-96 overflow-hidden bg-stone-900 border border-stone-300">
              <img 
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600" 
                alt="Midtown Manhattan Vintage View 1" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
            </div>
          </div>

          {/* Photo 2 */}
          <div className="bg-stone-100 p-3 pb-8 shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-72 sm:h-96 overflow-hidden bg-stone-900 border border-stone-300">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600" 
                alt="Midtown Manhattan Vintage View 2" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
            </div>
          </div>

          {/* Photo 3 */}
          <div className="bg-stone-100 p-3 pb-8 shadow-md transform -rotate-0.5 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-72 sm:h-96 overflow-hidden bg-stone-900 border border-stone-300">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" 
                alt="Midtown Manhattan Vintage View 3" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}