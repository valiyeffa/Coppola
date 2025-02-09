import { ConfigProvider, Slider } from 'antd';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import logoDark from '../../../src/assets/images/logo-main-dark.png';
import { MdOutlineArrowOutward } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import MovieCard from '../../components/MovieCard';
import { useGetCategoriesQuery } from '../../tools/services/categoryApi';
import { useGetMoviesQuery } from '../../tools/services/moviesApi';
import Preloader from '../../components/Preloader';

const HeadMovie = () => {
    const [ct, setCt] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [priceRange, setPriceRange] = useState([10, 60]);
    const [appliedPrice, setAppliedPrice] = useState([10, 60]);

    const { data: ctgData } = useGetCategoriesQuery();
    const { data: movieData = [], isLoading } = useGetMoviesQuery({ category: ct, search: searchTerm });

    const ctgfilter = (ctgID) => {
        setCt(ctgID);
    };

    const filteredMovies = movieData.data && movieData.data.filter(item =>
        item.price >= appliedPrice[0] &&
        item.price <= appliedPrice[1] &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
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
                                                range
                                                min={10}
                                                max={60}
                                                value={priceRange}
                                                onChange={setPriceRange}
                                            />
                                            <p>${priceRange[0]} - ${priceRange[1]}</p>
                                            {priceRange[0] !== 10 || priceRange[1] !== 60 ? (
                                                <button type='button' onClick={() => {
                                                    setPriceRange([10, 60]);
                                                    setAppliedPrice([10, 60]);
                                                }} className='btn mx-2' style={{ border: 'none' }}>Reset <MdOutlineArrowOutward /></button>
                                            ) : null}
                                            <button type='button' onClick={() => setAppliedPrice(priceRange)} className='btn px-4 py-1' style={{ border: 'none' }}>Apply <MdOutlineArrowOutward /></button>
                                        </ConfigProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-10 col-md-12 col-sm-12">
                            <div className="movie-right-side">
                                <div className="movie-right-body-products">
                                    <div className="row">
                                        {filteredMovies.length > 0 ? (
                                            filteredMovies.map((item) => (
                                                <div key={item._id} className="movie-card-col col-12 col-lg-4 col-md-4 col-sm-12">
                                                    <MovieCard alldata={item} />
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-center py-5 h3">No movies found.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default HeadMovie;
