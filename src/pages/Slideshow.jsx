import React from 'react';

export default function ImageGallery() {
  // Define image sets for the 3 rows
  const row1Images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adacbd02bff?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80",
  ];

  const row2Images = [
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
  ];

  const row3Images = [
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1422493723432-b7e6e580e0cf?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="bg-white text-white min-h-screen flex flex-col justify-center items-center py-12 overflow-x-hidden" id='slideshow'>
      
      {/* Inline styles for keyframe animations */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }

        .animate-scroll-right {
          display: flex;
          width: max-content;
          animation: scrollRight 30s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-10 px-4">
        {/*  font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent */}
        <h1 className="text-3xl md:text-5xl mb-3 text-black font-extrabold tracking-tight">
          Welcome to ufedora's gallery
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
          Some of my lastest collection
        </p> 
      </div>

      {/* Gallery Container with 3 Rows */}
      <div className="w-full flex flex-col gap-6 py-4">

        {/* Row 1: Scrolling Left */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track animate-scroll-left flex gap-6">
            {/* Original Set */}
            <div className="flex gap-6 shrink-0">
              {row1Images.map((src, index) => (
                <div key={`r1-orig-${index}`} className="w-72 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 shrink-0 group relative">
                  <img src={src} alt={`Row 1 Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-6 shrink-0" aria-hidden="true">
              {row1Images.map((src, index) => (
                <div key={`r1-dup-${index}`} className="w-72 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 shrink-0 group relative">
                  <img src={src} alt={`Row 1 Image Duplicate ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track animate-scroll-right flex gap-6">
            {/* Original Set */}
            <div className="flex gap-6 shrink-0">
              {row2Images.map((src, index) => (
                <div key={`r2-orig-${index}`} className="w-72 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 shrink-0 group relative">
                  <img src={src} alt={`Row 2 Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-6 shrink-0" aria-hidden="true">
              {row2Images.map((src, index) => (
                <div key={`r2-dup-${index}`} className="w-72 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 shrink-0 group relative">
                  <img src={src} alt={`Row 2 Image Duplicate ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Scrolling Left */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track animate-scroll-left flex gap-6">
            {/* Original Set */}
            <div className="flex gap-6 shrink-0">
              {row3Images.map((src, index) => (
                <div key={`r3-orig-${index}`} className="w-72 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 shrink-0 group relative">
                  <img src={src} alt={`Row 3 Image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex gap-6 shrink-0" aria-hidden="true">
              {row3Images.map((src, index) => (
                <div key={`r3-dup-${index}`} className="w-72 h-44 rounded-2xl overflow-hidden shadow-xl border border-slate-800 shrink-0 group relative">
                  <img src={src} alt={`Row 3 Image Duplicate ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}