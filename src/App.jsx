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
import AddBlogs from './pages/Dashboard/Blog/AddBlogs'
import Categories from './pages/Dashboard/CategoriesList/Categories'
import AddCategory from './pages/Dashboard/CategoriesList/AddCategory'
import Overview from './pages/Dashboard/Overview'
import AddMovies from './pages/Dashboard/MoviesProducts/AddMovies'
import Layout from './layouts/Layout'
import EditCategory from './pages/Dashboard/CategoriesList/EditCategory'
import Blog from './pages/BlogPage/Blog'
import FaqAndHelp from './pages/FAQ/FaqAndHelp'
import Basket from './pages/Basket/Basket'
import EditBlog from './pages/Dashboard/Blog/EditBlog'
import EditMovies from './pages/Dashboard/MoviesProducts/EditMovies'
import Wishlist from './pages/Wishlist/Wishlist'
import ProtectedRoute from './components/ProtectedRoute'
import MovieDetails from './pages/Details/MovieDetails'
import BlogDetails from './pages/Details/BlogDetails'

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact-us", element: <ContactUs /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:blogDetSlug", element: <BlogDetails /> },
    { path: '/faq', element: <FaqAndHelp /> },
    { path: '/our-team', element: <Team /> },
    { path: '/basket', element: <Basket /> },
    { path: '/wishlist', element: <Wishlist /> },
    { path: '/movies-shop', element: <MoviesShop /> },
    { path: '/movies-shop/:movieDetSlug', element: <MovieDetails /> },
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

        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            
            <Route path='/dashboard/overview' element={<Overview />} />

            //!=================MOVIE-START=================
            <Route path='/dashboard/movie-list' element={<MoviesList />} />
            <Route path='/dashboard/movie-list/add-movie' element={<AddMovies />} />
            <Route path='/dashboard/movie-list/edit-movie/:movieSlug' element={<EditMovies />} />
            //!=================MOVIE-END===================

            //!=================CATEGORY-START================
            <Route path='/dashboard/categories-list' element={<Categories />} />
            <Route path='/dashboard/categories-list/add-category' element={<AddCategory />} />
            <Route path='/dashboard/categories-list/edit-category/:slug' element={<EditCategory />} />
            //!=================CATEGORY-END==================

            //!=================BLOG-START==================
            <Route path='/dashboard/blog-list' element={<BlogList />} />
            <Route path='/dashboard/blog-list/add-blogs' element={<AddBlogs />} />
            <Route path='/dashboard/blog-list/edit-blog/:blogSlug' element={<EditBlog />} />
            //!=================BLOG-END====================
          </Route>
        </Route>

        <Route path='/login-register' element={<AccLogReg />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
