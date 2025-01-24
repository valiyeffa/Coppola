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

const HeaderComp = () => {
    const cookies = new Cookies(null, { path: '/' });
    const [dash, setDash] = useState('none');
    const { data: userName } = useGetUsersQuery();
    const userId = cookies.get('user-id');
    const signedinAcc = userName && userName.find(p => p._id == userId);

    useEffect(() => {
        if (cookies.get("role") === "admin") {
            setDash("block");
        } else {
            setDash("none");
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

    const items = [
        {
            label: `${signedinAcc && signedinAcc.name} ${signedinAcc && signedinAcc.surname}`,
            disabled: false,
        },
        {
            label: 'Sign Out',
            onClick: logout,
        }
    ];


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
                            <NavLink to="/movies-shop" onClick={topPage} className="nav-link">MOVIES <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about-us" onClick={topPage} className="nav-link">ABOUT US <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link" href="#">BLOG <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' onClick={topPage} className="nav-link">CONTACT <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                        <li style={{ display: dash }} className="nav-item">
                            <NavLink to='/dashboard/overview' onClick={topPage} className="nav-link">DASHBOARD <MdKeyboardArrowRight className='collapse-right-arr' /></NavLink>
                        </li>
                    </ul>
                    <div className="nav-right-side">
                        <button className='btn get-basket-btn'>Get Basket <span>|</span> 0</button>
                        <button className='btn get-fav-btn'>
                            <ConfigProvider theme={{
                                components: {
                                    Badge: {
                                        indicatorHeight: 15
                                    },
                                },
                            }}>
                                <Badge count={0} color='#EAA57F'>
                                    <FaRegHeart className='fav-btn' />
                                </Badge>
                            </ConfigProvider>
                        </button>
                        {cookies.get('user') == true ?
                            <Dropdown className='btn account-btn m-0' menu={{ items }}>
                                <p>
                                    <Space>
                                        <FaRegUser />
                                        <DownOutlined />
                                    </Space>
                                </p>
                            </Dropdown> :
                            <NavLink to='/login-register' className='btn account-btn'><FaRegUser /><span className='enter-account'>ACCOUNT</span></NavLink>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComp