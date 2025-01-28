import React from 'react'
import img from '../../../src/pages/Movies/images/product-3-300x425.jpg'

const Basket = () => {
    return (
        <div className='basket-page'>
            <div className="container-fluid">
                <p className='basket-title'>HOME / CART</p>
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
                                                <h5 className="card-title">ANESA</h5>
                                                <p className="card-text"><del className='sale'>$25</del> $12 <span className='sale-text'>On Sale</span><span className='new-text'>New</span></p>
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