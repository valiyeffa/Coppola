import { ConfigProvider, Slider } from 'antd';
import React from 'react'
import { FaSearch, FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import img3 from './images/h4-rev-img4a.jpg'
import img2 from './images/h4-rev-img3.jpg'
import img1 from './images/h4-rev-img2.jpg'
import logoDark from '../../../src/assets/images/logo-main-dark.png'

import prod1 from './images/product-1-300x425.jpg'
import prod2 from './images/product-2-300x425.jpg'
import prod3 from './images/product-3-300x425.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const marks = {
    10: {
        style: {
            color: 'black',
        },
        label: <p>$10</p>,
    },
    60: {
        style: {
            color: 'black',
        },
        label: <p>$60</p>,
    },
};

const HeadMovie = () => {
    return (
        <div className='head-sect-movie light-mode'>
            <div className="container-fluid">
                <h2 className='py-5' style={{ textAlign: 'center' }}>Movies / Shop</h2>
                <div className="row">
                    <div className="col-12 col-lg-2 col-md-11 col-sm-12">
                        <img style={{ width: '100%', padding: '50px 0' }} src={logoDark} alt="" />
                        <div className="movie-left-side">
                            <div className="left-side-body">
                                <div className="search-bar py-3 border-bottom">
                                    <div className="input-group ">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button className="btn" type="submit"><FaSearch /></button>
                                    </div>
                                </div>

                                <div className="categories py-3 border-bottom">
                                    <h6>CATEGORY</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item">All</li>
                                        <li className="list-group-item">Comedy</li>
                                        <li className="list-group-item">Documentary</li>
                                        <li className="list-group-item">Drama</li>
                                        <li className="list-group-item">Fantasy</li>
                                        <li className="list-group-item">Romance</li>
                                        <li className="list-group-item">Sci-Fi</li>
                                    </ul>
                                </div>

                                <div className="prices py-3">
                                    <h6>PRICE</h6>
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimaryBorderHover: 'black',
                                            },
                                            components: {
                                                Slider: {
                                                    handleActiveColor: "black",
                                                    dotActiveBorderColor: 'black',
                                                    handleActiveOutlineColor: 'grey',
                                                    handleColor: 'black',
                                                    trackBg: 'black',
                                                    handleSize: 4,
                                                    handleSizeHover: 6,
                                                    railSize: 3
                                                },
                                            },
                                        }}>
                                        <Slider
                                            range={{
                                                draggableTrack: true,
                                            }}
                                            defaultValue={[0, 60]}
                                            min={10} max={60}
                                            marks={marks}
                                        />
                                    </ConfigProvider>
                                    <button className='btn btn-outline-dark btn-shop px-4 py-1'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-10 col-md-12 col-sm-12">
                        <div className="movie-right-side">
                            <div className="movie-right-top-carousel">
                                <Swiper
                                    direction={'vertical'}
                                    effect={'fade'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Pagination, Autoplay, EffectFade]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src={img1} alt="" />
                                        <div className="slide-title-text">
                                            <span className='movie-ctg carousel-ctg'>Sci-Fi</span>
                                            <span>Filmix Production Presents</span>
                                            <h3>Into the cosmos</h3>
                                            <p>Written and directed by Lars Johnson/ Sweden 2011</p>
                                        </div>
                                        <div className="slide-movie-btns">
                                            <button className='btn-details'>See Details</button>
                                            <button className='btn btn-add btn-outline-light'>Add to Cart</button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img2} alt="" />
                                        <div className="slide-title-text">
                                            <span className='movie-ctg carousel-ctg'>Romance</span>
                                            <span>tweak production presents</span>
                                            <h3>Wait by the train</h3>
                                            <p>Written and directed by Michael Gordon/ France 1984</p>
                                        </div>
                                        <div className="slide-movie-btns">
                                            <button className='btn-details'>See Details</button>
                                            <button className='btn btn-add btn-outline-light'>Add to Cart</button>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={img3} alt="" />
                                        <div className="slide-title-text">
                                            <span className='movie-ctg carousel-ctg'>drama</span>
                                            <span>Filmo Production Presents</span>
                                            <h3>History of colour</h3>
                                            <p>Written by Julia Wang, directed by Andy Smith, 2000</p>
                                        </div>
                                        <div className="slide-movie-btns">
                                            <button className='btn-details'>See Details</button>
                                            <button className='btn btn-add btn-outline-light'>Add to Cart</button>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            <div className="movie-right-body-products">
                                <div className="row">
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                        <div className="movie-card">
                                            <img src={prod1} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <span className='movie-ctg'>Drama</span>
                                                <h5 className="card-title">Black Bird</h5>
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                                <span className="card-price">$12</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                        <div className="movie-card">
                                            <img src={prod2} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <span className='movie-ctg'>Romance</span>
                                                <h5 className="card-title">Lake</h5>
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></p>
                                                <span className="card-price">$20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                        <div className="movie-card">
                                            <img src={prod3} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <span className='movie-ctg'>Sci-Fi</span>
                                                <h5 className="card-title">Anesa</h5>
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                                <span className="card-price">$25</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                        <div className="movie-card">
                                            <img src={prod1} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <span className='movie-ctg'>Drama</span>
                                                <h5 className="card-title">Black Bird</h5>
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                                <span className="card-price">$12</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                        <div className="movie-card">
                                            <img src={prod2} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <span className='movie-ctg'>Romance</span>
                                                <h5 className="card-title">Lake</h5>
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></p>
                                                <span className="card-price">$20</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                        <div className="movie-card">
                                            <img src={prod3} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <span className='movie-ctg'>Sci-Fi</span>
                                                <h5 className="card-title">Anesa</h5>
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                                                <span className="card-price">$25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadMovie