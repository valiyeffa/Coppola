import React from 'react'
import { environment } from '../environments/environment';
import { useTranslation } from 'react-i18next';
import Checkout from '../pages/CheckoutPage/Checkout';

const OrderCard = ({ item }) => {
    const { t } = useTranslation();

    return (
        <div className="card order-card py-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <div className="card-img" style={{ borderRadius: '0' }}>
                        <img src={`${environment.baseUrl}${item.image.url}`} className="img-fluid" alt={item.title} />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        {item.price == item.originalPrice ?
                            item.isProductNew == true ?
                                <p className="card-text"><span className='new-text'>{t("new")}</span></p> : ''
                            : <p className="card-text"><span className='sale-text'>{t("shops.basket.basketCard.onsale")}</span></p>
                        }
                        <div className="card-body-frst">
                            <h5 className="card-title">{item.title}</h5>
                            <p className='card-price'>${item.discountedPrice * item.quantity}</p>
                        </div>

                        <div className="card-body-bottom">
                            <span className='count'>{t("checkout.count")}</span>
                            <span className='count'>{item.quantity}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard