import { ConfigProvider, Select } from 'antd';
import React, { useState } from 'react'
import { useCart } from 'react-use-cart';

const Checkout = () => {
    const { items, cartTotal } = useCart();
    const [card, setCard] = useState(false);
    const [cash, setCash] = useState(false);
    const [countryCode, setCountryCode] = useState("+994");
    return (
        <div className='checkout-page'>
            <div className="container-fluid">
                <div className="checkout-title my-4">
                    <h1>Checkout</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="checkout-body left-side">
                            <div className="checkout-info my-5">
                                <b>Shipping Information</b>
                                <form className='my-4'>
                                    <div className="mb-3">
                                        <label className="form-label">Full name*</label>
                                        <input type="text" placeholder='Enter full name' className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email address*</label>
                                        <input type="email" placeholder='Enter email address' className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone number*</label>
                                        <div className="input-group mb-3">
                                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{countryCode}</button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#" onClick={() => setCountryCode("+994")}>+994</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setCountryCode("+90")}>+90</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => setCountryCode("+995")}>+995</a></li>
                                            </ul>
                                            <input type="number" placeholder='Enter phone number' className="form-control" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Country*</label>
                                        <ConfigProvider
                                            theme={{
                                                components: {
                                                    Select: {
                                                        activeBorderColor: 'black',
                                                        activeOutlineColor: 'none',
                                                        hoverBorderColor: 'black',
                                                    },
                                                },
                                                token: {
                                                    borderRadius: 0,
                                                    colorBorder: 'black',
                                                    colorPrimary: '#BFBFBF',
                                                },
                                            }}
                                        >
                                            <Select
                                                defaultValue="Choose State"
                                                style={{
                                                    width: '100%',
                                                }}
                                                options={[
                                                    { value: 'aze', label: 'Azerbaijan' },
                                                    { value: 'tr', label: 'Turkiye' },
                                                    { value: 'gurc', label: 'Georgia' }
                                                ]}
                                            />
                                        </ConfigProvider>
                                    </div>
                                    <div className='city mb-3'>
                                        <label className="form-label">City*</label>
                                        <input placeholder='Enter city' type="text" className="form-control" />
                                    </div>
                                    <div className="state mb-3">
                                        <label className="form-label">State*</label>
                                        <input placeholder='Enter state' type="text" className="form-control" />
                                    </div>
                                    <div className="payment-mthod mb-3">
                                        <label className="form-label">Choose Payment method:</label><br />
                                        <button onClick={() => {
                                            setCash(true);
                                            setCard(false);
                                        }} type='button' className='btn btn-outline-dark'>Card on Delivery</button>
                                        <button onClick={() => {
                                            setCard(true);
                                            setCash(false);
                                        }} type='button' className='btn btn-outline-dark'>Cash on Delivery</button>
                                    </div>

                                    {card == false ?
                                        <div className="card-on-delivery mb-3">
                                            <div className="credit-card">
                                                <div className="card-num">
                                                    <label className="form-label">Card Details</label>
                                                    <input placeholder='1234 1234 1234 1234' type="number" className="form-control" />
                                                </div>
                                                <div className="year-cvv d-flex">
                                                    <input placeholder='MM/YY' type="number" className="form-control" />
                                                    <input placeholder='CVC' type="number" className="form-control" />
                                                </div>
                                            </div>
                                        </div> :
                                        <div className="cash-on-delivery mb-3">
                                            <div className="zip-code">
                                                <label className="form-label">ZIP Code</label>
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                    }
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="checkout-body right-side my-5">
                            <div className="checkout-info">
                                <b>Review your cart</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout