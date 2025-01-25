import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import bloglist1 from '../../assets/images/blog-list-main-1.jpg'
import bloglist2 from '../../assets/images/blog-list-main-2.jpg'
import { NavLink } from 'react-router-dom';

const ThirdHomeSect = () => {
    const topPage = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='third-home-sect'>
            <div className='container-fluid'>
                <div className="third-sect-title">
                    <h6>NEWS</h6>
                </div>

                <div className="row">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="news-blog">
                            <img src={bloglist1} alt="" />
                            <div className="blog-textbox">
                                <div className="textbox-catg">
                                    <p><span>ARTWORK</span> DECEMBER 10</p>
                                </div>
                                <div className="textbox-title">
                                    <a href="#" className='textbox-text'>Interview with movie producer Brian harington</a>
                                    <NavLink to='/blog' onClick={topPage} className='view-more-btn'>View More <MdArrowOutward className='submit-arrow' /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="news-blog">
                            <div className="news-blog-img">
                                <img src={bloglist2} alt="" />
                            </div>
                            <div className="blog-textbox-scnd">
                                <div className="textbox-catg">
                                    <p><span>ARTWORK</span> DECEMBER 10</p>
                                </div>
                                <div className="textbox-title">
                                    <a href="#" className='textbox-text'>Interview in london with movie producer sebastian ring</a>
                                    <NavLink to='/blog' onClick={topPage} className='view-more-btn'>View More <MdArrowOutward className='submit-arrow' /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdHomeSect