import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Brands from './pages/Brands/Brands'
import SingleBrand from './pages/Brands/Brand/Brand'

const App = () => {
  return (
    <div className=' bg-slate-200'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brands" element={<Brands/>}/>
        <Route path="/brands/:id" element={<SingleBrand/>}/>
      </Routes>
    </div>
  )
}

export default App
