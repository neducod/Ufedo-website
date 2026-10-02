import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import HeaderPage from './pages/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Process from './pages/Process'
import Slideshow from './pages/Slideshow'
import TestimonialSection from './pages/Testimonial'
import Socials from './pages/Socials'
import Footer from './pages/Footer'

import WhatsAppButton from './components/Whatsapp'

function App() {

  return (
    <>
     <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans antialiased selection:bg-amber-200 selection:text-stone-900">
        <div>
          <HeaderPage/>
          <Hero/>
          <About/>
          <Process/>
          <Slideshow/>
          <TestimonialSection/>
          <Socials/>
          <Footer/>
        </div>
        <WhatsAppButton/>
      </div>

    </>
  )
}

export default App
