import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import NotFoundPage from './components/NotFoundPage'
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
import Layout from './layouts/Layout'
import EditCategory from './pages/Dashboard/CategoriesList/EditCategory'

const App = () => {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: '/our-team', element: <Team /> },
    { path: '/login-register', element: <AccLogReg /> },
    { path: '/our-team', element: <Team /> },
    { path: '/movies-shop', element: <MoviesShop /> },
    { path: '/dashboard/overview', element: <Overview /> },

    //!=================MOVIE-START=================
    { path: '/dashboard/movie-list', element: <MoviesList /> },
    { path: '/dashboard/movie-list/add-movie', element: <AddMovies /> },
    //!=================MOVIE-END===================

    //!=================CATEGORY-START================
    { path: '/dashboard/categories-list', element: <Categories /> },
    { path: '/dashboard/categories-list/add-category', element: <AddCategory /> },
    { path: '/dashboard/categories-list/edit-category', element: <EditCategory /> },
    //!=================CATEGORY-END==================

    //!=================BLOG-START==================
    { path: '/dashboard/blog-list', element: <BlogList /> },
    //!=================BLOG-END====================
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<Layout>{element}</Layout>}
          />
        ))}
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App