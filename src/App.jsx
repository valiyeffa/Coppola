import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/HomePage/Home'
import NotFoundPage from './components/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App