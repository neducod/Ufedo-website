import React, { useState, useEffect } from 'react';




const navItems = [
    { label: "", href: "#hero", id: "hero" },
    { label: "Collection", href: "#collections", id: "collection" },
    { label: "Campaign", href: "#campaign", id: "campaign" },
    { label: "Editorial", href: "#editorial", id: "editorial" },
    { label: "Runway", href: "#runway", id: "runway" },
    { label: "Story", href: "#story", id: "story" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];


































<div>
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
        </div>