import React from 'react';

export default function TestimonialSection() {
  const reviews = [
    {
      text: "“It's been a complete life changer. I basically only unblock my apps for about 30 minutes a day now. At first I was blocking/...",
      author: "Tom Grimshaw"
    },
    {
      text: "“it has changed my day-to-day home office life drastically. i highly recommend it to anyone who's working from home...",
      author: "vlad"
    },
    {
      text: "“Very appreciative of how good the build quality is. The disc is beautiful. The app is great because I can set it up in a way that wor...",
      author: "Everett"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center p-4">
      {/* Main Container Card */}
      <div className="relative w-full max-w-5xl bg-[#f2f2f2] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 md:p-14 text-slate-900">
        
        {/* Background / Right Side Image (Simulated Vinyl/Disc visual) */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute -right-20 -top-20 w-[600px] h-[600px] rounded-full overflow-hidden shadow-2xl border-[16px] border-black/85 bg-black rotate-12">
            {/* Vinyl record grooves & center label effect */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-900 relative flex items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-neutral-700/50"></div>
              <div className="absolute inset-16 rounded-full border border-neutral-700/40"></div>
              <div className="absolute inset-24 rounded-full border border-neutral-700/30"></div>
              <div className="absolute inset-32 rounded-full border border-neutral-700/20"></div>
              <div className="w-32 h-32 rounded-full bg-neutral-950 border-4 border-neutral-800 flex items-center justify-center shadow-inner">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Content Area */}
        <div className="relative z-10 max-w-lg mb-20 md:mb-28">
          {/* Star Rating & Score */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-amber-400 text-sm">
              {"★".repeat(5)}
            </div>
            <span className="font-semibold text-sm">5.0</span>
            <span className="text-slate-500 text-sm">(26)</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6">
            People put their phone down.
          </h2>

          {/* See all reviews button */}
          <button className="bg-white hover:bg-slate-100 text-slate-900 font-medium px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm transition-all">
            See all reviews
          </button>
        </div>

        {/* Bottom Review Cards Container */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 bg-white rounded-2xl shadow-xl border border-slate-200/60 divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 md:p-7 flex flex-col justify-between gap-6">
              <div>
                {/* Card Star Rating */}
                <div className="flex text-amber-400 text-xs mb-3">
                  {"★".repeat(5)}
                </div>
                {/* Review Snippet */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>

              {/* Footer of Card */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-100">
                <span className="text-slate-500 font-medium">{review.author}</span>
                <a href="#read-all" className="font-semibold text-slate-900 hover:underline">
                  Read all
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}