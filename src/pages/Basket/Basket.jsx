import React, { useState } from 'react'
import img from '../../../src/pages/Movies/images/product-3-300x425.jpg'
import { FaHeart, FaTrash } from "react-icons/fa";
import { Bounce, toast, ToastContainer } from 'react-toastify';
const Basket = () => {
    const [count, setCount] = useState(1);

    if (count < 0) {
        setCount(0);
        toast.warn('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className='basket-page'>
            <div className="container-fluid">
                <p className='basket-title'>HOME / CART</p>
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
                <div className="row">
                    <div className="col-md-8">
                        <div className="basket-prod-sect">
                            <div className="basket-body ">
                                <h2 className='basket-body_title'>Cart</h2>
                                <div className="card py-3">
                                    <div className="row g-0">
                                        <div className="col-md-2">
                                            <div className="card-img">
                                                <img src={img} className="img-fluid" alt="..." />
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <div className="card-body-frst">
                                                    <h5 className="card-title">ANESA</h5>
                                                    <p className='card-price'>$12</p>
                                                </div>
                                                <p className="card-text"><del className='sale'>$25</del> $12 <span className='sale-text'>On Sale</span><span className='new-text'>New</span></p>
                                                <div className="card-body-bottom">
                                                    <div className="card-quantity">
                                                        <button onClick={() => setCount(count - 1)} className='btn btn-dark'>-</button>
                                                        <span className='count'>{count}</span>
                                                        <button onClick={() => setCount(count + 1)} className='btn btn-dark'>+</button>
                                                    </div>
                                                    <div className="card-remove-fav">
                                                        <button className='btn fav-btn'><FaHeart /> Save</button>
                                                        <button className='btn del-btn'><FaTrash /> Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="basket-prod-sect">
                            <div className="basket-total">
                                <h2>Total</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket