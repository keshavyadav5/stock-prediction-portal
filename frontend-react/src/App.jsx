import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Signin from './components/Signin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signIn' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App