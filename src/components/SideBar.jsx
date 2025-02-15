import React, { useContext, useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMovie } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import logoDark from '../../src/assets/images/logo-main-dark.png'
import logolight from '../../src/assets/images/logo-light.png'
import { ThemeContext } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const SideHeader = () => {
  const [toggleBtn, setToggleBtn] = useState('toggle-active');
  const [theme, setTheme] = useContext(ThemeContext);
  const { t } = useTranslation();

  const toggle = () => {
    if (toggleBtn == '') {
      setToggleBtn('toggle-active');
    } else {
      setToggleBtn('');
    }
  }

  return (
    <div className={`${toggleBtn} side-bar-header`}>
      <div className='side-nav' >
        <div className="toggle-btn" onClick={toggle}>
          <FaBars />
        </div>
        <div className="side-nav-body">
          <div className="side-nav_logo">
            {theme == "light" ?
              <img src={logoDark} alt="" />
              : <img src={logolight} alt="" />
            }
          </div>
          <ul>
            <li>
              <NavLink to='/dashboard/overview' onClick={toggle} className='nav-link'><LuLayoutDashboard className='left-icon' /> <span className='sidebar-title'>{t("dashboard.overTxt")}</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/categories-list' onClick={toggle} className='nav-link'><BiCategory className='left-icon' /> <span className='sidebar-title'>{t("dashboard.categories.ctgTit")}</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/movie-list' onClick={toggle} className='nav-link'><MdOutlineMovie className='left-icon' /> <span className='sidebar-title'>{t("dashboard.movies.movieTit")}</span></NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/blog-list' onClick={toggle} className='nav-link'><FaRegNewspaper className='left-icon' /> <span className='sidebar-title'>{t("dashboard.movies.blogTit")}</span></NavLink>
            </li>
            <li>
              <NavLink to='/' onClick={toggle} className='nav-link'><IoHomeOutline className='left-icon' /> <span className='sidebar-title'>{t("dashboard.backHomeBtn")}</span></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideHeader