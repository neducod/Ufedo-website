import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import HeaderPage from './pages/Header'
import Hero from './pages/Hero'
import About from './pages/About'

function App() {

  return (
    <>
     <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans antialiased selection:bg-amber-200 selection:text-stone-900">
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
        <div>
          <HeaderPage/>
          <Hero/>
          <About/>
        </div>
      </div>

    </>
  )
}

export default App
