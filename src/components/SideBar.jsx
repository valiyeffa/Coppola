import React, { useState } from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMovie } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import logoDark from '../../src/assets/images/logo-main-dark.png'

const SideHeader = () => {
  const [toggleBtn, setToggleBtn] = useState('side-bar-header');

  const toggle = () => {
    if (toggleBtn == 'side-bar-header') {
      setToggleBtn('toggle-active');
    } else {
      setToggleBtn('side-bar-header');
    }
  }

  return (
      <div className={toggleBtn}>
        <div className='side-nav' >
        <div className="toggle-btn" onClick={toggle}>
          <FaBars />
        </div>
          <div className="side-nav-body">
            <div className="side-nav_logo">
              <img src={logoDark} alt="" />
            </div>
            <ul>
              <li>
                <NavLink to='/dashboard/overview' className='nav-link'><LuLayoutDashboard className='left-icon' /> <span className='sidebar-title'>Overview</span></NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/categories-list' className='nav-link'><BiCategory className='left-icon' /> <span className='sidebar-title'>Categories</span></NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/movie-list' className='nav-link'><MdOutlineMovie className='left-icon' /> <span className='sidebar-title'>Movies List</span></NavLink>
              </li>
              <li>
                <NavLink to='/blog-list' className='nav-link'><FaRegNewspaper className='left-icon' /> <span className='sidebar-title'>Blog List</span></NavLink>
              </li>
              <li>
                <NavLink to='/' className='nav-link'><IoHomeOutline className='left-icon' /> <span className='sidebar-title'>Back To Home</span></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default SideHeader