import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

import prod1 from '../pages/Movies/images/product-1-300x425.jpg'

const MovieCard = () => {
  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
      <div className="movie-card">
        <img src={prod1} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className='movie-ctg'>Drama</span>
          <h5 className="card-title">Black Bird</h5>
          <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
          <span className="card-price">$12</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard