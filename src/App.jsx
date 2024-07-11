import React from 'react'
import './App.css'
import Headshot from './assets/components/Headshot'
import Info from './assets/components/Info'
import Footer from './assets/components/Footer'

function App() {
  return (
    <div className = 'app--container'>
      <Headshot />
      <Info />
      <Footer />
    </div>
  )
}

export default App
