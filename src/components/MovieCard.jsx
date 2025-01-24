import React from 'react'
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";

import prod1 from '../pages/Movies/images/product-1-300x425.jpg'

const MovieCard = () => {
  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
      <div className="movie-card">
        <div className="card-img">
          <img src={prod1} className="card-img-top" alt="..." />
          <div className="btns-fav">
            <button className="btn fav-btn">
              <FaRegHeart className='empty' />
              <FaHeart className='fill' />
            </button>
          </div>
          <div className="btns-shop">
            <button className="btn btn-shop btn-outline-light">Add to Cart</button>
          </div>
        </div>
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