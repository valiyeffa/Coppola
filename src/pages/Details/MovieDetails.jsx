import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom';
import { useGetMoviesDetailQuery, useGetMoviesQuery } from '../../tools/services/moviesApi';
import Preloader from '../../components/Preloader';
import { environment } from '../../environments/environment';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import { useWishlist } from 'react-use-wishlist';
import userImg from '../../../src/assets/images/userImage.png'
import MovieCard from '../../components/MovieCard';

const MovieDetails = () => {
  const location = useLocation();
  const movieID = location.state?.movieID;
  const { data: movieDetailID, isLoading } = useGetMoviesDetailQuery(movieID);
  const { addItem, getItem } = useCart();
  const { addWishlistItem, getWishlistItem, removeWishlistItem } = useWishlist();
  const { data: movieData = [] } = useGetMoviesQuery({ category: '' });
  const [rel, setReal] = useState([]);
  const moviDataLength = movieData?.data?.length;

  useEffect(() => {
      const relatedMovies = [];
      for (let i = 0; i < 4; i++) {
        const relatedMovie = Math.round(Math.random() * moviDataLength);
        const moviesRelated = movieData.data && movieData.data[relatedMovie];
        relatedMovies.push(moviesRelated);
      }
      setReal(relatedMovies);
  }, [moviDataLength, movieData.data]);

  const handleAddToCart = (product) => {
    const cartItem = getItem(product._id);
    const quantity = cartItem ? cartItem.quantity : 0;

    if (cartItem && quantity >= 5) {
      Swal.fire({
        title: "Limit Exceeded",
        text: "You can't add more than 5 of the same movie to the cart!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
    } else {
      addItem({
        ...product,
        id: product._id,
        price: product.discountedPrice || product.price,
        originalPrice: product.price,
        isProductNew: product.isProductNew
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Movie added to basket!",
        showConfirmButton: false,
        timer: 850
      });
    }
  };

  const handleAddToWishlist = (product) => {
    if (getWishlistItem(movieDetailID?._id)) {
      removeWishlistItem(movieDetailID?._id);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Movie deleted from wishlist!",
        showConfirmButton: false,
        timer: 850
      });
    } else {
      addWishlistItem({
        ...product,
        id: product._id,
        price: product.discountedPrice || product.price,
        originalPrice: product.price,
        isProductNew: product.isProductNew
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Movie added to wishlist!",
        showConfirmButton: false,
        timer: 850
      });
    }
  };

  return (
    <div className='movie-detail'>
      {isLoading ? <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center my-5'><Preloader /></div> :
        <div className="container-fluid">
          <div className="page-title">
            <p>Movies / Shop / {movieDetailID?.category?.name} / {movieDetailID?.title}</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="movie-detail-body">
                <div className="left-side-image card-img">
                  <img src={`${environment.baseUrl}${movieDetailID?.image?.url}`} alt={movieDetailID?.title} />
                  <div className="new-sale-mark">
                    {movieDetailID?.price == movieDetailID?.discountedPrice ?
                      movieDetailID?.isProductNew == true ?
                        <span className='new-mark'>
                          <span className="new-mark-text">New</span>
                        </span> :
                        <span></span> :
                      <span className='sale-mark'>
                        <span className="sale-mark-text">Sale</span>
                      </span>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="movie-detail-body">
                <div className="right-side-about">
                  <div className="right-top-title">
                    <h1>{movieDetailID?.title}</h1>
                    {movieDetailID?.price == movieDetailID?.discountedPrice ?
                      <span className="price">${movieDetailID?.price == movieDetailID?.discountedPrice ? movieDetailID?.price : movieDetailID?.discountedPrice}</span> :
                      <>
                        <del className="card-ex-price">${movieDetailID?.price} </del>
                        <span className="price">${movieDetailID?.discountedPrice}</span>
                      </>
                    }
                    <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                  </div>
                  <div className="right-center">
                    <p>{movieDetailID?.description}</p>

                    <div className="right-center_bottom d-flex gap-3">
                      <Link to='/movies-shop' onClick={() => window.scrollTo(0, 0)} className='btn back-pg'>Back To Page</Link>
                      <button className='add-cart btn' onClick={() => { handleAddToCart(movieDetailID) }}>Add To Cart</button>
                      <button onClick={() => {
                        handleAddToWishlist(movieDetailID);
                      }} className="btn fav-btn">
                        {getWishlistItem(movieDetailID?._id) ?
                          <>
                            <FaHeart className='fill' />
                            <span>Added</span>
                          </>
                          :
                          <div className='empty-hover'>
                            <FaHeart className='fill' />
                            <FaRegHeart className='empty' />
                            <span>Add to WishList</span>
                          </div>
                        }
                      </button>
                    </div>
                  </div>
                  <div className="right-bottom">
                    <p>Category: <b>{movieDetailID?.category?.name}</b></p>
                    <p>Tag: <span className="textbox-ctg"><span>#{movieDetailID?.tag}</span></span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //!======================DETAILS-REVIEW====================== */}

          <div className="row">
            <div className="reviews">
              <div className="reviews-title">
                <p>Reviews (2)</p>
              </div>
              <div className="reviews-body">
                <div className="reviews-body_title">
                  <p>2 review for {movieDetailID?.title}</p>
                </div>
                <div className="review-user">
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <img width={70} src={userImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-10">
                      <div className="review-text">
                        <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                        <p className='user-title'><b>ANA -</b> NOVEMBER 26</p>
                        <p className='text'>
                          Duis at nibh ligula. Sed dapibus, enim sit amet finibus placerat,
                          erat nunc suscipit nulla, id congue odio eros viverra risus. Morbi nec
                          mattis augue, nec semper nunc. Nunc ultrices orci ligula. Donec et scelerisque
                          lacus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <img width={70} src={userImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-10">
                      <div className="review-text">
                        <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                        <p className='user-title'><b>WILL SMITH -</b> DECEMBER 15</p>
                        <p className='text'>
                          Sed dapibus, enim sit amet finibus placerat,
                          erat nunc suscipit nulla, id congue odio eros viverra risus. Morbi nec
                          mattis augue, nec semper nunc. Nunc ultrices orci ligula. Donec et scelerisque
                          lacus. Pellentesque gravida tincidunt nisl. Nullam tincidunt, orci lacinia ultricies
                          sodales, tellus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* //!======================RELATED-MOVIES====================== */}

          <div className="row">
            <div className="related-movies">
              <div className="related-movies_title">
                <p>RELATED MOVIES</p>
              </div>
              <div className="related-movies-body">
                <div className="row">
                  {rel && rel.map((i, index) => (
                    <div key={index} className='movie-card-col col-12 col-lg-3 col-md-3 col-sm-12'>
                      <MovieCard alldata={i} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetails