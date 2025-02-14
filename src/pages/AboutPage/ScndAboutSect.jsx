import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../HomePage/sass/home.scss'

import taleimg from '../../../src/assets/images/aboutus/inner-img-about-us.jpg'

import aboutport1 from '../../../src/assets/images/aboutus/about-us-port-1.jpg'
import aboutport2 from '../../../src/assets/images/aboutus/about-us-port-2.jpg'
import aboutport3 from '../../../src/assets/images/aboutus/about-us-port-3.jpg'

import award1 from '../../../src/assets/images/aboutus/client-img-9.png'
import award2 from '../../../src/assets/images/aboutus/client-img-10.png'
import award3 from '../../../src/assets/images/aboutus/client-img-11.png'
import award4 from '../../../src/assets/images/aboutus/client-img-12.png'
import award5 from '../../../src/assets/images/aboutus/client-img-13.png'
import award6 from '../../../src/assets/images/aboutus/client-img-14.png'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ScndAboutSect = () => {
    const { t } = useTranslation();

    const topPage = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='scnd-about-sect'>
            <div className="fscnd-about-sect">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                            <div className="movie-tale">
                                <img src={taleimg} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                            <div className="movie-tale tale-text ">
                                <p>{t("aboutus.scndSect.taleof")}</p>
                                <h3>{t("aboutus.scndSect.taleofAbt")}</h3>
                                <NavLink to='/movies-shop' onClick={topPage} className='btn-shop btn btn-outline-dark px-4'>{t("home.thrdFourSect.getBtn")}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sScnd-about-sect">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                            <div className="text-box">
                                <h5>TV SHOWS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, felis eget ultricies auctor, mauris ante varius dolor, ut .</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                            <div className="text-box">
                                <h5>FESTIVALS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, felis eget ultricies auctor, mauris ante varius dolor, ut .</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-12 col-sm-12">
                            <div className="text-box">
                                <h5>{t("header.movies")}</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus, felis eget ultricies auctor, mauris ante varius dolor, ut .</p>
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
                        <img src={aboutport1} />
                        <div className="slider-text">
                            <h4>WILD FLOWERS</h4>
                            <p>Laruel Lebrun / Colombia</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutport2} />
                        <div className="slider-text">
                            <h4>SALOON IN THE DESERT</h4>
                            <p>Inga Hirschel / Sweden</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutport3} />
                        <div className="slider-text">
                            <h4>ROUGH START</h4>
                            <p>Aira Kristensen / Iceland</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutport1} />
                        <div className="slider-text">
                            <h4>WILD FLOWERS</h4>
                            <p>Laruel Lebrun / Colombia</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutport2} />
                        <div className="slider-text">
                            <h4>SALOON IN THE DESERT</h4>
                            <p>Inga Hirschel / Sweden</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={aboutport3} />
                        <div className="slider-text">
                            <h4>ROUGH START</h4>
                            <p>Aira Kristensen / Iceland</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >

            <div className="slast-about-sect">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-12 col-sm-6 last-left-side">
                            <p className='about-mini-title'>{t("header.contact")}</p>
                            <div className="about-textbox">
                                <h2>{t("aboutus.scndSect.contactTxt1")} <span>{t("aboutus.scndSect.high")}</span> {t("aboutus.scndSect.contactTxt2")}</h2>
                            </div>
                            <NavLink to='/contact-us' onClick={topPage} className='btn-shop btn btn-outline-dark px-4'>{t("footer.contactus")}</NavLink>
                        </div>

                        <div className="col-12 col-lg-6 col-md-12 col-sm-6 ">
                            <div className="last-right-side">
                                <div className="container">
                                    <p className='about-mini-title'>{t("aboutus.scndSect.awards")}</p>
                                    <div className="row">
                                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                            <div className="award-icons">
                                                <img src={award1} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                            <div className="award-icons">
                                                <img src={award2} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                            <div className="award-icons">
                                                <img src={award3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                            <div className="award-icons">
                                                <img src={award4} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                            <div className="award-icons">
                                                <img src={award5} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                                            <div className="award-icons">
                                                <img src={award6} alt="" />
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

export default ScndAboutSect