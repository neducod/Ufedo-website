import React from 'react';

export default function SewingTestimonialSection() {
  const reviews = [
    {
      text: "“Finding Ufedora is so rare. I showed her a picture of a blouse I liked on Instagram, and she replicated the exact style to the last detail. No story, no delays, and the fit was 10/10.",
      author: "Tola L."
    },
    {
      text: "“I brought three yards of Senator material to sew for my cousin's introduction, and he delivered in less than five days. The neck design was sharp, the trousers fit perfectly without needing any adjustments, and the finishing inside was super neat. He is officially my go-to guy in Lagos\"",
      author: "Ben J."
    },
    {
      text: "“Very appreciative of how smooth the feed system is. The stitches are flawless. The machine is great because it handles heavy denim and delicate silk effortlessly...\"",
      author: "Chloe T."
    }
  ];

  return (
    <div className=" min-h-screen flex items-center justify-center p-4">
      {/* Main Container Card bg-slate-950 */}
      <div className="relative w-full max-w-5xl bg-[#f0f0f2] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 md:p-14 text-slate-900">
        
        {/* Right Side Image Area (Sewing Machine Mockup / Photo) */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none hidden md:flex items-center justify-end">
          <div className="relative w-[580px] h-[360px] translate-x-12 translate-y-4">
            {/* Using a clean product image of a modern computerized sewing machine */}
            <img 
              src="https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1000&q=80" 
              alt="Modern Sewing Machine" 
              className="w-full h-full object-contain drop-shadow-2xl opacity-90"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-lg mb-24 md:mb-32">
          {/* <div className="flex items-center gap-2 mb-4">
            <div className="flex text-amber-500 text-sm">
              {"★".repeat(5)}
            </div>
            <span className="font-semibold text-sm">5.0</span>
            <span className="text-slate-500 text-sm">(3)</span>
          </div>  */}

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
            Tailor that sew beautiful creations.
          </h2>

        </div>

        {/* Bottom Review Cards Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-xl border border-slate-200/60 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 md:p-7 flex flex-col justify-between gap-6">
              <div>
                {/* Card Star Rating */}
                <div className="flex text-amber-500 text-xs mb-3">
                  {"★".repeat(5)}
                </div>
                {/* Review Snippet */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100">
                <span className="text-slate-500 font-medium">{review.author}</span>
                {/* <a href="#read-all" className="font-semibold text-slate-900 hover:underline">
                  Read all
                </a> */}
              </div> 
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}