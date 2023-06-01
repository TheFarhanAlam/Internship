import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from './Components/Form'
import Home from './Components/Home'
import Individual from './Components/Individual'
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/bookTicket' element={<Form/>}/>
      <Route path='/movie/:name' element={<Individual/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
