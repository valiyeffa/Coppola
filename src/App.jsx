import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotPage from './components/NotFoundPage'
import Home from './pages/HomePage/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<NotPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App