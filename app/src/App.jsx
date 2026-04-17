import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Properties from './pages/Properties';
import ContactForm from './components/ContactForm'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/contact' element={<ContactForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
