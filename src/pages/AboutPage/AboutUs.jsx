import React, { useContext } from 'react'
import FirstAboutSect from './FirstAboutSect'
import ScndAboutSect from './ScndAboutSect'
import { ThemeContext } from '../../context/ThemeContext';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';

const AboutUs = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className='about'>
      <FirstAboutSect />
      <ScndAboutSect />
      <div className="right-mini-sect">
        <button className='theme-btn' onClick={() => {
          theme === "light" ? setTheme('dark') : setTheme('light');
          theme === "light" ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
        }}>{theme === "light" ? <><FaMoon /> <span>Dark Mode</span> </> : <> <MdSunny /> <span>Light Mode</span></>}</button>
      </div>
    </div>
  )
}

export default AboutUs