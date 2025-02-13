import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MovieCard from './MovieCard'
import { useGetMoviesQuery } from '../tools/services/moviesApi';
import { useTranslation } from 'react-i18next';

const OrderSuccess = () => {
    const { data: movieData = [] } = useGetMoviesQuery({ category: '' });
    const [rel, setReal] = useState([]);
    const moviDataLength = movieData?.data?.length;
    const { t } = useTranslation();

    useEffect(() => {
        if (movieData?.data?.length > 4) {
            const shuffledMovies = [...movieData.data]
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);
            setReal(shuffledMovies);
        }
    }, [moviDataLength, movieData.data]);

    return (
        <div className='order-check'>
            <div className="container">
                <h2>{t("checkout.successOrder.succTxt1")} <br />
                    {t("checkout.successOrder.succTxt2")}</h2>
                <Link className='btn btn-shop my-5' to={'/movies-shop'}>{t("checkout.successOrder.backShop")}</Link>
                <div className="row">
                    <div className="related-movies ">
                        <div className="related-movies_title">
                            <p>{t("movieBlog.details.relatedMov")}</p>
                        </div>
                        <div className="related-movies-body my-3">
                            <div className="row">
                                {rel && rel.map((i, index) => (
                                    <div key={index} className='movie-card-col col-12 col-lg-3 col-md-3 col-sm-6'>
                                        <MovieCard alldata={i} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess