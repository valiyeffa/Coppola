import { ConfigProvider, Slider } from 'antd';
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import img3 from './images/h4-rev-img4a.jpg'
import img2 from './images/h4-rev-img3.jpg'
import img1 from './images/h4-rev-img2.jpg'
import logoDark from '../../../src/assets/images/logo-main-dark.png'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import MovieCard from '../../components/MovieCard';
import { useGetCategoriesQuery } from '../../tools/services/categoryApi';
import { useGetMoviesQuery } from '../../tools/services/moviesApi';
import Preloader from '../../components/Preloader';
import { environment } from '../../environments/environment';

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
    const { data: ctgData } = useGetCategoriesQuery();
    const { data: movieData, isLoading } = useGetMoviesQuery();

    return (
        <div className='head-sect-movie light-mode'>
            <div className="container-fluid">
                <h2 className='py-5' style={{ textAlign: 'center' }}>Movies / Shop</h2>
                {isLoading ? <Preloader /> :
                    <div className="row">
                        <div className="col-12 col-lg-2 col-md-11 col-sm-12">
                            <div className="movie-left-side">
                                <img className='dark-logo' src={logoDark} alt="" />
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
                                            {ctgData && ctgData.map(item => (
                                                <li key={item._id} className="list-group-item">{item.name}</li>
                                            ))}
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
                                        <button className='btn btn-outline-dark btn-shop btn-shop-dark px-4 py-1'>Apply</button>
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
                                        loop={true}
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
                                        {movieData.map((item) => (
                                            <MovieCard key={item._id} image={`${environment.baseUrl}${item.image.url}`} title={item.title} category={item.category.name} price={item.price == item.discountedPrice? item.price : item.discountedPrice} discounted={item.price} isProductNew={item.isProductNew} />
                                        ))}
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

export default HeadMovie