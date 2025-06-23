import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";

// import pages and components
import { ProductCardComponet } from './components/productCardComponent';
import HomePage from './pages/homePage';
import ProductDets from './pages/prouctDets';



function App() {
  
  return (
    // <ProductCardComponet />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/product/discription" element={<ProductDets />} />
    </Routes>
  )
}

export default App
