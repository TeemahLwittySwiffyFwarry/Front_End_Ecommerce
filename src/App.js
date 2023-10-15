import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import About from "./Pages/About"
import Notfound from "./Pages/Notfound"
import Signin from "./Pages/Signin"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/signin' element={<Signin/>}/>

      </Routes>
      <ToastContainer
      position="top-center"/>
    
    </BrowserRouter>
  )
}

export default App