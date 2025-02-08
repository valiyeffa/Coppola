import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiPlayLargeLine } from "react-icons/ri";

import home1portlist1 from '../../assets/images/home-1-port-list-1.jpg'
import home1portlist2 from '../../assets/images/home-1-port-list-2.jpg'
import home1portlist3 from '../../assets/images/home-1-port-list-3.jpg'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './sass/home.scss'

import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function SecondHomeSect() {
  return (
    <div className='scnd-home-sect'>
      <div className="container-fluid">
        <div className="scnd-sect-title">
          <div className="row">
            <span>SYNOPSIS</span>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
              <div className="scnd-title">
                <h3>THE TELLING OF TWO INTERTWINING LIVES. MASS <del>DESTRUCTION</del>.</h3>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12">
              <div className="scnd-title">
                <p>Cum sociis Theme natoque penatibus et magnis dis part montes,
                  nascetur ridiculus mus. Aliquam loremante, dapibus in, viverra.
                  Dolor orem Ipsn vuctor aliquet re ipsum dolor sit amet rem Ipsn
                  gravida nibh vel velit auct Curabitur ullamcorper ultricies nisi.
                  Nam eget, etiam mea.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="collection">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={home1portlist1} />
            <Link to="/movies-shop" onClick={() => window.scrollTo(0, 0)} className='slider-btn'><RiPlayLargeLine /></Link>
            <div className="slider-text">
              <h4>HOTEL ROSE</h4>
              <p>Huang Jordan / Vietnam</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home1portlist2} />
            <Link to="/movies-shop" onClick={() => window.scrollTo(0, 0)} className='slider-btn'><RiPlayLargeLine /></Link>
            <div className="slider-text">
              <h4>BLUE ROOM</h4>
              <p>Naomi Takeda / Japan</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home1portlist3} />
            <Link to="/movies-shop" onClick={() => window.scrollTo(0, 0)} className='slider-btn'><RiPlayLargeLine /></Link>
            <div className="slider-text">
              <h4>BERLIN, TEXAS</h4>
              <p>Lourdes Kumar / Germany</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home1portlist1} />
            <Link to="/movies-shop" onClick={() => window.scrollTo(0, 0)} className='slider-btn'><RiPlayLargeLine /></Link>
            <div className="slider-text">
              <h4>HOTEL ROSE</h4>
              <p>Huang Jordan / Vietnam</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home1portlist2} />
            <Link to="/movies-shop" onClick={() => window.scrollTo(0, 0)} className='slider-btn'><RiPlayLargeLine /></Link>
            <div className="slider-text">
              <h4>BLUE ROOM</h4>
              <p>Naomi Takeda / Japan</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={home1portlist3} />
            <Link to="/movies-shop" onClick={() => window.scrollTo(0, 0)} className='slider-btn'><RiPlayLargeLine /></Link>
            <div className="slider-text">
              <h4>BERLIN, TEXAS</h4>
              <p>Lourdes Kumar / Germany</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div >
    </div>
  );
}