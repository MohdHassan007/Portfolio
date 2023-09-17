import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'






function App() {
  

  return (
    <>
    
      <NavBar/>
      <SocialLinks/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
