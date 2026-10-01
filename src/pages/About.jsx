import React, { useState } from 'react';
// import { 
//   Scissors, 
//   Sparkles, 
//   Ruler, 
//   Heart, 
//   Award, 
//   Shirt, 
//   CheckCircle2, 
//   ArrowRight,
//   User,
//   Camera
// } from 'lucide-react';

export default function AtelierShowcase() {
  const [photoType, setPhotoType] = useState('sewing'); // 'sewing' | 'portrait'

  const stats = [
    {
      id: 1,
      number: "10+",
      label: "Years Experience",
      sublabel: "Mastery of bespoke tailoring & design",
    //   icon: <Award className="w-6 h-6 text-amber-700" />
    },
    {
      id: 2,
      number: "200+",
      label: "Pieces Created",
      sublabel: "One-of-a-kind hand-sewn garments",
    //   icon: <Shirt className="w-6 h-6 text-amber-700" />
    },
    {
      id: 3,
      number: "Custom-Fit",
      label: "Designs",
      sublabel: "Tailored precisely to your measurements",
    //   icon: <Ruler className="w-6 h-6 text-amber-700" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans antialiased selection:bg-amber-200 selection:text-stone-900">
      
      {/* Navigation Header */}
      <header className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-stone-900 text-amber-100 rounded-full">
              {/* <Scissors className="w-5 h-5" /> */}
            </div>
            <span className="font-serif text-xl tracking-wide text-stone-900 font-semibold">
              Atelier & Co.
            </span>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 text-sm font-medium hover:bg-amber-900 transition-colors shadow-sm"
          >
            Request a Fitting
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-16">
        
        {/* Split Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: Image Frame with Toggle */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[420px] md:min-h-[540px] rounded-2xl overflow-hidden shadow-2xl group border-4 border-white bg-stone-200">
              
              {/* Image 1: Sewing */}
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200"
                alt="Aunt sewing garment at workspace"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  photoType === 'sewing' ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />

              {/* Image 2: Portrait */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200"
                alt="Portrait of tailor"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  photoType === 'portrait' ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Image Tag / Switcher Bar */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900/70 backdrop-blur-md text-stone-100 text-xs font-medium uppercase tracking-widest border border-white/20">
                  {/* <Sparkles className="w-3.5 h-3.5 text-amber-300" /> */}
                  {photoType === 'sewing' ? 'In the Studio' : 'Craftswoman Portrait'}
                </span>

                {/* Photo Toggle Controls */}
                <div className="flex bg-stone-900/80 backdrop-blur-md p-1 rounded-full border border-white/20">
                  <button
                    onClick={() => setPhotoType('sewing')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      photoType === 'sewing'
                        ? 'bg-amber-100 text-stone-900 shadow-sm'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {/* <Camera className="w-3.5 h-3.5" /> */}
                    Sewing
                  </button>
                  <button
                    onClick={() => setPhotoType('portrait')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      photoType === 'portrait'
                        ? 'bg-amber-100 text-stone-900 shadow-sm'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    {/* <User className="w-3.5 h-3.5" /> */}
                    Portrait
                  </button>
                </div>
              </div>

              {/* Bottom Caption inside Photo */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p className="text-xs uppercase tracking-widest text-amber-200 font-medium mb-1">
                  Handcrafted Excellence
                </p>
                <p className="font-serif text-lg md:text-xl font-light italic">
                  "Precision in every stitch, soul in every seam."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Narrative & Story Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 py-2">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-800 font-medium text-sm tracking-widest uppercase">
                <span className="w-8 h-[1px] bg-amber-800"></span>
                The Atelier Story
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-[1.15] tracking-tight">
                Crafted with intention.
              </h1>
            </div>

            <div className="relative pl-6 border-l-2 border-amber-700/40 space-y-4">
              <p className="text-stone-700 text-lg sm:text-xl leading-relaxed font-light">
                Every garment is carefully designed, cut and sewn with attention to fit, detail and individuality.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                From initial sketch to final fitting, we honor traditional couture methods while shaping contemporary silhouettes designed to be cherished for a lifetime.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-sm">
                {/* <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" /> */}
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Bespoke Fitting</h4>
                  <p className="text-xs text-stone-500">Tailored precisely to your body contour</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-sm">
                {/* <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" /> */}
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Artisanal Craft</h4>
                  <p className="text-xs text-stone-500">Hand-finished seams & luxury fabrics</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-900 text-stone-50 hover:bg-amber-900 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg group"
              >
                <span>Book Custom Fitting</span>
                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-stone-800 border border-stone-300 hover:bg-stone-100 transition-all duration-300 font-medium text-sm"
              >
                View Collection
              </a>
            </div>

          </div>

        </section>

        {/* 3 STATS SECTION */}
        <section className="pt-8 border-t border-stone-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-serif text-2xl text-stone-900 font-normal">Our Craft in Numbers</h2>
            <p className="text-stone-500 text-sm mt-1">A decade dedicated to perfection, precision, and personal expression.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Background Subtle Accent Glow */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-100/50 rounded-full blur-2xl group-hover:bg-amber-200/60 transition-colors" />

                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/60 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                    Stat 0{stat.id}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-stone-800">
                    {stat.label}
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed pt-1">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decorative Quote / Signature Footer Banner */}
        <section className="rounded-2xl bg-stone-900 text-stone-100 p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            {/* <Heart className="w-8 h-8 text-amber-400 mx-auto opacity-80" /> */}
            <h3 className="font-serif text-2xl sm:text-3xl font-light italic">
              "To wear a garment made exclusively for you is to wear a piece of art that speaks your name."
            </h3>
            <p className="text-xs tracking-widest uppercase text-stone-400 font-medium pt-2">
              — Master Tailor & Founder
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 text-center text-xs text-stone-500">
        <p>© {new Date().getFullYear()} Atelier & Co. All rights reserved. Handcrafted with intention.</p>
      </footer>

    </div>
  );
}