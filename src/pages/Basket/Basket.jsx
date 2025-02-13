import React from 'react'
import { useCart } from 'react-use-cart';
import emptyGif from '../../../src/assets/images/cart-empty-gif.gif'
import { Link, useNavigate } from 'react-router-dom';
import BasketCard from '../../components/BasketCard';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

const Basket = () => {
    const { isEmpty, items, cartTotal } = useCart();
    const cookies = new Cookies(null, { path: '/' });
    const navigate = useNavigate();

    const topPage = () => {
        window.scrollTo(0, 0);
    }

    const checkoutBtn = () => {
        Swal.fire({
            title: "Please log in to your account.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login!"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login-register');
            }
        });
    }

    return (
        <div className='basket-page'>
            <div className="container-fluid">
                <p className='basket-title'>HOME / CART</p>

                {isEmpty ? <div className='empty'>
                    <img src={emptyGif} alt="" />
                    <p className='h1'>Your cart is currently empty.</p>
                    <Link to="/movies-shop" onClick={topPage} className='btn btn-basket'>Return To Shop</Link>
                </div> :
                    <div className="row">
                        <div className="col-md-8">
                            <div className="basket-prod-sect">
                                <div className="basket-body ">
                                    <h2 className='basket-body_title'>Cart</h2>
                                    {items.map((item) => (
                                        <BasketCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="basket-prod-sect">
                                <div className="basket-total">
                                    <h2 className='basket-body_title'>Cart totals</h2>

                                    <div className="basket-total-body">
                                        <div className="basket-total-body_top">
                                            <div className="subtotal sub-top">
                                                <p className='sub-mini-title'>Subtotal</p>
                                                <p className='subtotal-val'>${cartTotal.toFixed(2)}</p>
                                            </div>
                                            <div className="subtotal">
                                                <p className='mini-title'>Discount</p>
                                                <p className='delivery-count'>(15%) - ${(cartTotal * 0.15).toFixed(2)}</p>
                                            </div>
                                            <div className="subtotal">
                                                <p className='mini-title'>Delivery</p>
                                                <p className='delivery-count'>$13</p>
                                            </div>
                                        </div>
                                        <div className="basket-total-body_bottom">
                                            <p className='total-text'>Total</p>
                                            <p className='total-price'>${(cartTotal + 13 - (cartTotal * 0.15).toFixed(2)).toFixed(2)}</p>
                                        </div>

                                        <div className="basket-total-body_btn">
                                            {cookies.get('user') == true ?
                                                <Link to={'/checkout'} type='button' onClick={() => window.scrollTo(0, 0)} className='btn'>Proceed To Checkout</Link> :
                                                <button type='button' onClick={checkoutBtn} className='btn'>Proceed To Checkout</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Basket