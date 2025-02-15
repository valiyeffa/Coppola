import React, { useContext } from 'react'
import HeadMovie from './HeadMovie'
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const MoviesShop = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div>
      <HeadMovie />
      <div className="right-mini-sect">
        <button className='theme-btn' onClick={() => {
          theme === "light" ? setTheme('dark') : setTheme('light');
          theme === "light" ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
        }}>{theme === "light" ? <><FaMoon /> <span>Dark Mode</span> </> : <> <MdSunny /> <span>Light Mode</span></>}</button>
      </div>
    </div>
  )
}

export default MoviesShop