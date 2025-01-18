import React from 'react'
import { Link } from 'react-router-dom'
import MoviesForm from '../../../components/MoviesForm'

const AddMovies = () => {
  return (
    <div className='dashboard'>
      <div className="categories-list my-4">
        <div className="ctg-list-title text-center">
          <h1>Add Movies</h1>
        </div>

        <div className="ctg-add-body my-5 col-5">
          <MoviesForm text1={'Movie Title'} text2={'Image'} text3={'Description'} text4={'Price'} text5={'Category'} />
          <Link to={'/dashboard/movie-list'} className='btn btn-outline-dark btn-shop my-1'>Back To Page</Link>
        </div>
      </div>
    </div>
  )
}

export default AddMovies