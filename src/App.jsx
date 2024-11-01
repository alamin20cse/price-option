import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import PriceOptions from './Component/PriceOptions/PriceOptions'

import MyLinechart from './Component/LineCharts/MyLinechart'

function App() {


  return (
    <>
      

<div className='bg-lime-200'>
<Navbar ></Navbar>
</div>


<PriceOptions></PriceOptions>

<MyLinechart></MyLinechart>

      <h1 className='text-3xl'>Vite + React</h1>
      

     
      
    </>
  )
}

export default App
