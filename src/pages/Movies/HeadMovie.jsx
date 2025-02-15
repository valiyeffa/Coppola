import { ConfigProvider, Slider } from 'antd';
import React, { useContext, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import logoDark from '../../../src/assets/images/logo-main-dark.png';
import logoLight from '../../../src/assets/images/logo-light.png'
import { MdOutlineArrowOutward } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import MovieCard from '../../components/MovieCard';
import { useGetCategoriesQuery } from '../../tools/services/categoryApi';
import { useGetMoviesQuery } from '../../tools/services/moviesApi';
import Preloader from '../../components/Preloader';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';

const HeadMovie = () => {
    const [ct, setCt] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [priceRange, setPriceRange] = useState([10, 60]);
    const [appliedPrice, setAppliedPrice] = useState([10, 60]);
    const [theme, setTheme] = useContext(ThemeContext);
    const { t } = useTranslation();
    const [sortOrder, setSortOrder] = useState("asc");

    const { data: ctgData } = useGetCategoriesQuery();
    const { data: movieData = [], isLoading } = useGetMoviesQuery({ category: ct, search: searchTerm });

    const ctgfilter = (ctgID) => {
        setCt(ctgID);
    };

    const filteredMovies = movieData.data && movieData.data.filter(item =>
        item.price >= appliedPrice[0] &&
        item.price <= appliedPrice[1] &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedMovies = [...(filteredMovies || [])].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        if (sortOrder === "latest") return new Date(b.releaseDate) - new Date(a.releaseDate);
        return 0;
    });

    return (
        <div className='head-sect-movie light-mode'>
            <div className="container-fluid">
                <h2 className='py-5' style={{ textAlign: 'center' }}>{t("movieBlog.movTit")}</h2>
                {isLoading ? <Preloader /> :
                    <div className="row">
                        <div className="col-12 col-lg-2 col-md-11 col-sm-12">
                            <div className="movie-left-side">
                                {theme == "light" ?
                                    <img className='dark-logo' src={logoDark} alt="" /> :
                                    <img className='dark-logo' src={logoLight} alt="" />
                                }
                                <div className="left-side-body">
                                    <div className="search-bar py-3 border-bottom">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={t("movieBlog.search")}
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                            <button className="btn" type="submit"><FaSearch /></button>
                                        </div>
                                    </div>
                                    <div className="categories py-3 border-bottom">
                                        <h6>{t("movieBlog.catg")}</h6>
                                        <ul className="list-group">
                                            <li className="list-group-item" onClick={() => { ctgfilter('') }}>All</li>
                                            {ctgData && ctgData.map(item => (
                                                <li key={item._id} className="list-group-item" onClick={() => { ctgfilter(item._id) }}>{item.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="prices py-3">
                                        <h6>{t("movieBlog.prc")}</h6>
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
                                                }} className='btn mx-2' style={{ border: 'none' }}>{t("movieBlog.reset")} <MdOutlineArrowOutward /></button>
                                            ) : null}
                                            <button type='button' onClick={() => setAppliedPrice(priceRange)} className='btn px-4 py-1' style={{ border: 'none' }}>{t("movieBlog.apply")} <MdOutlineArrowOutward /></button>
                                        </ConfigProvider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-10 col-md-12 col-sm-12">
                            <div className="movie-right-side">
                                <div className="movie-right-body-products flex-column">
                                    <div className="row">
                                        <div className="sorts d-flex justify-content-between py-3">
                                            <p>{t("movieBlog.sortTit")} {sortedMovies?.length} {t("movieBlog.sortTitres")}</p>
                                            <div className="dropdown">
                                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {sortOrder === "asc" ? `${t("movieBlog.sortLowHigh")}` : sortOrder === "desc" ? `${t("movieBlog.sortHighLow")}` : `${t("movieBlog.sortLate")}`}
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item" onClick={() => setSortOrder("latest")}>{t("movieBlog.sortLate")}</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setSortOrder("asc")}>{t("movieBlog.sortLowHigh")}</button></li>
                                                    <li><button className="dropdown-item" onClick={() => setSortOrder("desc")}>{t("movieBlog.sortHighLow")}</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {sortedMovies.length > 0 ? (
                                            sortedMovies.map((item) => (
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
