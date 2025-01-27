import React from 'react'
import img from '../../../src/pages/Movies/images/product-3-300x425.jpg'

const Basket = () => {
    return (
        <div className='basket-page'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="basket-prod-sect">
                            <div className="basket-body">
                                <h2 className='basket-body_title'>Cart</h2>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-2">
                                            <img src={img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">ANESA</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
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
                                <h2>basket</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket