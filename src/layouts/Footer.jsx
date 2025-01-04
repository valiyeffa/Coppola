import React from 'react'
import footerImg from '../assets/images/footer-img.png'
import { FaInstagram, FaYoutube, FaVimeoV, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const topPage = () => {
        window.scrollTo(0, 0);
    }

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
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">SHOP</a></li>
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
                        <p>© 2022 Qode Interactive, All Rights Reserved</p>
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
}

export default Footer