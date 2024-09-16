import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Result from './components/Result'
import Quiz from './components/Quiz'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/Quiz" element={<Quiz/>} />
      <Route path="/Result" element={<Result/>} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
