import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/HomePage/Home'
import NotFoundPage from './components/NotFoundPage'
import Footer from './layouts/Footer'
import AboutUs from './pages/AboutPage/AboutUs'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        {/* <Route path='/blog' element={<AboutUs/>}></Route> */}
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App