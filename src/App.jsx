import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

<Navbar></Navbar>

      <h1 className='text-3xl'>Vite + React</h1>
      <h1>alamin</h1>


     
      
    </>
  )
}

export default App
