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
import MoviesShop from './pages/Movies/MoviesShop'
import MoviesList from './pages/Dashboard/MoviesProducts/MoviesList'
import BlogList from './pages/Dashboard/Blog/BlogList'
import Categories from './pages/Dashboard/CategoriesList/Categories'
import AddCategory from './pages/Dashboard/CategoriesList/AddCategory'
import Overview from './pages/Dashboard/Overview'
import AddMovies from './pages/Dashboard/MoviesProducts/AddMovies'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about-us' element={<AboutUs />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/our-team' element={<Team />}></Route>
        <Route path='/login-register' element={<AccLogReg />}></Route>
        <Route path='/movies-shop' element={<MoviesShop />}></Route>

        <Route path='/dashboard/overview' element={<Overview />}></Route>

        //!=================MOVIE-START=================
        <Route path='/dashboard/movie-list' element={<MoviesList />}></Route>
        <Route path='/dashboard/movie-list/add-movie' element={<AddMovies />}></Route>
        //!=================MOVIE-END===================


        //!=================CATEGORY-START================
        <Route path='/dashboard/categories-list' element={<Categories />}></Route>
        <Route path='/dashboard/categories-list/add-category' element={<AddCategory />}></Route>
        //!=================CATEGORY-END==================

        <Route path='/blog-list' element={<BlogList />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App