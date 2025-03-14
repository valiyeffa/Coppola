import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import stars from '../../assets/images/h1-testimonials.png'
import fourthImg from '../../assets/images/h1-img1.jpg'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sass/home.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FourthHomeSect = () => {
  const { t } = useTranslation();

  const topPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='fouth-home-sect'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={{
          prevEl: '.custom-button-prev',
          nextEl: '.custom-button-next',
        }}
        pagination={{
          type: 'fraction',
        }}
        autoplay={{
          delay: 3000
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="custom-button-prev"><FaArrowLeft /></div>
        <div className="custom-button-next"><FaArrowRight /></div>
        <SwiperSlide>
          <img src={stars} alt="" />
          <h4>“{t("home.thrdFourSect.dir1")}"</h4>
          <p>Movie Director</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={stars} alt="" />
          <h4>“{t("home.thrdFourSect.dir2")}"</h4>
          <p>Film Producer</p>
        </SwiperSlide>

        <SwiperSlide>
          <img src={stars} alt="" />
          <h4>“{t("home.thrdFourSect.dir3")}"</h4>
          <p>Casting Director</p>
        </SwiperSlide>
      </Swiper>

      <div className="movie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
              <div className="left-side-movie-photo">
                <img src={fourthImg} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
              <div className="right-side-movie-text">
                <div className="movie-text-body">
                  <p>{t("home.thrdFourSect.movieCtg")}</p>
                  <h3>{t("home.thrdFourSect.movieTit")} <del>{t("home.thrdFourSect.movieDel")}</del></h3>
                </div>
                <NavLink to='/movies-shop' onClick={topPage} className='btn-shop btn btn-outline-light'>{t("home.thrdFourSect.getBtn")}</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthHomeSect