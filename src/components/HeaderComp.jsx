import React, { useState, useEffect } from 'react'
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { Badge, ConfigProvider, Dropdown, Space } from 'antd';
import Cookies from 'universal-cookie';
import { DownOutlined } from '@ant-design/icons';
import { useGetUsersQuery } from '../tools/services/categoryApi';
import Swal from 'sweetalert2';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist';
import { useTranslation } from 'react-i18next';
import logoLight from '../../src/assets/images/logo-light.png'

const HeaderComp = () => {
    const cookies = new Cookies(null, { path: '/' });
    const [dash, setDash] = useState('none');
    const [padd, setPadd] = useState('');
    const [themeMode, setTheme] = useState('Light Mode');
    const { data: userName } = useGetUsersQuery();
    const userId = cookies.get('user-id');
    const signedinAcc = userName && userName.find(p => p._id == userId);
    const { totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();
    const { t } = useTranslation();

    useEffect(() => {
        if (cookies.get("role") === "admin") {
            setDash("");
            setPadd('p-0');
        } else {
            setDash("none");
            setPadd('');
        }
    }, [cookies]);

    const topPage = () => {
        window.scrollTo(0, 0);
    }

    const logout = () => {
        cookies.remove('role');
        cookies.remove('x-auth-token');
        cookies.remove('user');
        cookies.remove('user-id');

        Swal.fire({
            title: "Goodbye!",
            text: "See you later.",
            icon: "success",
            preConfirm: () => { window.location.reload() }
        })
    }

    const themeModeHandle = () => {
        if (themeMode === 'Light Mode') {
            setTheme('Dark Mode');
        } else {
            setTheme('Light Mode');
        }
    }

    const items = [
        {
            label: `${t("logout")}`,
            onClick: logout,
        },
    ];

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logoLight} width={110} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <HiMiniBars3BottomRight />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${padd}`}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={topPage} aria-current="page" >{t("header.home")} <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies-shop" onClick={topPage} className="nav-link">{t("header.movies")} <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about-us" onClick={topPage} className="nav-link">{t("header.aboutus")} <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link" onClick={topPage} href="#">BLOG <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' onClick={topPage} className="nav-link">{t("header.contact")} <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li style={{ display: dash }} className="nav-item">
                            <NavLink to='/dashboard/overview' onClick={topPage} className="nav-link">{t("header.dashboard")} <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                    </ul>
                    <div className="nav-right-side">
                        <NavLink to='/basket' className='btn get-basket-btn'>{t("header.basket")} <span>|</span> {totalItems}</NavLink>
                        <NavLink to='/wishlist' className='btn get-fav-btn'>
                            <ConfigProvider theme={{
                                components: {
                                    Badge: {
                                        indicatorHeight: 15
                                    },
                                },
                            }}>
                                <Badge count={totalWishlistItems} color='#EAA57F'>
                                    <FaRegHeart className='fav-btn' />
                                </Badge>
                            </ConfigProvider>
                        </NavLink>
                        {cookies.get('user') == true ?
                            <ConfigProvider
                                theme={{
                                    token: {
                                        borderRadiusLG: 0,
                                    },
                                }}>
                                <Dropdown className='btn account-btn m-0' menu={{ items }}>
                                    <p>
                                        <Space>
                                            <FaRegUser />
                                            <span className='name' style={{ fontSize: '15px' }}>{t("header.hi")}, {signedinAcc && signedinAcc.name}!</span>
                                            <DownOutlined />
                                        </Space>
                                    </p>
                                </Dropdown>
                            </ConfigProvider> :
                            <NavLink to='/login-register' className='btn account-btn'><FaRegUser /><span className='enter-account'>ACCOUNT</span></NavLink>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComp