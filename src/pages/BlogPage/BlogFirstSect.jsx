import React from 'react'
import img1 from '../../../src/assets/images/blog/blog-single-7.jpg'
import img2 from '../../../src/assets/images/blog/blog-single-8.jpg'
import img3 from '../../../src/assets/images/blog/blog-single-9.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const BlogFirstSect = () => {
    return (
        <div className='blog-first-sect'>
            <Swiper
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 3200,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay, EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" />
                    <div className="slide-title-text">
                        <span className='blog-ctg carousel-ctg'>Adventure</span>
                        <h3>Frankly, my dear, i don't give a damn </h3>
                        <p>Written and directed by Lars Johnson/ Sweden 2011 Written and directed by Lars Johnson ...</p>
                    </div>
                    <div className="slide-blog-btns">
                        <Link to={`/blog/frankly-my-dear-i-dont-give-a-damn`} state={{ blogID: '67965e599ae447e57245dfea' }} className='btn btn-add btn-outline-light'>See Details</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                    <div className="slide-title-text">
                        <span className='blog-ctg carousel-ctg'>Adventure</span>
                        <h3>Frankly, my dear, i don't give a damn </h3>
                        <p>Written and directed by Lars Johnson/ Sweden 2011 Written and directed by Lars Johnson ...</p>
                    </div>
                    <div className="slide-blog-btns">
                        <Link to={`/blog/frankly-my-dear-i-dont-give-a-damn`} state={{ blogID: '67965e599ae447e57245dfea' }} className='btn btn-add btn-outline-light'>See Details</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />
                    <div className="slide-title-text">
                        <span className='blog-ctg carousel-ctg'>Adventure</span>
                        <h3>Frankly, my dear, i don't give a damn </h3>
                        <p>Written and directed by Lars Johnson/ Sweden 2011 Written and directed by Lars Johnson ...</p>
                    </div>
                    <div className="slide-blog-btns">
                        <Link to={`/blog/frankly-my-dear-i-dont-give-a-damn`} state={{ blogID: '67965e599ae447e57245dfea' }} className='btn btn-add btn-outline-light'>See Details</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BlogFirstSect
