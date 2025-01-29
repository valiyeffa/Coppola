import React from 'react'
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";

const MovieCard = ({ image, category, title, price }) => {
  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
      <div className="movie-card">
        <div className="card-img">
          <img src={image} className="card-img-top" alt="..." />
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
          <span className='movie-ctg'>{category}</span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
          <span className="card-price">${price}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard