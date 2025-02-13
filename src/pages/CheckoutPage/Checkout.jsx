import { ConfigProvider, Select } from 'antd';
import React, { useRef, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useCart } from 'react-use-cart';
import OrderCard from '../../components/OrderCard';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import Preloader from '../../components/Preloader';

const Checkout = () => {
    const { items, cartTotal, emptyCart } = useCart();
    const [card, setCard] = useState(true);
    const [cash, setCash] = useState(false);
    const [countryCode, setCountryCode] = useState("+994");
    const [check, setCheck] = useState(false);
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();

    const [cardDetails, setCardDetails] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    };

    const handleExpiryChange = (e) => {
        let { value } = e.target;
        value = value.replace(/\D/g, '');
        if (value.length > 2) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
        }
        setCardDetails({
            ...cardDetails,
            expiry: value,
        });
    };

    const handleInputFocus = (e) => {
        setCardDetails({
            ...cardDetails,
            focus: e.target.name,
        });
    };

    const submitedForm = (e) => {
        e.preventDefault();
        const fullname = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const city = cityRef.current.value;
        const state = stateRef.current.value;
        const zip = zipRef.current ? zipRef.current.value : '';

        if (!fullname || !email || !phone || !city || !state || (cash && !zip)) {
            setSubmit(false);
            toast.error('Please fill in all required fields.', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        } else {
            setSubmit(true);
            setTimeout(() => {
                navigate('/checkout/order');
                emptyCart();
            }, 1000)
        }
    }

    return (
        <div className='checkout-page'>
            {submit ? <div className='d-flex' style={{ height: '100vh', alignItems: 'center' }}><Preloader /> </div> :
                <div className="container-fluid">
                    <ToastContainer />
                    <div className="checkout-title my-4">
                        <h1>Checkout</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="checkout-body left-side my-5">
                                <div className="checkout-info">
                                    <b>Review your cart</b>
                                    <div className="products">
                                        {items.map((item) => (
                                            <OrderCard key={item.id} item={item} />
                                        ))}
                                    </div>
                                    <div className="basket-total">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout-body right-side">
                                <div className="checkout-info my-5">
                                    <b>Billing Details</b>
                                    <form className='my-4' onSubmit={submitedForm}>
                                        <div className="mb-3">
                                            <label className="form-label">Full name*</label>
                                            <input type="text" ref={nameRef} placeholder='Enter full name' className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email address*</label>
                                            <input type="email" ref={emailRef} placeholder='Enter email address' className="form-control" />
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
                                                <input type="number" ref={phoneRef} placeholder='Enter phone number' className="form-control" />
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
                                            <input placeholder='Enter city' ref={cityRef} type="text" className="form-control" />
                                        </div>
                                        <div className="state mb-3">
                                            <label className="form-label">State*</label>
                                            <input placeholder='Enter state' ref={stateRef} type="text" className="form-control" />
                                        </div>
                                        <div className="payment-method mb-3">
                                            <label className="form-label">Choose Payment method:</label><br />
                                            <button onClick={() => {
                                                setCash(false);
                                                setCard(true);
                                            }} type='button' className={`btn card-cash-btn ${card === true ? 'active-btn' : ''}`}>Card on Delivery</button>
                                            <button onClick={() => {
                                                setCard(false);
                                                setCash(true);
                                            }} type='button' className={`btn card-cash-btn mx-2 ${cash === true ? 'active-btn' : ''}`}>Cash on Delivery</button>
                                        </div>
                                        {card === true ?
                                            <div className="card-on-delivery mb-3">
                                                <div className="credit-card">
                                                    <Cards
                                                        number={cardDetails.number}
                                                        name={cardDetails.name}
                                                        expiry={cardDetails.expiry}
                                                        cvc={cardDetails.cvc}
                                                        focused={cardDetails.focus}
                                                    />
                                                    <div className="card-name mb-3">
                                                        <label className="form-label">Name on Card</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Name Surname"
                                                            className="form-control"
                                                            value={cardDetails.name}
                                                            onChange={handleInputChange}
                                                            onFocus={handleInputFocus}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="card-num">
                                                        <label className="form-label">Card Number</label>
                                                        <input
                                                            type="text"
                                                            name="number"
                                                            placeholder="1234 1234 1234 1234"
                                                            className="form-control"
                                                            value={cardDetails.number}
                                                            onChange={handleInputChange}
                                                            onFocus={handleInputFocus}
                                                            maxLength="16"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="year-cvv d-flex">
                                                        <input
                                                            type="text"
                                                            name="expiry"
                                                            placeholder="MM/YY"
                                                            className="form-control"
                                                            value={cardDetails.expiry}
                                                            onChange={handleExpiryChange}
                                                            onFocus={handleInputFocus}
                                                            maxLength="5"
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            name="cvc"
                                                            placeholder="CVC"
                                                            className="form-control"
                                                            value={cardDetails.cvc}
                                                            onChange={handleInputChange}
                                                            onFocus={handleInputFocus}
                                                            maxLength="3"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div> :
                                            <div className="cash-on-delivery mb-3" >
                                                <div className="zip-code">
                                                    <label className="form-label">ZIP Code</label>
                                                    <input type="number" ref={zipRef} className="form-control" />
                                                </div>
                                            </div>
                                        }
                                        <div className="mb-3 form-check">
                                            <input onClick={() => { check === false ? setCheck(true) : setCheck(false) }} type="checkbox" className="form-check-input" />
                                            <label className="form-check-label">I have read and agree to the Terms and Conditions.</label>
                                        </div>
                                        {check === true ?
                                            <button type="submit" onClick={() => window.scrollTo(0, 0)} className="btn btn-submit">Order now</button> :
                                            <button disabled type="submit" onClick={() => window.scrollTo(0, 0)} className="btn btn-submit">Order now</button>
                                        }
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Checkout