import React, { useState } from 'react';
// import { 
//   FaFacebookF, 
//   FaInstagram, 
//   FaLinkedinIn, 
//   FaSpotify 
// } from 'react-icons/fa';

export default function App() {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email.trim()) {
//       setSubscribed(true);
//       setEmail('');
//     }
//   };

  return (
    <div className="min-h-screen bg-[#3e2b24] text-[#f4efe6] flex flex-col justify-between font-serif selection:bg-[#f4efe6] selection:text-[#3e2b24]">
      {/* Google Fonts import for cursive/handwritten styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');
        
        .font-handwriting {
          font-family: 'Caveat', cursive;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Top Section */}
      <div className="relative w-full px-6 pt-12 pb-16 flex flex-col items-center border-b border-[#523c32]">
        
        {/* Top right handwritten note */}
        <div className="absolute top-8 right-8 md:right-16 text-right max-w-[200px] text-sm font-handwriting tracking-wide opacity-90 leading-tight rotate-2">
          stitches in our hands, joy in our hearts, and zero tangled threads in the morning
        </div>

        {/* Hand-drawn style Sewing Machine Icon */}
        <div className="my-10 text-[#f4efe6] transition-transform duration-500 hover:scale-105">
          <svg 
            width="100" 
            height="90" 
            viewBox="0 0 120 100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-95 drop-shadow-sm"
          >
            {/* Wooden Base / Table bottom */}
            <path d="M10 85 C 30 87, 90 87, 110 85" strokeWidth="3" />
            
            {/* Machine Bed / Base plate */}
            <path d="M20 75 L100 75 L100 85 L20 85 Z" fill="#3e2b24" />
            <line x1="25" y1="80" x2="95" y2="80" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Main body pillar & arm */}
            <path d="M30 75 L30 50 C30 35, 45 25, 65 25 L95 25 C100 25, 102 30, 98 35 L90 40 L35 40" />

            {/* Spool pin & thread spool on top */}
            <line x1="75" y1="25" x2="75" y2="16" strokeWidth="2" />
            <rect x="68" y="12" width="14" height="6" rx="1" fill="#3e2b24" />
            {/* Thread curve */}
            <path d="M75 12 C 85 8, 88 15, 85 20" strokeWidth="1.5" strokeDasharray="2 2" />

            {/* Handwheel on the right */}
            <circle cx="103" cy="45" r="8" />
            <circle cx="103" cy="45" r="3" />

            {/* Needle bar & Needle housing on the left */}
            <path d="M35 40 L35 65" />
            {/* Take-up lever */}
            <line x1="30" y1="45" x2="42" y2="45" />

            {/* Needle & Presser foot */}
            <line x1="33" y1="65" x2="33" y2="72" strokeWidth="2" />
            <line x1="35" y1="65" x2="37" y2="72" strokeWidth="1.5" />

            {/* Decorative stitches emerging from under the needle */}
            <path d="M36 76 Q 42 72, 48 76 T 60 76" strokeWidth="1.5" strokeDasharray="4 2" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-serif italic font-normal tracking-wide text-center mb-4">
          we sew like we stitch: <span className="font-normal">creatively</span>
        </h1>

        <p className="text-sm font-serif tracking-widest uppercase opacity-80 mb-10 text-center">
          sign up for 5% off your first order
        </p>

        {/* Sparkle decorative elements */}
        <div className="relative w-full max-w-md flex justify-center items-center">
          <span className="absolute -left-12 -top-2 text-xl font-handwriting opacity-80 animate-pulse">✦</span>
          <span className="absolute -right-12 -bottom-2 text-xl font-handwriting opacity-80 animate-pulse">✦</span>

          {/* Newsletter Form */}
           {/* {subscribed ? (
            <div className="bg-[#f4efe6] text-[#3e2b24] px-8 py-3.5 rounded-none text-center font-serif italic text-sm tracking-wide w-full shadow-md animate-fade-in">
              thank you for joining our sewing circle! check your inbox for 5% off.
            </div>
           ) : (  */}
            {/* <form onSubmit={handleSubmit} className="flex w-full bg-[#f4efe6] text-[#3e2b24] shadow-lg">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e-mail" 
                className="flex-1 bg-transparent px-5 py-3.5 text-sm font-serif italic outline-none placeholder:text-[#3e2b24]/50 text-[#3e2b24]"
              />
              <button 
                type="submit"
                className="px-6 py-3.5 text-xs uppercase tracking-widest font-serif hover:bg-[#e6dfd3] transition-colors cursor-pointer text-[#3e2b24]"
              >
                subscribe
              </button>
            </form> */}
          
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left text-sm font-serif">
        
        {/* Column 1: Studio World */}
        <div className="flex flex-col items-center md:items-start space-y-2.5">
          <h3 className="italic tracking-wider text-xs uppercase opacity-70 mb-2">studio world</h3>
          <a href="#buy-machine" className="italic hover:opacity-100 opacity-80 transition-opacity">buy machine</a>
          <a href="#buy-goods" className="italic hover:opacity-100 opacity-80 transition-opacity">buy goods</a>
          <a href="#our-story" className="italic hover:opacity-100 opacity-80 transition-opacity">our story</a>
          <a href="#our-craft" className="italic hover:opacity-100 opacity-80 transition-opacity">our craft</a>
          <a href="#find-us" className="italic hover:opacity-100 opacity-80 transition-opacity">find us</a>
        </div>

        {/* Column 2: Connect / Socials */}
        <div className="flex flex-col items-center justify-start space-y-4">
          <h3 className="italic tracking-wider text-xs uppercase opacity-70 mb-1">connect</h3>
          <div className="flex items-center space-x-5">
                <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full border border-[#f4efe6]/30 flex items-center justify-center hover:bg-[#f4efe6] hover:text-[#3e2b24] transition-all">
                {/* <FaFacebookF size={13} /> */}
                </a>
                <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full border border-[#f4efe6]/30 flex items-center justify-center hover:bg-[#f4efe6] hover:text-[#3e2b24] transition-all">
                {/* <FaInstagram size={14} /> */}
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-[#f4efe6]/30 flex items-center justify-center hover:bg-[#f4efe6] hover:text-[#3e2b24] transition-all">
                {/* <FaLinkedinIn size={13} /> */}
                </a>
                <a href="#spotify" aria-label="Spotify" className="w-9 h-9 rounded-full border border-[#f4efe6]/30 flex items-center justify-center hover:bg-[#f4efe6] hover:text-[#3e2b24] transition-all">
                {/* <FaSpotify size={14} /> */}
                </a>
          </div>
        </div>

        {/* Column 3: Help */}
        <div className="flex flex-col items-center md:items-end space-y-2.5 text-center md:text-right">
          <h3 className="italic tracking-wider text-xs uppercase opacity-70 mb-2">help</h3>
          <a href="#faq" className="italic hover:opacity-100 opacity-80 transition-opacity">faq</a>
          <a href="#contact" className="italic hover:opacity-100 opacity-80 transition-opacity">contact</a>
          <a href="#shipping" className="italic hover:opacity-100 opacity-80 transition-opacity">shipping & return</a>
          <a href="#wholesale" className="italic hover:opacity-100 opacity-80 transition-opacity">wholesale</a>
          <a href="#referral" className="italic hover:opacity-100 opacity-80 transition-opacity">referral for 10%</a>
        </div>
      </footer>
    </div>
  );
}