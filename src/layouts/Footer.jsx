import React from 'react'
import footerImg from '../assets/images/footer-img.png'
import { FaInstagram, FaYoutube, FaVimeoV, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink, useLocation, useParams } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const { slug } = useParams();

    const topPage = () => {
        window.scrollTo(0, 0);
    }

    if (location.pathname !== '/login-register' && location.pathname !== "/dashboard/overview" && location.pathname !== '/dashboard/movie-list'
        && location.pathname !== '/dashboard/movie-list/add-movie' && location.pathname !== '/dashboard/blog-list' && location.pathname !== '/dashboard/blog-list/add-blogs'
        && location.pathname !== '/dashboard/categories-list/add-category' && location.pathname !== `/dashboard/categories-list/edit-category/${slug}`
        && location.pathname !== '/dashboard/categories-list') {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
                        <div className="col mb-3">
                            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                <img src={footerImg} alt="" />
                            </a>
                        </div>
                        <div className="col mb-3"></div>
                        <div className="col mb-3"></div>
                        <div className="col mb-3">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><NavLink to='/about-us' onClick={topPage} className="nav-link p-0">ABOUT US</NavLink></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0">HELP AND FAQ</a></li>
                                <li className="nav-item mb-2"><p className="nav-link p-0">LANGUAGE:
                                    <select className='lang-btn btn p-0 mx-2'>
                                        <option value="en" className='btn'>En</option>
                                        <option value="az" className='btn'>Az</option>
                                    </select>
                                </p></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><NavLink to='/our-team' onClick={topPage} className="nav-link p-0 ">TEAM</NavLink></li>
                                <li className="nav-item mb-2"><NavLink to='/contact-us' onClick={topPage} className="nav-link p-0 ">CONTACT US</NavLink></li>
                            </ul>
                        </div>
                        <div className="col mb-3">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><NavLink to="/movies-shop" onClick={topPage} className="nav-link p-0 ">SHOP</NavLink></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">BLOG</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom d-flex flex-column flex-sm-row justify-content-between py-4 ">
                        <div className="footer-bottom-left d-flex flex-column">
                            <ul className="list-unstyled d-flex">
                                <li><a className="link-body" href="https://www.instagram.com/" target='_blank'><FaInstagram /></a></li>
                                <li className="ms-3"><a className="link-body" target='_blank' href="https://www.youtube.com/"><FaYoutube /></a></li>
                                <li className="ms-3"><a className="link-body" target='_blank' href="https://vimeo.com/"><FaVimeoV /></a></li>
                                <li className="ms-3"><a className="link-body" target='_blank' href="https://x.com/"><FaTwitter /></a></li>
                            </ul>
                            <p>© {new Date().getFullYear()} Prepared by Firuza Valiyeva, Ramazan Ismayilov</p>
                        </div>

                        <div className="footer-bottom-right d-flex justify-content-between">
                            <a href='https://www.google.com/maps?q=1316+Via+del+Parione+Florence+CA+90291,+Italy&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiCwZ6msJ_0AhUugv0HHT0wDw8Q_AUoAXoECAEQAw' target='_blank' className='map-location'>1316 Via del Parione <br />Florence CA 90291, Italy</a>

                            <form>
                                <div className="d-flex justify-content-between border-bottom">
                                    <input type="email" placeholder="Sign up to Newsletter" />
                                    <button className="btn" type="submit"><FiArrowUpRight /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }

}

export default Footer