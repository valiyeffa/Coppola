import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import HeaderComp from '../components/HeaderComp';
import SideHeader from '../components/SideBar'; 

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1000) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [])

    if (location.pathname !== "/dashboard/overview" && location.pathname !== '/dashboard/movie-list' 
        && location.pathname !== '/dashboard/blog-list' && location.pathname !== '/dashboard/categories-list' 
        && location.pathname !== '/dashboard/categories-list/add-category' && location.pathname !== '/dashboard/movie-list/add-movie') {
        if (location.pathname !== "/login-register") {
            if (location.pathname !== "/about-us" && location.pathname !== "/contact-us" && location.pathname !== "/movies-shop") {
                return (
                    <header className={scroll ? "scroll" : 'header'}>
                        <HeaderComp />
                    </header>
                )
            } else {
                return (
                    <header className='other-header'>
                        <HeaderComp />
                    </header>
                )
            }
        } else {
            return null;
        }
    } else {
        return (
            <>
                <SideHeader />
            </>
        )
    }
}

export default Header