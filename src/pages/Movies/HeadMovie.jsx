import { ConfigProvider, Slider } from 'antd';
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import logoDark from '../../../src/assets/images/logo-main-dark.png'

import 'swiper/css';
import 'swiper/css/pagination';
import MovieCard from '../../components/MovieCard';
import { useGetCategoriesQuery } from '../../tools/services/categoryApi';
import { useGetMoviesQuery } from '../../tools/services/moviesApi';
import Preloader from '../../components/Preloader';

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
    const [ct, setCt] = useState();
    const { data: ctgData } = useGetCategoriesQuery();
    const { data: movieData = [], isLoading } = useGetMoviesQuery({ category: ct });

    const ctgfilter = (ctgID) => {
        setCt(ctgID);
    }

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
                                            <li className="list-group-item" onClick={() => { ctgfilter('') }}>All</li>
                                            {ctgData && ctgData.map(item => (
                                                <li key={item._id} className="list-group-item" onClick={() => { ctgfilter(item._id) }}>{item.name}</li>
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
                                <div className="movie-right-body-products">
                                    <div className="row">
                                        {movieData.data && movieData.data.map((item) => (
                                            <div className="movie-card-col col-12 col-lg-4 col-md-4 col-sm-12">
                                                <MovieCard key={item._id} alldata={item} />
                                            </div>
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