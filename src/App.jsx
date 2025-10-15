import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import User from './pages/User'
import Checkout from './pages/Checkout'
import ProtectedRoute from './components/ProtectedRoute'



function App() {
  
  return (
    <>
   
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      
    <Navbar />

    
{/*Page Content */}
<main className="flex-1 container mx-auto px-4 py-6">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/user" element={<User />} />

     {/* Protected Routes */}
 
    
     <Route
  path="/cart"
  element={
    <ProtectedRoute>
     <Cart />
    </ProtectedRoute>
  }
  />
  <Route
  path="/checkout"
  element={
    <ProtectedRoute>
       <Checkout />
    </ProtectedRoute>
  }
  />
  </Routes>

 
</main>
    

    <Footer />
    </div>
   
    
    </>

  )
}

export default App
