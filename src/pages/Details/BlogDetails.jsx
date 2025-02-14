import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useGetBlogsDetailQuery, useGetBlogsQuery } from '../../tools/services/blogApi';
import { environment } from '../../environments/environment';
import Preloader from '../../components/Preloader';
import userImg from '../../../src/assets/images/userImage.png'
import { FaRegStar, FaStar } from 'react-icons/fa';
import BlogCard from '../../components/BlogCard';
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
    const location = useLocation();
    const blogID = location.state?.blogID;
    const { data: blogDetID, isLoading } = useGetBlogsDetailQuery(blogID);
    const { data: blogData } = useGetBlogsQuery();
    const [rel, setReal] = useState([]);
    const blogDataLength = blogData?.length;
    const { t } = useTranslation();

    useEffect(() => {
        if (blogData?.length > 2) {
            const shuffledMovies = [...blogData]
                .filter(blog => blog._id !== blogID)
                .sort(() => 0.5 - Math.random())
                .slice(0, 2);
            setReal(shuffledMovies);
        }
    }, [blogDataLength, blogData, blogID]);

    return (
        <div className='blog-detail details'>
            <div className="page-title">
                <p>Blog / {blogDetID?.category} / {blogDetID?.title}</p>
            </div>
            {isLoading ? <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center my-5'><Preloader /></div> :
                <div className="container-fluid">
                    <div className="row">
                        <div className="blog-image">
                            <img src={`${environment.baseUrl}${blogDetID?.image?.url}`} alt={blogDetID?.title} />
                        </div>
                    </div>
                    <div className="row blog-body">
                        <div className="blog-detail-body">
                            <div className="blog-ctg">
                                <p className="textbox-ctg"><span>{blogDetID?.category}</span> NOVEMBER 30</p>
                            </div>
                            <div className="blog-header-title">
                                <h1>{blogDetID?.title}</h1>
                            </div>
                            <div className="blog-text">
                                <p>{blogDetID?.content}</p>
                            </div>
                            <Link to='/blog' onClick={() => window.scrollTo(0, 0)} className='btn back-pg'>{t("movieBlog.details.backBtn")}</Link>

                        </div>
                    </div>

                    {/* //!======================DETAILS-REVIEW====================== */}

                    <div className="row">
                        <div className="reviews">
                            <div className="reviews-title">
                                <p>{t("movieBlog.details.comment")} (2)</p>
                            </div>
                            <div className="reviews-body">
                                <div className="reviews-body_title">
                                    <p>2 {t("movieBlog.details.comment")} {blogDetID?.title}</p>
                                </div>
                                <div className="review-user">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-2">
                                            <img width={70} src={userImg} alt="" />
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="review-text">
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                                <p className='user-title'><b>JOHN SANDMAN -</b> NOVEMBER 26</p>
                                                <p className='text'>
                                                    Nam porta, lectus id finibus maximus, ante justo volutpat felis, et placerat velit nulla a magna. Nulla luctus, velit quis condimentum lobortis, ante magna tristique tellus, ut feugiat sapien nunc vel sem. In auctor dignissim posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-1 col-md-2">
                                            <img width={70} src={userImg} alt="" />
                                        </div>
                                        <div className="col-lg-6 col-md-10">
                                            <div className="review-text">
                                                <p className="card-text"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                                <p className='user-title'><b>ERIC GORDON -</b> DECEMBER 15</p>
                                                <p className='text'>
                                                    Cras non diam vitae ipsum commodo sollicitudin id id purus. Sed tincidunt quis sem et luctus. Curabitur vitae mattis enim. Maecenas volutpat nisi molestie ex blandit, eget ullamcorper tellus laoreet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //!======================RELATED-MOVIES====================== */}

                    <div className="row">
                        <div className="related-movies">
                            <div className="related-movies_title">
                                <p>{t("movieBlog.details.readAlso")}</p>
                            </div>
                            <div className="related-movies-body">
                                <div className="row">
                                    {rel && rel.map((i, index) => (
                                        <div key={index} className='blog-cards-col col-12 col-lg-6 col-md-6 col-sm-12'>
                                            <BlogCard alldata={i} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default BlogDetails