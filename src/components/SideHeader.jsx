import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineMovie } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

import logoDark from '../../src/assets/images/logo-main-dark.png'

const SideHeader = () => {
  return (
    <div className='side-bar-header'>
      <div className='side-nav'>
        <div className="side-nav-body">
          <div className="side-nav_logo">
            <img src={logoDark} alt="" />
          </div>
          <ul>
            <li>
              <NavLink to='/dashboard' className='nav-link'><LuLayoutDashboard /> Overview</NavLink>
            </li>
            <li>
              <NavLink to='/movie-list' className='nav-link'><MdOutlineMovie /> Movies List</NavLink>
            </li>
            <li>
              <NavLink to='/blog-list' className='nav-link'><FaRegNewspaper /> Blog List</NavLink>
            </li>
            <li>
              <NavLink to='/' className='nav-link'><IoHomeOutline /> Back To Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideHeader