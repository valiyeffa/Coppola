import React from 'react'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { Badge, ConfigProvider, Space } from 'antd';

const HeaderComp = () => {
    const topPage = () => {
        window.scrollTo(0, 0);
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png" width={110} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <HiMiniBars3BottomRight />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page" >HOME <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies-shop" className="nav-link">MOVIES <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about-us" onClick={topPage} className="nav-link">ABOUT US <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOG <MdKeyboardArrowRight className='collapse-right-arr' /></a>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' onClick={topPage} className="nav-link">CONTACT <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                    </ul>
                    <div className="nav-right-side">
                        <button className='btn get-basket-btn'>Get Basket <span>|</span> 0</button>
                        <button className='btn get-fav-btn'>
                            <ConfigProvider theme={{
                                components: {
                                    Badge: {
                                        indicatorHeight:15
                                    },
                                },
                            }}>
                                <Badge count={2} color='#EAA57F'>
                                    <FaRegHeart className='fav-btn' />
                                </Badge>
                            </ConfigProvider>
                        </button>
                        <NavLink to='/login-register' className='btn account-btn'><FaRegUser /><span className='enter-account'>ACCOUNT</span></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComp