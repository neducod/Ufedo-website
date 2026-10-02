import React, { useState } from 'react';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('DRESSES');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className=" text-stone-100 font-sans flex flex-col selection:bg-amber-900 selection:text-white">
      {}
      <header className="relative w-full h-[360px] md:h-[420px] overflow-hidden flex flex-col justify-between border-b border-stone-800/60 shadow-2xl">
        {/* Luxury Draped Silk / Velvet Background with lighting gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a1c1d]/90 via-[#331112]/95 to-[#1a0808] z-0">
          
        <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-r from-transparent via-amber-200/10 to-transparent skew-x-12 blur-2xl pointer-events-none"></div>
        <div className="absolute top-0 right-1/3 w-80 h-full bg-gradient-to-r from-transparent via-rose-300/10 to-transparent -skew-x-12 blur-3xl pointer-events-none"></div>

          <div className="absolute inset-0 flex justify-around opacity-25 pointer-events-none">
            <div className="w-px h-full bg-gradient-to-b from-black/60 via-transparent to-black/80 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/85 via-transparent to-black/60 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/50 via-transparent to-black/75 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/90 via-transparent to-black/50 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/60 via-transparent to-black/90 shadow-2xl"></div>
          </div>
        </div>

        

        {/* Main Header Navigation Bar */}
        <div className="relative z-20 max-w-7xl w-full mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Left Side: Menu & Search */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center space-x-2 text-stone-200 hover:text-white transition-all group cursor-pointer"
              aria-label="Open Menu"
            >
              <span className="text-xs font-semibold tracking-[0.25em]">MENU</span>
            </button>

            <span className="text-stone-600 font-light">|</span>

            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 text-stone-200 hover:text-white transition-all group cursor-pointer"
              aria-label="Search"
            >
              <span className="text-xs font-semibold tracking-[0.25em] hidden sm:inline">SEARCH</span>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center cursor-pointer">
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] font-normal">
              house <span className="text-stone-300 text-2xl md:text-3xl font-light italic px-0.5">of</span> cb
            </h1>
            <p className="text-[9px] md:text-[10px] tracking-[0.45em] text-stone-300 uppercase mt-1.5 font-medium drop-shadow-md">
              Designed in London
            </p>
          </div>

          {/* Right Side: Sign In, Wishlist, Bag */}
          <div className="flex items-center space-x-4 md:space-x-6 text-xs tracking-[0.2em]">
            <a href="#signin" className="hidden lg:flex items-center space-x-2 text-stone-200 hover:text-white transition-colors group">
              <span className="font-semibold">SIGN IN</span>
            </a>

            <span className="hidden lg:inline text-stone-600 font-light">|</span>

            <a href="#wishlist" className="flex items-center space-x-2 text-stone-200 hover:text-white transition-colors group">
              <span className="font-semibold hidden sm:inline">WISHLIST</span>
              <span className="bg-amber-900/80 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">2</span>
            </a>

            <span className="text-stone-600 font-light">|</span>

            <button 
              onClick={() => console.log("Bag clicked")}
              className="flex items-center space-x-2 text-stone-200 hover:text-white transition-colors group cursor-pointer"
            >
              <span className="font-semibold hidden sm:inline">BAG</span>
              <span className="bg-white text-stone-950 rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">0</span>
            </button>
          </div>
        </div>
































      </header>
    </div>
  );
}