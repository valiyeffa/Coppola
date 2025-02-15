import React, { useContext } from 'react'
import BlogFirstSect from './BlogFirstSect'
import ScndBlogSect from './ScndBlogSect'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { ThemeContext } from '../../context/ThemeContext'

const Blog = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className='blog'>
      <BlogFirstSect />
      <ScndBlogSect />
      <div className="right-mini-sect">
        <button className='theme-btn' onClick={() => {
          theme === "light" ? setTheme('dark') : setTheme('light');
          theme === "light" ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
        }}>{theme === "light" ? <><FaMoon /> <span>Dark Mode</span> </> : <> <MdSunny /> <span>Light Mode</span></>}</button>
      </div>
    </div>
  )
}

export default Blog