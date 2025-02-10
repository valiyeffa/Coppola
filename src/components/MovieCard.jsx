import React from 'react'
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from 'react-use-cart';
import { environment } from '../environments/environment';
import { useWishlist } from 'react-use-wishlist';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MovieCard = ({ alldata }) => {
  const { addWishlistItem, getWishlistItem, removeWishlistItem } = useWishlist();
  const { addItem, getItem } = useCart();

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
    if (getWishlistItem(alldata._id)) {
      removeWishlistItem(alldata._id);
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
    <div className="movie-card">
      <div className="card-img">
        <img src={`${environment.baseUrl}${alldata?.image?.url}`} className="card-img-top" alt={alldata?.title} />
        <div className="new-sale-mark">
          {alldata?.price == alldata?.discountedPrice ?
            alldata?.isProductNew == true ?
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
          <button onClick={() => {
            handleAddToWishlist(alldata);
          }} className="btn fav-btn">
            {getWishlistItem(alldata?._id) ?
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
          <button className="btn btn-shop btn-outline-light" onClick={() => {
            handleAddToCart(alldata);
          }}>Add to Cart</button>
        </div>
      </div>
      <Link to={`/movies-shop/${alldata?.slug}`} state={{ movieID: alldata?._id }} onClick={() => window.scrollTo(0, 0)} className="card-body">
        <span className='movie-ctg'>{alldata?.category?.name}</span>
        <h5 className="card-title">{alldata?.title}</h5>
        <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
        {alldata?.price == alldata?.discountedPrice ?
          <span className="card-price">${alldata?.price == alldata?.discountedPrice ? alldata?.price : alldata?.discountedPrice}</span> :
          <>
            <del className="card-ex-price">${alldata?.price}</del>
            <span className="card-price">${alldata?.discountedPrice}</span>
          </>
        }
      </Link>
    </div>
  )
}

export default MovieCard