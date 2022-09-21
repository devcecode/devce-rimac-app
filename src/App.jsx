import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header/Header'
import Home from './pages/home/Home'
import Plan from './pages/plan/Plan'
import Welcome from './pages/welcome/Welcome'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/plan" element={<Plan />}/>
        <Route path="/bien-venida" element={<Welcome />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App