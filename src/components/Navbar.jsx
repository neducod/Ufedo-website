import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

const NAVIGATION_ITEMS = [
  { name: 'NEW', hasSub: true },
  { name: 'CLOTHING', hasSub: true },
  { name: 'DRESSES', hasSub: true },
  { name: 'CORSETS', hasSub: true },
  { name: 'SHOES', hasSub: true },
  { name: 'ACCESSORIES', hasSub: false },
  { name: 'SALE', hasSub: false, highlight: true }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('DRESSES');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans flex flex-col selection:bg-amber-900 selection:text-white">
      {}
      <header className="relative w-full h-[360px] md:h-[420px] overflow-hidden flex flex-col justify-between border-b border-stone-800/60 shadow-2xl">
        {/* Luxury Draped Silk / Velvet Background with lighting gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a1c1d]/90 via-[#331112]/95 to-[#1a0808] z-0">
          {/* Vertical velvet curtain folds simulation */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/30 via-transparent to-black/85 pointer-events-none"></div>
          
          {/* Dynamic soft light sheen */}
          <div className="absolute top-0 left-1/4 w-96 h-full bg-gradient-to-r from-transparent via-amber-200/10 to-transparent skew-x-12 blur-2xl pointer-events-none"></div>
          <div className="absolute top-0 right-1/3 w-80 h-full bg-gradient-to-r from-transparent via-rose-300/10 to-transparent -skew-x-12 blur-3xl pointer-events-none"></div>

          {/* Vertical shadow lines representing velvet drapes */}
          <div className="absolute inset-0 flex justify-around opacity-25 pointer-events-none">
            <div className="w-px h-full bg-gradient-to-b from-black/60 via-transparent to-black/80 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/85 via-transparent to-black/60 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/50 via-transparent to-black/75 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/90 via-transparent to-black/50 shadow-2xl"></div>
            <div className="w-px h-full bg-gradient-to-b from-black/60 via-transparent to-black/90 shadow-2xl"></div>
          </div>
        </div>

        {/* Top Announcement Bar */}
        <div className="relative z-20 bg-black/40 backdrop-blur-md text-stone-300 text-[11px] tracking-[0.25em] py-2 text-center border-b border-white/5 uppercase font-medium">
          Worldwide Express Shipping & Complimentary London Returns
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
              <Menu className="w-4 h-4 text-stone-300 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold tracking-[0.25em]">MENU</span>
            </button>

            <span className="text-stone-600 font-light">|</span>

            <button 
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center space-x-2 text-stone-200 hover:text-white transition-all group cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-stone-300 group-hover:scale-110 transition-transform" />
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
              <User className="w-4 h-4 text-stone-300 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">SIGN IN</span>
            </a>

            <span className="hidden lg:inline text-stone-600 font-light">|</span>

            <a href="#wishlist" className="flex items-center space-x-2 text-stone-200 hover:text-white transition-colors group">
              <Heart className="w-4 h-4 text-stone-300 group-hover:scale-110 transition-transform" />
              <span className="font-semibold hidden sm:inline">WISHLIST</span>
              <span className="bg-amber-900/80 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">2</span>
            </a>

            <span className="text-stone-600 font-light">|</span>

            <button 
              onClick={() => console.log("Bag clicked")}
              className="flex items-center space-x-2 text-stone-200 hover:text-white transition-colors group cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-stone-300 group-hover:scale-110 transition-transform" />
              <span className="font-semibold hidden sm:inline">BAG</span>
              <span className="bg-white text-stone-950 rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold">0</span>
            </button>
          </div>
        </div>

        {/* Bottom Category Tabs */}
        <nav className="relative z-20 max-w-5xl mx-auto hidden md:flex items-center justify-center space-x-8 pb-4">
          {NAVIGATION_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`text-xs tracking-[0.25em] font-medium transition-all pb-1 border-b-2 cursor-pointer ${
                activeTab === item.name 
                  ? 'border-white text-white font-semibold' 
                  : item.highlight 
                    ? 'border-transparent text-rose-300 hover:text-rose-200' 
                    : 'border-transparent text-stone-300 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </header>

      {}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="relative w-80 md:w-96 bg-stone-900 border-r border-stone-800 h-full p-8 flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <span className="font-serif text-xl tracking-wider text-white">Menu</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-stone-400 hover:text-white p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="mt-8 space-y-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.name}>
                    <a 
                      href={`#${item.name.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between text-sm tracking-[0.2em] font-medium text-stone-200 hover:text-amber-200 transition-colors"
                    >
                      <span>{item.name}</span>
                      {item.hasSub && <ChevronDown className="w-4 h-4 -rotate-90 text-stone-500" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6 border-t border-stone-800 text-xs tracking-widest text-stone-400 flex flex-col space-y-3">
              <a href="#signin" className="hover:text-white transition-colors">Sign In / Register</a>
              <a href="#help" className="hover:text-white transition-colors">Customer Care & Returns</a>
              <span className="text-stone-600 pt-2">© 2026 HOUSE OF CB LONDON</span>
            </div>
          </div>
        </div>
      )}

      {}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsSearchOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 p-6 md:p-8 rounded-xl shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center space-x-3 w-full mr-4">
                <Search className="w-5 h-5 text-stone-400" />
                <input 
                  type="text"
                  placeholder="Search corsets, dresses, silk gowns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-stone-100 placeholder-stone-500 text-lg tracking-wide focus:outline-none"
                />
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-stone-400 hover:text-white p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-400 font-semibold mb-3">Trending Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Corset Dresses', 'Silk Midi Gowns', 'Satin Sets', 'Bridal Collection', 'Blazers'].map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="text-xs tracking-wider bg-stone-800/80 hover:bg-stone-700 text-stone-300 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {}
      

      {}
      
    </div>
  );
}