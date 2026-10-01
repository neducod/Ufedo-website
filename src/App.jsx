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
      <div>
        <HeaderPage/>
        <Hero/>
        <About/>
      </div>


    </>
  )
}

export default App
