import React from 'react'
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from 'react-use-cart';
import { environment } from '../environments/environment';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const MovieCard = ({ alldata }) => {
  const { addItem } = useCart();

  const handleAddToCart = (product) => {
    addItem({
      ...product,
      id: product._id,
      price: product.discountedPrice || product.price,
      originalPrice: product.price,
      isProductNew: product.isProductNew
    });
  };


  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <div className="movie-card">
        <div className="card-img">
          <img src={`${environment.baseUrl}${alldata.image.url}`} className="card-img-top" alt="..." />
          <div className="new-sale-mark">
            {alldata.price == alldata.discountedPrice ?
              alldata.isProductNew == true ?
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

            <button className="btn btn-shop btn-outline-light" onClick={() => {
              toast.success('Movie added to basket!', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
              handleAddToCart(alldata);
            }}>Add to Cart</button>
          </div>
        </div>
        <div className="card-body">
          <span className='movie-ctg'>{alldata.category.name}</span>
          <h5 className="card-title">{alldata.title}</h5>
          <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
          {alldata.price == alldata.discountedPrice ?
            <span className="card-price">${alldata.price == alldata.discountedPrice ? alldata.price : alldata.discountedPrice}</span> :
            <>
              <del className="card-ex-price">${alldata.price}</del>
              <span className="card-price">${alldata.discountedPrice}</span>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default MovieCard