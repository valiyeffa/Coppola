import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/HomePage/Home'
import NotFoundPage from './components/NotFoundPage'
import Footer from './layouts/Footer'
import AboutUs from './pages/AboutPage/AboutUs'
import ContactUs from './pages/ContactPage/ContactUs'
import Team from './pages/HomePage/Team'
import AccLogReg from './pages/Auth/AccLogReg'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/our-team' element={<Team/>}></Route>
        <Route path='/login-register' element={<AccLogReg/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App