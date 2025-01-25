import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
                <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/blog-single-7.jpg" alt="" />
                    <div className="slide-title-text">
                        <span className='blog-ctg carousel-ctg'>Adventure</span>
                        <h3>Frankly, my dear, i don't give a damn </h3>
                        <p>Written and directed by Lars Johnson/ Sweden 2011 Written and directed by Lars Johnson ...</p>
                    </div>
                    <div className="slide-blog-btns">
                        <button className='btn btn-add btn-outline-light'>See Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/blog-single-8.jpg" alt="" />
                    <div className="slide-title-text">
                        <span className='blog-ctg carousel-ctg'>Adventure</span>
                        <h3>Frankly, my dear, i don't give a damn </h3>
                        <p>Written and directed by Lars Johnson/ Sweden 2011 Written and directed by Lars Johnson ...</p>
                    </div>
                    <div className="slide-blog-btns">
                        <button className='btn btn-add btn-outline-light'>See Details</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/blog-single-9.jpg" alt="" />
                    <div className="slide-title-text">
                        <span className='blog-ctg carousel-ctg'>Adventure</span>
                        <h3>Frankly, my dear, i don't give a damn </h3>
                        <p>Written and directed by Lars Johnson/ Sweden 2011 Written and directed by Lars Johnson ...</p>
                    </div>
                    <div className="slide-blog-btns">
                        <button className='btn btn-add btn-outline-light'>See Details</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BlogFirstSect
