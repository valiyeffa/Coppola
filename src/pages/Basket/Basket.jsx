import React from 'react'
import { useCart } from 'react-use-cart';
import emptyGif from '../../../src/assets/images/cart-empty-gif.gif'
import { Link, useNavigate } from 'react-router-dom';
import BasketCard from '../../components/BasketCard';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Basket = () => {
    const { isEmpty, items, cartTotal } = useCart();
    const cookies = new Cookies(null, { path: '/' });
    const navigate = useNavigate();
    const { t } = useTranslation();

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
                <p className='basket-title'>{t("shops.basket.basketTit1")}</p>

                {isEmpty ? <div className='empty'>
                    <img src={emptyGif} alt="" />
                    <p className='h1'>{t("shops.basket.empty")}</p>
                    <Link to="/movies-shop" onClick={topPage} className='btn btn-basket'>{t("shops.returnBtn")}</Link>
                </div> :
                    <div className="row">
                        <div className="col-md-8">
                            <div className="basket-prod-sect">
                                <div className="basket-body ">
                                    <h2 className='basket-body_title'>{t("shops.basket.basketTit2")}</h2>
                                    {items.map((item) => (
                                        <BasketCard key={item.id} item={item} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="basket-prod-sect">
                                <div className="basket-total">
                                    <h2 className='basket-body_title'>{t("shops.basket.totalTitBig")}</h2>

                                    <div className="basket-total-body">
                                        <div className="basket-total-body_top">
                                            <div className="subtotal sub-top">
                                                <p className='sub-mini-title'>{t("shops.basket.subtotalTit")}</p>
                                                <p className='subtotal-val'>${cartTotal.toFixed(2)}</p>
                                            </div>
                                            <div className="subtotal">
                                                <p className='mini-title'>{t("shops.basket.discountTit")}</p>
                                                <p className='delivery-count'>(15%) - ${(cartTotal * 0.15).toFixed(2)}</p>
                                            </div>
                                            <div className="subtotal">
                                                <p className='mini-title'>{t("shops.basket.deliveryTit")}</p>
                                                <p className='delivery-count'>$13</p>
                                            </div>
                                        </div>
                                        <div className="basket-total-body_bottom">
                                            <p className='total-text'>{t("shops.basket.totalTit")}</p>
                                            <p className='total-price'>${(cartTotal + 13 - (cartTotal * 0.15).toFixed(2)).toFixed(2)}</p>
                                        </div>

                                        <div className="basket-total-body_btn">
                                            {cookies.get('user') == true ?
                                                <Link to={'/checkout'} type='button' onClick={() => window.scrollTo(0, 0)} className='btn'>{t("shops.basket.proc")}</Link> :
                                                <button type='button' onClick={checkoutBtn} className='btn'>{t("shops.basket.proc")}</button>
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