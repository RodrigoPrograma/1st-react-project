import { useState } from 'react'
import './App.css'
import { Nav } from './Components/Navbar'
import { Main } from './Components/Body'

function App() {
  
  return (
    <>
    <div>
      <Nav />
      <Main />
    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </>
  )
}

export default App
