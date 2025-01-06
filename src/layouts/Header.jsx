import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import HeaderComp from './HeaderComp';

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

}

export default Header