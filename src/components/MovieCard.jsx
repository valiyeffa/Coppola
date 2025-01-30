import React from 'react'
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";

const MovieCard = ({ image, category, title, price, discounted, isProductNew }) => {
  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
      <div className="movie-card">
        <div className="card-img">
          <img src={image} className="card-img-top" alt="..." />
          <div className="new-sale-mark">
            {price == discounted ?
              isProductNew == true ?
                <span className='new-mark'>
                  <span className="new-mark-text">New</span>
                </span> :
                <span></span> :
              <span className='sale-mark'>
                <span className="sale-mark-text">Sale</span>
              </span>
            }
          </div>
          <div className="btns-shop">
            <button className="btn fav-btn">
              <FaRegHeart className='empty' />
              <FaHeart className='fill' />
              <span>Add to WishList</span>
            </button>

            <button className="btn btn-shop btn-outline-light">Add to Cart</button>
          </div>
        </div>
        <div className="card-body">
          <span className='movie-ctg'>{category}</span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
          {price == discounted ?
            <span className="card-price">${price}</span> :
            <>
              <del className="card-ex-price">${discounted}</del>
              <span className="card-price">${price}</span>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default MovieCard