import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Signin from './components/Signin'
import AuthProvider from './AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/signIn' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App