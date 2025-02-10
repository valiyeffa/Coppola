import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import HeaderComp from '../components/HeaderComp';
import SideHeader from '../components/SideBar';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const location = useLocation();
    const { slug, blogSlug, movieSlug, movieDetSlug, blogDetSlug } = useParams();

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
        && location.pathname !== '/dashboard/blog-list' && location.pathname !== '/dashboard/blog-list/add-blogs' && location.pathname !== '/dashboard/categories-list'
        && location.pathname !== '/dashboard/categories-list/add-category' && location.pathname !== `/dashboard/categories-list/edit-category/${slug}` && location.pathname !== `/dashboard/blog-list/edit-blog/${blogSlug}`
        && location.pathname !== '/dashboard/movie-list/add-movie' && location.pathname !== `/dashboard/movie-list/edit-movie/${movieSlug}`) {

        if (location.pathname !== "/about-us" && location.pathname !== "/contact-us" && location.pathname !== `/blog/${blogDetSlug}` && location.pathname !== "/movies-shop" && location.pathname !== `/movies-shop/${movieDetSlug}` 
            && location.pathname !== "/faq" && location.pathname !== "/basket" && location.pathname !== "/wishlist" && location.pathname !== "/checkout") {
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
        return (
            <>
                <SideHeader />
            </>
        )
    }
}

export default Header