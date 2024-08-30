import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Notes from './pages/Notes.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/notes' element={<Notes />}/>
    </Routes>
  );
}

export default App
