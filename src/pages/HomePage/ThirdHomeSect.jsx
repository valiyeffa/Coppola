import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import bloglist1 from '../../assets/images/blog-list-main-1.jpg'
import bloglist2 from '../../assets/images/blog-list-main-2.jpg'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ThirdHomeSect = () => {
  const { t } = useTranslation();

    const topPage = () => {
        window.scrollTo(0, 0);
    }

    const navigateToBlog = () => {
        window.location.href = '/blog';
    }

    return (
        <div className='third-home-sect'>
            <div className='container-fluid'>
                <div className="third-sect-title">
                    <h6>{t("home.thrdFourSect.newtit")}</h6>
                </div>

                <div className="row">
                    <div onClick={navigateToBlog} className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="news-blog">
                            <img src={bloglist1} alt="" />
                            <div className="blog-textbox">
                                <div className="textbox-catg">
                                    <p><span>ARTWORK</span> DECEMBER 10</p>
                                </div>
                                <div className="textbox-title">
                                    <a href="#" className='textbox-text'>{t("home.thrdFourSect.boxTit1")}</a>
                                    <NavLink to='/blog' onClick={topPage} className='view-more-btn'>{t("home.thrdFourSect.viewBtn")} <MdArrowOutward className='submit-arrow' /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={navigateToBlog} className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="news-blog">
                            <div className="news-blog-img">
                                <img src={bloglist2} alt="" />
                            </div>
                            <div className="blog-textbox-scnd">
                                <div className="textbox-catg">
                                    <p><span>ARTWORK</span> DECEMBER 10</p>
                                </div>
                                <div className="textbox-title">
                                    <a href="#" className='textbox-text'>{t("home.thrdFourSect.boxTit2")}</a>
                                    <NavLink to='/blog' onClick={topPage} className='view-more-btn'>{t("home.thrdFourSect.viewBtn")} <MdArrowOutward className='submit-arrow' /></NavLink>
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