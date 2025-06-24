import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";

// import pages and components
import HomePage from './pages/homePage.jsx';
import ProductDetails from './pages/productDetails.jsx';



function App() {
  
  return (
    // <ProductCardComponet />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
  )
}

export default App
