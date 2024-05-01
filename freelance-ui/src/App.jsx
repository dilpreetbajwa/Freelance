// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
//import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      
          <Navbar />
      </BrowserRouter>
     
    </div>
  )
}

export default App
