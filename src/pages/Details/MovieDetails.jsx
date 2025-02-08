import React from 'react'
import image from '../../../src/pages/Movies/images/product-13.jpg'

const MovieDetails = () => {
  return (
    <div className='movie-detail'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="movie-detail-body">
              <div className="left-side-image">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="movie-detail-body">
              <div className="right-side-about">
                <div className="right-top-title">
                  
                </div>
                <div className="right-center">

                </div>
                <div className="right-bottom">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails